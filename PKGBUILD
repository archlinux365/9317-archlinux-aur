# Maintainer: Jan Houben <jan@nexttrex.de>
# Contributor: Jesus Alvarez <jeezusjr at gmail dot com>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/archzfs/archzfs
#
pkgname="zfs-utils-git"
_commit='1ec7eda16743a74b363d3765bca7642935422862'

pkgver=2019.06.04.r5167.g1ec7eda16
pkgrel=1
pkgdesc="Kernel module support files for the Zettabyte File System."
makedepends=("python" "git")
arch=("x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/zfs.git#commit=${_commit}"
        "zfs-utils.initcpio.install"
        "zfs-utils.initcpio.hook"
        "zfs-utils.initcpio.zfsencryptssh.install")
sha256sums=("SKIP"
            "29a8a6d76fff01b71ef1990526785405d9c9410bdea417b08b56107210d00b10"
            "78e038f95639c209576e7fa182afd56ac11a695af9ebfa958709839ff1e274ce"
            "29080a84e5d7e36e63c4412b98646043724621245b36e5288f5fed6914da5b68")
license=("CDDL")
groups=("archzfs-linux-git")
provides=("zfs-utils" "spl-utils")
install=zfs-utils.install
conflicts=("zfs-utils" "spl-utils")
replaces=("spl-utils-common-git" "zfs-utils-common-git")
backup=('etc/zfs/zed.d/zed.rc' 'etc/default/zfs' 'etc/modules-load.d/zfs.conf')

build() {
    cd "${srcdir}/zfs"
    ./autogen.sh
    ./configure --prefix=/usr --sysconfdir=/etc --sbindir=/usr/bin --with-mounthelperdir=/usr/bin \
                --libdir=/usr/lib --datadir=/usr/share --includedir=/usr/include \
                --with-udevdir=/lib/udev --libexecdir=/usr/lib/zfs-${pkgver} \
                --with-config=user --enable-systemd
    make
}

package() {
    cd "${srcdir}/zfs"
    make DESTDIR="${pkgdir}" install
    # Remove uneeded files
    rm -r "${pkgdir}"/etc/init.d
    rm -r "${pkgdir}"/usr/share/initramfs-tools
    rm -r "${pkgdir}"/usr/lib/modules-load.d
    # move module tree /lib -> /usr/lib
    cp -r "${pkgdir}"/{lib,usr}
    rm -r "${pkgdir}"/lib
    # Autoload the zfs module at boot
    mkdir -p "${pkgdir}/etc/modules-load.d"
    printf "%s\n" "zfs" > "${pkgdir}/etc/modules-load.d/zfs.conf"
    # fix permissions
    chmod 750 ${pkgdir}/etc/sudoers.d
    # Install the support files
    install -D -m644 "${srcdir}"/zfs-utils.initcpio.hook "${pkgdir}"/usr/lib/initcpio/hooks/zfs
    install -D -m644 "${srcdir}"/zfs-utils.initcpio.install "${pkgdir}"/usr/lib/initcpio/install/zfs
    install -D -m644 "${srcdir}"/zfs-utils.initcpio.zfsencryptssh.install "${pkgdir}"/usr/lib/initcpio/install/zfsencryptssh
    install -D -m644 contrib/bash_completion.d/zfs "${pkgdir}"/usr/share/bash-completion/completions/zfs
}
