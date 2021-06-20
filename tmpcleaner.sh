#!/bin/sh
# author: Ehsan Ghorbannezhad <ehsangn@protonmail.ch>
# brief: remove/trash old files/directories from /tmp.
#
# this script removes/trashes top-level files in /tmp that are
# older than the specified amount of time.
# it also removes top-level directories in /tmp that
# are older than the specified amount of time, and don't
# contain any files newer than that time.
#
# the -l option instructs tmpcleaner to
# log the summary to a log file.

# clean files older than how many days:
trash_older_than=30
purge_older_than=90

# paths
tmp_dir=/tmp
trash_dir=/tmp/OLD_TMP_FILES
log_file=/var/log/tmpcleaner.log

# add typical bin dirs to PATH
export PATH="${PATH}:/usr/bin:/usr/local/bin"

# run with root priviliges
if [ "$1" != -s ]; then
    sudo tmpcleaner -s "$@"
    exit
else
    shift
fi

main()
{
    while true; do
        case "$1" in
            -l) log=true; shift ;;
            -h | --help) echo "remove old files and dirs in /tmp."; exit ;;
            "") break ;;
            *) echo "unrecognized argument: $1" >&2; exit 1 ;;
        esac
    done

    mkdir -p "$trash_dir" || exit 1

    must_trash="$(getold "$tmp_dir" $trash_older_than)"
    must_purge="$(getold "$trash_dir" $purge_older_than)"

    echo "$must_trash" | trash
    echo "$must_purge" | purge

    summary
    [ "$log" = true ] && log >> "$log_file"
}

trash()
{
    while IFS= read -r file; do
        [ -e "$file" ] && mv -fv "$file" "$trash_dir"
    done
}

purge()
{
    while IFS= read -r file; do
        [ -e "$file" ] && rm -rfv "$file"
    done
}

getold()
{
    find "$1" -mindepth 1 -maxdepth 1 -type f -mtime +$2
    find "$1" -mindepth 1 -maxdepth 1 -type d -mtime +$2 -not -path "*${trash_dir}*" |
        while IFS= read -r dir; do
            test "$(find "$dir" -type f -mtime -$2 -quit)" || printf '%s\n' "$dir"
        done
}

log()
{
    date "+%F %T" | tr '\n' ' '
    summary | tr '\n' ' '
    echo
}

summary()
{
    echo "moved $(line_count "$must_trash") tmpfiles to trash ($trash_dir)."
    echo "purged $(line_count "$must_purge") tmpfiles from trash."
}

line_count()
{
    [ -z "$1" ] && echo 0 && return
    echo "$1" | wc -l
}

main "$@"
exit
