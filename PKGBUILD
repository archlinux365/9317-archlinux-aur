# Maintainer: Taboon Egon <te451 -_AT_- netcourrier -_DOT_- com>
# Contributor: Narrat <address??? at domain??? dot tld???>
# Contributor: der_fenix <derfenix -_AT_- gmail -_DOT_- com>
pkgname=semantik
pkgver=1.2.4
pkgrel=1
pkgdesc="mindmapping-like tool for document generation (reports, thesis, etc)"
arch=('x86_64')
url="https://waf.io/semantik.html"
license=('GPL3')
depends=('python' 'qt5-webengine' 'qt5-svg' 'kdelibs4support' 'kio' 'python-pygments')
makedepends=('shared-mime-info' 'desktop-file-utils')
optdepends=('minted: syntax highlighting support in documents generated by LaTeX')
source=("https://waf.io/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('a460621545c69fca8dff66b22220d829d574ec964c730b626c2add2fbea2a66f')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./waf configure clean build
}


package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./waf install --destdir=${pkgdir} --nomimes --noldconfig --nogtkicons
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/example.sem" "$pkgdir/usr/share/doc/$pkgname/example.sem"
}
