#!/usr/bin/env bash


set -x

export CMD_PATH=$(cd `dirname $0`; pwd)
export PROJECT_NAME="${CMD_PATH##*/}"

cd $CMD_PATH

cp -fv known_hosts /root/.ssh/known_hosts
ssh-keygen -f "/root/.ssh/known_hosts" -R "frs.sourceforge.net"
ssh-keyscan "frs.sourceforge.net" >> /root/.ssh/known_hosts


ssh-keygen -f "/root/.ssh/known_hosts" -R "github.com"
ssh-keyscan "github.com" >> /root/.ssh/known_hosts
cat /root/.ssh/known_hosts

mkdir -p /root/git
cd /root/git
git clone --depth=1 https://github.com/archlinux/aur.git 9317-archlinux-aur

cd /root/git/9317-archlinux-aur
git remote -v
git remote add origin  git@github.com:archlinux/aur.git
git remote set-url origin git@github.com:archlinux/aur.git



git fetch -c protocol.version=2 fetch --no-tags --prune --progress --no-recurse-submodules --depth=1 origin 

git remote add origin  git@github.com:archlinux365/9317-archlinux-aur.git
git remote set-url origin git@github.com:archlinux365/9317-archlinux-aur.git

cd /root/git/9317-archlinux-aur/.git/
cd refs
cd remotes
ls -al
ls -al origin 
ls -al upstream
cd /root/git/9317-archlinux-aur/.git/refs/remotes/origin

git config --global user.email "gnuhub@gmail.com"
git config --global user.name "gnuhub"
ls -1

for pkg in `ls`
do 
    echo $pkg
    # if [ "$pkg" != "HEAD" ];then
    
    #     cd /root/git/9317-archlinux-aur/
    
   
    #     git checkout $pkg 
    #     git push origin :$pkg
    #     rsync -avP $CMD_PATH/t/ /root/git/9317-archlinux-aur/
    #     git add .
    #     git commit -a -m ""add ci template""
    #     git push origin $pkg
    
    #     cd /root/git/9317-archlinux-aur/.git/refs/remotes/origin
    # fi
done
