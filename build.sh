#!/bin/bash
set -e
set -x
makepkg --force
makepkg --printsrcinfo > .SRCINFO
namcap PKGBUILD
namcap wezterm*.pkg.tar.xz
