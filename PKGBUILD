# Maintainer: Daniel Maslowski <info@orangecms.org>

_pyname=conda-package-handling
pkgname=python-${_pyname}
pkgver=1.3.4
pkgrel=3
pkgdesc="Create and extract conda package of various formats"
arch=('any')
url="https://github.com/conda/conda-package-handling"
license=('BSD')
depends=(
  'python'
  'python-six'
)
options=(!emptydirs)
install=
source=(https://github.com/conda/$_pyname/archive/$pkgver.tar.gz)
sha512sums=('685b07316c219d1e75f54a8ce782e1b8ee75ee16faf9589e2a2d6117c0b6b465b5a19369ddd67d0826cf2fc4f549b593da2743a90335717bc5b98f47ba41462c')

package() {
  cd "$srcdir/${_pyname}-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:
