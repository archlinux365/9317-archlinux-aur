# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>

_pkgname=tcolorpy
pkgname=python-${_pkgname}
pkgver=0.0.8
pkgrel=1
pkgdesc='Python library to apply true color for terminal text'
arch=('any')
url='https://github.com/thombashi/tcolorpy'
license=('MIT')
depends=('python')
makedepends=('python-setuptools')
provides=("${_pkgname}")
source=("https://files.pythonhosted.org/packages/source/${_pkgname::1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('ffbe886f1321dab88d9cfd4218ea8d93d50d6ad0875c3741dd75fe1437379406')

build() {
  cd "${_pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${_pkgname}-${pkgver}"
  python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
  install -Dm644 -t "${pkgdir}/usr/share/doc/${_pkgname}" 'README.rst'
  install -Dm644 -t "${pkgdir}/usr/share/licenses/${_pkgname}" 'LICENSE'
}

# vim: ts=2 sw=2 et:
