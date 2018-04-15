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
pkgbase="spl-linux-lts-git"
pkgname=("spl-linux-lts-git" "spl-linux-lts-git-headers")

pkgver=2018.04.09.r1071.9125f8f.4.14.34.1
pkgrel=1
makedepends=("linux-lts-headers=4.14.34-1" "libelf" "git")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/spl.git#commit=9125f8f5bdb36bfbd2d816d30b6b29b9f89ae3d8")
sha256sums=("SKIP")
license=("GPL")
depends=("spl-utils-common-git=2018.04.09.r1071.9125f8f" "kmod" "linux-lts=4.14.34-1")

build() {
    cd "${srcdir}/spl"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/4.14.34-1-lts/build \
                --with-linux-obj=/usr/lib/modules/4.14.34-1-lts/build \
                --with-config=kernel
    make
}

package_spl-linux-lts-git() {
    pkgdesc="Solaris Porting Layer kernel modules."
    install=spl.install
    provides=("spl")
    groups=("archzfs-linux-lts-git")
    conflicts=('spl-linux-lts')
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_spl-linux-lts-git-headers() {
    pkgdesc="Solaris Porting Layer kernel headers."
    conflicts=('spl-archiso-linux-headers' 'spl-archiso-linux-git-headers' 'spl-linux-hardened-headers' 'spl-linux-hardened-git-headers' 'spl-linux-lts-headers'  'spl-linux-headers' 'spl-linux-git-headers' 'spl-linux-vfio-headers' 'spl-linux-vfio-git-headers' 'spl-linux-zen-headers' 'spl-linux-zen-git-headers' )
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/4.14.34-1-lts/Module.symvers
}
