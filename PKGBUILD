# Maintainer: Alexis Janon <kardyne -at- gmail -dot- com>

_pkgsrcname=simple-line-icons
_pkgmaintainer=thesabbir
_versionprefix=v
pkgver=2.5.5
pkgrel=1
pkgdesc="Simple and Minimal Line Icons "
pkgname=ttf-simple-line-icons
arch=(any)
url="https://thesabbir.github.io/simple-line-icons"
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/${_pkgmaintainer}/${_pkgsrcname}/archive/${_versionprefix}${pkgver}.tar.gz")
md5sums=('e4179283cdcce2038e5f286616feb058')

package() {
  cd "${srcdir}/${_pkgsrcname}-${pkgver}/fonts"
  install -D -m644 "Simple-Line-Icons.ttf" "$pkgdir/usr/share/fonts/TTF/Simple-Line-Icons.ttf"
}
