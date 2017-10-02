# Maintainer: Lorenzo Ferrillo <lorenzofer at live dot it>


pkgname=edi
pkgver=0.6.0
pkgrel=1
pkgdesc="EFL based IDE."
arch=('i686' 'x86_64')
url="https://www.enlightenment.org/"
license=('BSD')
depends=('efl' 'bear')
provides=('edi')
source=("http://download.enlightenment.org/rel/apps/${pkgname}/${pkgname}-${pkgver}.tar.gz")
sha256sums=('SKIP')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  make DESTDIR="${pkgdir}" install

  install -d "${pkgdir}/usr/share/doc/${pkgname}/"
  install -m644 -t "${pkgdir}/usr/share/doc/${pkgname}/" "ChangeLog" "NEWS" "README"

  install -d "${pkgdir}/usr/share/licenses/${pkgname}/"
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}/" "AUTHORS" "COPYING"
}
