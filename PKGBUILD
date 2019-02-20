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
# case, the archzfs-linux-vfio packages will only work with the default linux-vfio package! To have a single PKGBUILD target many
# kernels would make for a cluttered PKGBUILD!
#
# If you have a custom kernel, you will need to change things in the PKGBUILDS. If you would like to have AUR or archzfs repo
# packages for your favorite kernel package built using the archzfs build tools, submit a request in the Issue tracker on the
# archzfs github page.
#
pkgbase="zfs-linux-vfio-git"
pkgname=("zfs-linux-vfio-git" "zfs-linux-vfio-git-headers")
_commit='bb1be77a35d3cf5389a36f1d13935811962278c3'
_zfsver="2019.02.19.r4962.gbb1be77a3"
_kernelver="4.20.7.arch1-1"
_extramodules="4.20.7-arch1-1-vfio"

pkgver="${_zfsver}_$(echo ${_kernelver} | sed s/-/./g)"
pkgrel=1
makedepends=("linux-vfio-headers=${_kernelver}" "git" "python")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/zfs.git#commit=${_commit}"
        "upstream-4f981f6-additional-fixes-for-current_kernel_time-in-4.20.patch")
sha256sums=("SKIP"
            "6f27c3dae57c424e06aec31df6c1e1a821e547aa4e933f2f9b894b5e6762b52d")
license=("CDDL")
depends=("kmod" "zfs-utils-git=${_zfsver}" "linux-vfio=${_kernelver}")

build() {
    cd "${srcdir}/zfs"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-${zfsver} --with-config=kernel \
                --with-linux=/usr/lib/modules/${_extramodules}/build \
                --with-linux-obj=/usr/lib/modules/${_extramodules}/build
    make
}

package_zfs-linux-vfio-git() {
    pkgdesc="Kernel modules for the Zettabyte File System."
    install=zfs.install
    provides=("zfs" "spl")
    groups=("archzfs-linux-vfio-git")
    conflicts=("zfs-dkms" "zfs-dkms-git" "zfs-dkms-rc" 'zfs-linux-vfio' 'spl-linux-vfio-git' 'spl-linux-vfio' "spl-dkms" "spl-dkms-git")
    replaces=("spl-linux-vfio-git")
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_zfs-linux-vfio-git-headers() {
    pkgdesc="Kernel headers for the Zettabyte File System."
    provides=("zfs-headers" "spl-headers")
    conflicts=("zfs-headers" "zfs-dkms" "zfs-dkms-git" "zfs-dkms-rc" "spl-dkms" "spl-dkms-git" "spl-headers")
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/${_extramodules}/Module.symvers
}
