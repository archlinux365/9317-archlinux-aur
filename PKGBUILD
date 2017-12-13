# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
#
pkgname="spl-utils-common"

pkgver=0.7.4
pkgrel=1
pkgdesc="Solaris Porting Layer kernel module support files."
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-0.7.4/spl-0.7.4.tar.gz")
sha256sums=("SKIP")
groups=("archzfs-linux")
license=("GPL")
provides=("spl-utils")
makedepends=("git")
conflicts=('spl-utils-common-git' 'spl-utils-linux-git' 'spl-utils-linux' 'spl-utils-linux-lts' 'spl-utils-linux-lts-git')
replaces=("spl-utils-linux", "spl-utils-linux-lts")

build() {
    cd "${srcdir}/spl-0.7.4"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin --with-config=user
    make
}

package() {
    cd "${srcdir}/spl-0.7.4"
    make DESTDIR="${pkgdir}" install
}
