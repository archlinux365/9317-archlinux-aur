# Maintainer: Marcus Behrendt <marcus dot behrendt dot 86 at gmail dot com>
# Based on zfs-git

## Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
## Contributor: Kyle Fuller <inbox at kylefuller dot co dot uk>
##
## This PKGBUILD was generated by the archzfs build scripts located at
##
## http://github.com/demizer/archzfs
##
## The build script generates and updates the pkgver and _kernel* variables.
##
pkgname="zfs-lts318-ck-git"
pkgver=0.6.4.2_r0_g44b5ec8_3.18.19_1
pkgrel=1
license=('CDDL')

# Used incase the i686 and x86_64 linux packages get out of sync with the
# PKGREL. This occurred on January 31, 2014 where i686 was versioned at
# 3.12.9-1 and x86_64 was versioned at 3.12.9-2.
_kernel_version="3.18.19-1"
_kernel_version_full="3.18.19-1"


pkgdesc="Kernel modules for the Zettabyte File System for linux-lts318-ck."
depends=("spl-lts318-ck-git" "zfs-utils-lts318-ck-git=${pkgver}" "linux-lts318-ck=${_kernel_version}")
makedepends=("git" "linux-lts318-ck-headers=${_kernel_version}")
arch=("i686" "x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/zfs.git#commit=44b5ec8f")
groups=("archzfs-lts318-ck-git")
md5sums=('SKIP')
replaces=("zfs")
provides=("zfs" "zfs-git")
conflicts=("zfs" "zfs-lts")
install=zfs.install

build() {
    cd "${srcdir}/zfs"
    ./autogen.sh

    ./configure --prefix=/usr \
                --sysconfdir=/etc \
                --sbindir=/usr/bin \
                --libdir=/usr/lib \
                --datadir=/usr/share \
                --includedir=/usr/include \
                --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs \
                --with-config=kernel \
                --with-linux=/usr/lib/modules/${_kernel_version_full}-lts318-ck/build

    make
}

package() {
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install

    cp -r "$pkgdir"/{lib,usr}
    rm -r "$pkgdir"/lib

    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/${_kernel_version_full}-lts318-ck/Module.symvers
}
