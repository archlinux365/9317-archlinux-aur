# Contributor: Médéric Boquien <mboquien@free.fr>

pkgname=erfa
pkgver=2.0.0
pkgrel=1
pkgdesc="Set of algorithms and procedures used in fundamental astronomy"
url="https://github.com/liberfa/erfa"
arch=('x86_64' 'i686')
license=('BSD')
options=('!libtool')
source=("https://github.com/liberfa/erfa/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('6761a8c1e1fc20f8603b451a47a47c872fe99e39ec805f131f3db24aeb5b6ac3ac480c89630ff9defbedd0e621fb7e2b7922869b8c29ada1fd41cb9793c9ca0a')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  ./configure --prefix=/usr
#  make CFLAGF="-c -O -fPIC"
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  make DESTDIR="${pkgdir}/" install
}
