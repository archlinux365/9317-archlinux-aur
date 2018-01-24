# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
# ! WARNING !
#
# The archzfs packages are kernel modules, so these PKGBUILDS will only work with the kernel package they target. In this
# case, the archzfs-linux-zen packages will only work with the default linux-zen package! To have a single PKGBUILD target many
# kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
pkgbase="spl-linux-zen-git"
pkgname=("spl-linux-zen-git" "spl-linux-zen-git-headers")

pkgver=2018.01.24.r1062.23602fd.4.14.15.1
pkgrel=1
makedepends=("linux-zen-headers=4.14.15-1" "git")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/spl.git#commit=23602fdb39e1254c669707ec9d2d0e6bcdbf1771")
sha256sums=("SKIP")
license=("GPL")
depends=("spl-utils-common-git=2018.01.24.r1062.23602fd" "kmod" "linux-zen=4.14.15-1")

build() {
    cd "${srcdir}/spl"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/4.14.15-1-zen/build \
                --with-linux-obj=/usr/lib/modules/4.14.15-1-zen/build \
                --with-config=kernel
    make
}

package_spl-linux-zen-git() {
    pkgdesc="Solaris Porting Layer kernel modules."
    install=spl.install
    provides=("spl")
    groups=("archzfs-linux-zen-git")
    conflicts=('spl-linux-zen')
    replaces=("spl-git")
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_spl-linux-zen-git-headers() {
    pkgdesc="Solaris Porting Layer kernel headers."
    conflicts=('spl-archiso-linux-headers' 'spl-archiso-linux-git-headers' 'spl-linux-hardened-headers' 'spl-linux-hardened-git-headers' 'spl-linux-lts-headers' 'spl-linux-lts-git-headers' 'spl-linux-headers' 'spl-linux-git-headers' 'spl-linux-vfio-headers' 'spl-linux-vfio-git-headers' 'spl-linux-zen-headers'  )
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/4.14.15-1-zen/Module.symvers
}
