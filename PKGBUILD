# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
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
pkgbase="zfs-linux-vfio"
pkgname=("zfs-linux-vfio" "zfs-linux-vfio-headers")

pkgver=0.7.6.4.13.12.2
pkgrel=1
makedepends=("linux-vfio-headers=4.13.12-2" "spl-linux-vfio-headers")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("https://github.com/zfsonlinux/zfs/releases/download/zfs-0.7.6/zfs-0.7.6.tar.gz")
sha256sums=("1687f4041a990e35caccc4751aa736e8e55123b81d5f5a35b11916d9e580c23d")
license=("CDDL")
depends=("kmod" "spl-linux-vfio" "zfs-utils-common=0.7.6" "linux-vfio=4.13.12-2")

build() {
    cd "${srcdir}/zfs-0.7.6"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --libdir=/usr/lib \
                --datadir=/usr/share --includedir=/usr/include --with-udevdir=/lib/udev \
                --libexecdir=/usr/lib/zfs-0.7.6 --with-config=kernel \
                --with-linux=/usr/lib/modules/4.13.12-2-vfio/build \
                --with-linux-obj=/usr/lib/modules/4.13.12-2-vfio/build
    make
}

package_zfs-linux-vfio() {
    pkgdesc="Kernel modules for the Zettabyte File System."
    install=zfs.install
    provides=("zfs")
    groups=("archzfs-linux-vfio")
    conflicts=('zfs-linux-vfio-git')
    replaces=("zfs-git")
    cd "${srcdir}/zfs-0.7.6"
    make DESTDIR="${pkgdir}" install
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Remove src dir
    rm -r "${pkgdir}"/usr/src
}

package_zfs-linux-vfio-headers() {
    pkgdesc="Kernel headers for the Zettabyte File System."
    conflicts=('zfs-archiso-linux-headers' 'zfs-archiso-linux-git-headers' 'zfs-linux-hardened-headers' 'zfs-linux-hardened-git-headers' 'zfs-linux-lts-headers' 'zfs-linux-lts-git-headers' 'zfs-linux-headers' 'zfs-linux-git-headers'  'zfs-linux-vfio-git-headers' 'zfs-linux-zen-headers' 'zfs-linux-zen-git-headers' )
    cd "${srcdir}/zfs-0.7.6"
    make DESTDIR="${pkgdir}" install
    rm -r "${pkgdir}/lib"
    # Remove reference to ${srcdir}
    sed -i "s+${srcdir}++" ${pkgdir}/usr/src/zfs-*/4.13.12-2-vfio/Module.symvers
}
