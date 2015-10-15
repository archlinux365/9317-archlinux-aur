# Maintainer: Jesus Alvarez <jeezusjr at gmail dot com>
# Contributor: Kyle Fuller <inbox at kylefuller dot co dot uk>
#
# This PKGBUILD was generated by the archzfs build scripts located at
#
# http://github.com/demizer/archzfs
#
# The build script generates and updates the pkgver and _kernel* variables.
#
pkgname="spl-utils-git"
pkgver=0.6.5.3_r0_g7e85f6b_4.2.3_1
pkgrel=1
license=('GPL')
pkgdesc="Solaris Porting Layer kernel module support files."
makedepends=("git")
arch=("i686" "x86_64")
url="http://zfsonlinux.org/"
source=("git+https://github.com/zfsonlinux/spl.git#commit=7e85f6bf"
        "spl-utils.hostid")
groups=("archzfs-git")
md5sums=('SKIP'
         'a54f0041a9e15b050f25c463f1db7449')
replaces=("spl-utils")
provides=("spl-utils")
conflicts=("spl-utils" "spl-utils-lts")

build() {
    cd "${srcdir}/spl"
    ./autogen.sh

    _at_enable=""
    [ "${CARCH}" == "i686"  ] && _at_enable="--enable-atomic-spinlocks"

    ./configure --prefix=/usr \
                --libdir=/usr/lib \
                --sbindir=/usr/bin \
                --with-config=user \
                ${_at_enable}

    make
}

package() {
    cd "${srcdir}/spl"
    make DESTDIR="${pkgdir}" install

    install -D -m644 "${srcdir}"/spl-utils.hostid "${pkgdir}"/etc/hostid
}
