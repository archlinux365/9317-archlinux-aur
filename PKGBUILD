# Maintainer: Marcel Röthke <marcel.roethke@haw-hamburg.de>

pkgname='exabgp'
pkgver=4.2.6
pkgrel=1
pkgdesc="The BGP swiss army knife of networking"
url="https://github.com/Exa-Networks/exabgp"
license=('BSD')
depends=('python')
makedepends=('python-setuptools')
arch=('any')
source=("exabgp-${pkgver}.tar.gz::https://github.com/Exa-Networks/exabgp/archive/${pkgver}.tar.gz")
sha256sums=('566fa6f59a76bb19421cee3733c66e4a4c26692a71c76d5401282b09b98d3524')

package() {
  cd "$srcdir/exabgp-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1

  install -m 755 -d "${pkgdir}/usr/lib/systemd/system"
  install -m 644 etc/systemd/exabgp.service "${pkgdir}/usr/lib/systemd/system/exabgp.service"
  install -D -m644 LICENCE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

