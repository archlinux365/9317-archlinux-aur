# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: Dmitrij D. Czarkoff <czarkoff@gmail.com>

pkgname=rem
pkgver=0.6.0
pkgrel=2
pkgdesc="portable library for real-time audio and video processing"
arch=('i686' 'x86_64' 'armv6h')
url="http://creytiv.com/rem.html"
license=('BSD')
depends=('re')
source=("https://github.com/creytiv/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz"
        "rem-flags.patch")
sha256sums=('fb04e691161eea23c238362b210351d7a19a23691cf31db7d64e364320f18a33'
            '2db9d6f0264a40ca59d7cc06855ba762e1759596f2a87a818bd72fa5a5626f41')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  patch -Np1 -i "${srcdir}/rem-flags.patch"
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 docs/COPYING "${pkgdir}/usr/share/licenses/${pkgname}/COPYING"
}
