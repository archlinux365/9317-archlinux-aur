#!/usr/bin/env bash

#打开执行过程显示
set +x
#显示设置环境变量 CMD_PATH当前脚本所在目录
export CMD_PATH=$(cd `dirname $0`; pwd)
export PROJECT_NAME="${CMD_PATH##*/}"

cd $CMD_PATH
env
pwd
whoami

cp -fv known_hosts /root/.ssh/known_hosts
ssh-keygen -f "/root/.ssh/known_hosts" -R "frs.sourceforge.net"
ssh-keyscan "frs.sourceforge.net" >> /root/.ssh/known_hosts
cat /root/.ssh/known_hosts

rsync -avzP ./x86_64/  gnuhub@frs.sourceforge.net:/home/frs/project/archlinux365/9317-archlinux-aur/x86_64/
