# Maintainer: Alexander Kobel <a-kobel@a-kobel.de>

pkgname=vpn-slice
pkgver=0.4.2
pkgrel=1
pkgdesc='vpnc-script replacement for easy and secure split-tunnel VPN setup'
arch=('any')
url="https://github.com/dlenski/${pkgname}"
license=('GPL3')
depends=(python bind-tools iproute2 iptables)
makedepends=(python-setuptools)
source=("${url}/archive/v${pkgver}.tar.gz")
md5sums=('744b82c39da9262ee9d99445b3dbccea')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1
}
