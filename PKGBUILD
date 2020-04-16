# Maintainer: Michael Picht <mipi@fsfe.org>
#
# SPDX-FileCopyrightText: 2018-2020 Michael Picht <mipi@fsfe.org>
#
# SPDX-License-Identifier: GPL-3.0-or-later

_pkgorg=gitlab.com/mipimipi
pkgname=crema-git
_pkgname=crema
pkgver=2.0
pkgrel=1
pkgdesc="Manage custom (remote) repositories"
arch=(any)
url="https://$_pkgorg/$_pkgname"
license=(GPL3)
source=("git+https://$_pkgorg/$_pkgname.git")
validpgpkeys=(11ECD6695134183B3E7AF1C2223AAA374A1D59CE) # Michael Picht <mipi@fsfe.org>
md5sums=(SKIP)
depends=(
    binutils
    devtools
    git
    pacman
    rsync
    sudo
)
makedepends=(
    git
    go
    make
    pandoc
)
optdepends=(gnupg)
provides=(crema)
conflicts=(crema-git)

depends+=(
#    jq
#    pacutils
#    parallel
#    wget
)
#makedepends+=(m4)
#optdepends+=(
#    "bash-completion: bash completion"
#    "devtools: aur-chroot"
#    "vifm: build file interaction"
#)

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

build() {
    cd "$srcdir/$_pkgname"
    make
}

package() {
    cd "$srcdir/$_pkgname"
    make DESTDIR="$pkgdir" install
}
