#!/bin/sh

# This file is part of https://aur.archlinux.org/packages/mkinitcpio-systemd-tool/

# user root login shell program

# implements password query/reply
# https://www.freedesktop.org/wiki/Software/systemd/PasswordAgents/
# https://www.freedesktop.org/software/systemd/man/systemd-ask-password.html

# ask file format in /run/systemd/ask-password/ask.xxxxxx:
#[Ask]
#PID=179
#Socket=/run/systemd/ask-password/sck.41815b63f6e61f4c
#AcceptCached=1
#Echo=0
#NotAfter=0
#Message=Please enter passphrase for disk VBOX_HARDDISK (swap)!
#Icon=drive-harddisk
#Id=cryptsetup:/dev/block/8:2

# pattern: "'Please enter passphrase for disk VBOX_HARDDISK (root)!' (PID 167)" 
parse_crypt_pid () {
    echo "$1" | sed -r "s%.*PID[ ]+([0-9]+).*%\1%"
}

do_prompt() {
    local choice
    while [ "$choice" != "q" ] ; do
        echo
        echo "select:"
        echo "c) crypto secret"
        echo "s) user shell"
        echo "r) reboot"
        echo "q) quit"
        read -p ">" choice
        case "$choice" in
        c) do_crypt ;;
        s) do_shell ;;
        r) do_reboot ;;
        q) do_exit ;;
        *) echo "$choice ?" ;;
        esac
    done
}

do_shell() {
    exec /bin/sh
}

do_reboot() {
    /bin/systemctl reboot
}

do_exit() {
    exit 0
}

# replace process
do_close() {
    exec /bin/sh -c exit 0
}


# verify if this is remote session
is_ssh_connect() {
    local flag="$SSH_CONNECTION"
    [ -n "$flag" ]
}

# verify if given process is alive
is_pid_present() {
    local pid=$1
    ps | grep -E -e "[ ]+${pid}[ ]+.*"
}

# verify if crypttab 
has_crypt_jobs() {
    $command_syctl list-jobs | grep -q 'cryptsetup'
}

# verify if there are any crypto requests
is_ask_pending() {
    local list="$(list_ask_config)"
    [ -n "$list" ]
}

# list current crypto questions
list_ask_config() {
    grep -l 'cryptsetup' $folder_ask/ask.* 2>/dev/null
}

# list current crypto channels
list_ask_socket() {
    local config_list="$1"
    local config
    for config in $config_list ; do
        echo $(cat "$config" | grep -i 'socket=' | sed -e 's/socket=//I')
    done
}

# query password from the console
run_query() {
    $command_query "secret>"
}

# reply password to the requester
run_reply() {
    local secret="$1"
    local socket="$2"
    echo "$secret" | $command_reply "1" "$socket"
}

# ask user for password once and answer to multiple requests at once
run_answer() {
    local socket="" 
    local socket_list="$1"
    local secret=$(run_query)
    for socket in $socket_list ; do
        run_reply "$secret" "$socket"
    done
}

# verify if any files on the list are still present
has_any_file() {
    local file_list="$1" file=
    for file in $file_list ; do
        [ -e "$file" ] && return 0
    done
    return 1
}

# await for requesters to remove their questions
wait_confirm() {
    local socket_list="$1"
    while  has_any_file "$socket_list" ; do
        sleep 0.5
        let count+=1
        if [ "$count" -gt "10" ] ; then
            return 1
        fi
    done
    return 0
}

# read a portion of current console output
read_console() {
    tail -c 1024 "/dev/vcs"
}

# ensure console is no longer producing changing output
wait_console() {
    local count=1 text1= text2=
    while true ; do
        text1=$(read_console)
        sleep 0.5
        text2=$(read_console)
        if [ "$text1" = "$text2" ] ; then
            return 0
        fi
        let count+=1
        if [ "$count" -gt "10" ] ; then
            return 1
        fi
    done
}

# ensure pending crypto jobs asked their requests 
wait_request() {
    local count=1
    while ! is_ask_pending ; do
        sleep 0.5
        let count+=1
        if [ "$count" -gt "10" ] ; then
            return 1
        fi
    done
    return 0
}


# crypto secret default logic
do_crypt() {

    wait_request

    wait_console

    local config_list= socket_list=

    # verify some crypt requests are pending

    config_list=$(list_ask_config)
    socket_list=$(list_ask_socket "$config_list")
        
    if [ "" = "$socket_list" ] ; then
        echo "error: do_crypt with no requests"
        return 1
    fi
        
    run_answer "$socket_list"
    
    wait_confirm "$socket_list"

    # verify none crypt requests are pending

    config_list=$(list_ask_config)
    socket_list=$(list_ask_socket "$config_list")

    if has_any_file "$socket_list" ; then
        echo "error: do_crypt failed to respond"
        return 1
    fi
    
    return 0

}

# crypto secret fall back logic
do_agent() {
    $command_agent
}


# process invocation from tty console or ssh connection
do_console() {
    if has_crypt_jobs ; then
        do_crypt || do_agent 
    else 
        do_prompt
    fi
}

# process invocation from systemd service unit
do_service() {
    if has_crypt_jobs ; then
        do_crypt || do_agent
    else
        do_exit 
    fi
}

# shell entry point
program() {
    
    # inject arguments
    local "$@"

    # ensure inotify watch folder
    local folder_ask="/run/systemd/ask-password"
    mkdir -p "$folder_ask"
    
    # required binaries
    local command_syctl="/usr/bin/systemctl"
    local command_query="/usr/bin/systemd-ask-password"
    local command_reply="/usr/lib/systemd/systemd-reply-password"
    local command_agent="/usr/bin/systemd-tty-ask-password-agent"
    
    # determine script invocation type
    case "$entry" in
        # development invocations
        exit)     do_exit ;;
        crypt)    do_crypt ;;
        shell)    do_shell ;;
        reboot)   do_reboot ;;
        prompt)   do_prompt ;;
        # production invocations
        service)  do_service ;;
              *)  do_console ;;
    esac       
}

program "$@"
