# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
# ! WARNING !
#
# The archzfs packages are kernel modules, so these PKGBUILDS will only work with the kernel package they target. In this
# case, the archzfs-linux packages will only work with the default linux package! To have a single PKGBUILD target many
# kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
pkgname="spl-linux-git"
pkgver=0.6.5_r68_g576865b_4.7.0_1
pkgrel=1
pkgdesc="Solaris Porting Layer kernel modules."
depends=("spl-utils-linux-git" "kmod" "linux=4.7")
makedepends=("linux-headers=4.7" "git")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/spl.git")
sha256sums=("SKIP")
groups=("archzfs-linux-git")
license=("GPL")
install=spl.install
provides=("spl")

build() {
    cd "${srcdir}/spl"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/4.7.0-1-ARCH/build \
                --with-linux-obj=/usr/lib/modules/4.7.0-1-ARCH/build \
                --with-config=kernel
    make
}

package() {
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/4.7.0-1-ARCH/Module.symvers
}
