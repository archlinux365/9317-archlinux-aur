# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
# ! WARNING !
#
# The archzfs packages are kernel modules, so these PKGBUILDS will only work with the kernel package they target. In this
# case, the archzfs-linux-lts packages will only work with the default linux-lts package! To have a single PKGBUILD target
# many kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
#
pkgname="spl-linux-lts"
pkgver=0.6.5.9_4.9.16_1
pkgrel=1
pkgdesc="Solaris Porting Layer kernel modules."
depends=("spl-utils-linux-lts" "kmod" "linux-lts=4.9.16")
makedepends=("linux-lts-headers=4.9.16")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-0.6.5.9/spl-0.6.5.9.tar.gz")
sha256sums=("d9ccd24786bb5a8616748a93a3c0b1270aa891175e2f5d726195b416f5c03b9c")
groups=("archzfs-linux-lts")
license=("GPL")
install=spl.install
provides=("spl")
conflicts=('spl-utils-linux' 'spl-utils-linux-git')

build() {
    cd "${srcdir}/spl-0.6.5.9"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/4.9.16-1-lts/build \
                --with-linux-obj=/usr/lib/modules/4.9.16-1-lts/build \
                --with-config=kernel
    make
}

package() {
    cd "${srcdir}/spl-0.6.5.9"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/4.9.16-1-lts/Module.symvers
}
