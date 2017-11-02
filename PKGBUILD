# Maintainer: ponsfoot <cabezon dot hashimoto at gmail dot com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: damir <damir@archlinux.org>

pkgname=uim-debian
pkgver=1.8.6+gh20161003.0.d63dadd
_debrel=8
pkgrel=8
pkgdesc='Multilingual input method library with Debian patches (supports gtk3 and qt5)'
url='https://packages.debian.org/sid/uim'
license=('custom:BSD')
arch=('i686' 'x86_64')
depends=('libxft' 'libedit' 'm17n-lib')
makedepends=('intltool' 'gettext' 'gtk2' 'gtk3' 'qt4' 'qt5-base' 'qt5-x11extras' 'anthy')
optdepends=('qt4: immodule and helper applications'
            'qt5-base: immodule and helper applications'
            'gtk2: immodule and helper applications'
            'gtk3: immodule and helper applications')
conflicts=('uim')
provides=('uim')
install=${pkgname}.install
source=("http://http.debian.net/debian/pool/main/u/uim/uim_${pkgver}.orig.tar.gz"
        "http://http.debian.net/debian/pool/main/u/uim/uim_${pkgver}-${_debrel}.debian.tar.xz"
       qt5-qt4-coexist.patch)
sha256sums=('7a2d1667553afc0bca4cc33f9bc8fb01a6867177d2a3e13b1b85c7add16110e9'
            'eb9c2b2a4df15d945bae5c1d86f392fe17547f6ba72e18a559fb9551a3c0fcf4'
            'a3511837b8fc827e3ff79defff6480fc6b3a4ac031bde478bfd5d6c1b77acfdd')

prepare() {
    cd "${srcdir}/uim-${pkgver}"

    while read p; do

      patch -p1 -i "${srcdir}/debian/patches/${p}"

    done < "${srcdir}/debian/patches/series"

    patch -p1 -i "${srcdir}/qt5-qt4-coexist.patch"

}

build() {
    cd "${srcdir}/uim-${pkgver}"

    export QT_SELECT=qt5

    ./configure \
        --disable-rpath \
        --prefix=/usr \
        --libexecdir=/usr/lib/uim \
        --with-anthy-utf8 \
        --with-gtk \
        --with-gtk3 \
        --with-qt4 \
        --with-qt4-immodule \
        --with-qt5 \
        --with-qt5-immodule

    make
}

package() {
    cd "${srcdir}/uim-${pkgver}"
    make DESTDIR="${pkgdir}" install -j1 # FS#41112
    install -Dm644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
    install -Dm644 "${srcdir}/debian/copyright" \
            "${pkgdir}/usr/share/licenses/${pkgname}/debian/copyright"
}
