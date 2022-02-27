#! /usr/bin/bash

makepkg --printsrcinfo > .SRCINFO
makepkg --check

#makepkg -fg
echo "Updating Checksum" 
sed -i "/sha256sums/c$(makepkg -fg)" ./PKGBUILD

echo "Testing Again!"
makepkg --printsrcinfo > .SRCINFO
makepkg --check
