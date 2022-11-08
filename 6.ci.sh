#!/usr/bin/env bash


set -x

export CMD_PATH=$(cd `dirname $0`; pwd)
export PROJECT_NAME="${CMD_PATH##*/}"

cd $CMD_PATH

cd ~/
mkdir -p ~/9317/
cd ~/9317/
git clone --depth=1 https://github.com/archlinux/aur.git 9317-archlinux-aur

cd ~/9317/9317-archlinux-aur
git branch -r | grep -v '\->' | sed "s,\x1B\[[0-9;]*[a-zA-Z],,g" | while read remote; do git branch --track "${remote#origin/}" "$remote"; done
git fetch --all
git pull --all


git remote add origin  git@github.com:archlinux365/9317-archlinux-aur.git
git remote set-url origin git@github.com:archlinux365/9317-archlinux-aur.git

cd ~/9317/9317-archlinux-aur/.git/
cd refs
cd remotes
ls -al
ls -al origin 
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
