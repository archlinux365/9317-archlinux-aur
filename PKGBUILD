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
pkgbase="zfs-linux-rc"
pkgname=("zfs-linux-rc" "zfs-linux-rc-headers")
_zfsver="0.8.0_rc2"
_kernelver="4.19.9.arch1-1"
_extramodules="${_kernelver/.arch/-arch}-ARCH"

pkgver="${_zfsver}_$(echo ${_kernelver} | sed s/-/./g)"
pkgrel=2
makedepends=("linux-headers=${_kernelver}")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-${_zfsver/_/-}/zfs-${_zfsver/_/-}.tar.gz")
sha256sums=("66fa2aa270586dc3c0f64d08b83f126f288163d6fb622e8d85e3e86a118a2082")
license=("CDDL")
depends=("kmod" "zfs-utils-rc=${_zfsver}" "linux=${_kernelver}")

build() {
    cd "${srcdir}/zfs-${_zfsver/_rc*/}"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-${zfsver} --with-config=kernel \
                --with-linux=/usr/lib/modules/${_extramodules}/build \
                --with-linux-obj=/usr/lib/modules/${_extramodules}/build
    make
}

package_zfs-linux-rc() {
    pkgdesc="Kernel modules for the Zettabyte File System."
    install=zfs.install
    provides=("zfs" "spl")
    groups=("archzfs-linux-rc")
    conflicts=("zfs-dkms" "zfs-dkms-git" "zfs-dkms-rc" 'zfs-linux' 'zfs-linux-git' 'spl-linux' "spl-dkms" "spl-dkms-git")
    cd "${srcdir}/zfs-${_zfsver/_rc*/}"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_zfs-linux-rc-headers() {
    pkgdesc="Kernel headers for the Zettabyte File System."
    provides=("zfs-headers" "spl-headers")
    conflicts=("zfs-headers" "zfs-dkms" "zfs-dkms-git" "zfs-dkms-rc" "spl-dkms" "spl-dkms-git" "spl-headers")
    cd "${srcdir}/zfs-${_zfsver/_rc*/}"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/${_extramodules}/Module.symvers
}
