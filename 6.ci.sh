#!/usr/bin/env bash


set -x

export CMD_PATH=$(cd `dirname $0`; pwd)
export PROJECT_NAME="${CMD_PATH##*/}"

cd $CMD_PATH

cd ~/
mkdit -p ~/9317/

git clone --depth=1 https://github.com/archlinux/aur.git 9317-archlinux-aur

cd ~/9317/9317-archlinux-aur
git remote -v
git fetch --all

git remote add origin  git@github.com:archlinux365/9317-archlinux-aur.git
git remote set-url origin git@github.com:archlinux365/9317-archlinux-aur.git

cd ~/9317/9317-archlinux-aur/.git/
cd refs
cd remotes
ls -al
ls -al origin 
ls -al upstream
cd ~/9317/9317-archlinux-aur/.git/refs/remotes/origin

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
