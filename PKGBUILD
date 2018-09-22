# Maintainer: Jan Houben <jan@nexttrex.de>
# Contributor: Jesus Alvarez <jeezusjr at gmail dot com>
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
pkgbase="spl-linux"
pkgname=("spl-linux" "spl-linux-headers")
_splver="0.7.11"
_kernelver="4.18.9.arch1-1"
_extramodules="${_kernelver/.arch/-arch}-ARCH"

pkgver="${_splver}_$(echo ${_kernelver} | sed s/-/./g)"
pkgrel=2
makedepends=("linux-headers=${_kernelver}")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-${_splver}/spl-${_splver}.tar.gz")
sha256sums=("d6ddd225e7f464007c960f10134c8a48fb0de525f75ad05d5ddf36685b1ced67")
license=("GPL")
depends=("spl-utils-common=${_splver}" "kmod" "linux=${_kernelver}")

build() {
    cd "${srcdir}/spl-${_splver}"
    ./autogen.sh
    ./configure --prefix=/usr --libdir=/usr/lib --sbindir=/usr/bin \
                --with-linux=/usr/lib/modules/${_extramodules}/build \
                --with-linux-obj=/usr/lib/modules/${_extramodules}/build \
                --with-config=kernel
    make
}

package_spl-linux() {
    pkgdesc="Solaris Porting Layer kernel modules."
    provides=("spl")
    groups=("archzfs-linux")
    conflicts=("spl-dkms" "spl-dkms-git" 'spl-linux-git')
    replaces=("spl-git")
    cd "${srcdir}/spl-${_splver}"
    make DESTDIR="${pkgdir}" install
    mv "${pkgdir}/lib" "${pkgdir}/usr/"
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_spl-linux-headers() {
    pkgdesc="Solaris Porting Layer kernel headers."
    provides=("spl-headers")
    conflicts=("spl-dkms" "spl-dkms-git" "spl-headers")
    cd "${srcdir}/spl-${_splver}"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/spl-*/${_extramodules}/Module.symvers
}
