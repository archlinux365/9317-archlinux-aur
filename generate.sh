#!/bin/bash
AUR_INKSCAPE_GIT_UPSTREAM="https://aur.archlinux.org/inkscape-git.git"
LOCAL_TEMP_DIR="$(mktemp -d)"
git clone "${AUR_INKSCAPE_GIT_UPSTREAM}" "${LOCAL_TEMP_DIR}"
cat "${LOCAL_TEMP_DIR}/PKGBUILD" |
  gawk \
    'BEGIN {
        print "# Maintainer: Lucas Lugao <lugaosmurf@gmail.com>"
    }
    /^# Maintainer:/ {$2 = "Contributor:"}
    /gitlab/{
        match($0, /(https[^'"'"'"]*)/, a)
        inkscape_upstream = a[1]
    }
    /pkgname/ {$1="pkgname=inkscape-shallow-git"}
    !/gitlab/ {print} 
    /prepare()/ {
        print "  git clone --depth 1 " inkscape_upstream " \"$_gitname\""
    }' > PKGBUILD
makepkg --printsrcinfo > .SRCINFO