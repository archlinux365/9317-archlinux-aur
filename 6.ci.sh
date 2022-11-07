#!/usr/bin/env bash

#打开执行过程显示
set -x
#显示设置环境变量 CMD_PATH当前脚本所在目录
export CMD_PATH=$(cd `dirname $0`; pwd)
export PROJECT_NAME="${CMD_PATH##*/}"

cd $CMD_PATH

ssh-keygen -f "$HOME/.ssh/known_hosts" -R "github.com"
ssh-keyscan "github.com" >> ~/.ssh/known_hosts


mkdir -p $HOME/git
cd $HOME/git
git clone https://github.com/archlinux/aur.git 9317-archlinux-aur

git clone git@github.com:archlinux365/9317-archlinux-aur.git

cd $HOME/git/9317-archlinux-aur
git remote add origin  git@github.com:archlinux365/9317-archlinux-aur.git
git remote set-url origin git@github.com:archlinux365/9317-archlinux-aur.git

git remote add upstream  https://github.com/archlinux/aur.git
git remote set-url upstream https://github.com/archlinux/aur.git

cd $HOME/git/9317-archlinux-aur/.git/refs/remotes/origin

git config --global user.email "gnuhub@gmail.com"
git config --global user.name "gnuhub"

for pkg in `ls`
do 
    echo $pkg
    cd $HOME/git/9317-archlinux-aur/
    
   
    git checkout $pkg 
    git push origin :$pkg
    rsync -avP $CMD_PATH/t/ $HOME/git/9317-archlinux-aur/
    git add .
    git commit -a -m ""add ci template""
    git push origin $pkg
  
    cd $HOME/git/9317-archlinux-aur/.git/refs/remotes/origin
done
