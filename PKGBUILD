# Maintainer: Butui Hu <hot123tea123@gmail.com>

_pkgname=yacs
pkgname=python-yacs
pkgver=0.1.8
pkgrel=1
pkgdesc='Yet Another Configuration System'
arch=('any')
url='https://github.com/rbgirshick/yacs'
license=('BSD')
makedepends=(
  python-setuptools
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/rbgirshick/yacs/archive/v${pkgver}.tar.gz")
sha512sums=('1f68b38e4ef382c4df5019416181f3fee2ce0b2b006b088a8deb450e711bda4d0debf831008d039bff83e133870ee911fe7e796350848952be692fa67c0a59ae')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 "LICENSE" -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
# vim:set ts=2 sw=2 et:
