# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=vdu_controls
pkgver=1.5.9
pkgrel=1
pkgdesc="Visual Display Unit virtual control panel - a GUI front end to ddcutil"
arch=('any')
url="https://github.com/digitaltrails/vdu_controls"
license=('GPL3')
depends=('ddcutil' 'python' 'python-pyqt5')
makedepends=('python-build' 'python-installer' 'python-setuptools' 'python-wheel')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('47583bc396a6495db6c128e5b01c1dcd9a271b34e329b4a6e3dd03a3045b4df5'
            'e2a7db639d78f066d8214fea9751d5fe4cb14a8835dc2cd5d96d45049abcdab8')

build() {
  cd "$pkgname-$pkgver"
  python -m build --wheel --no-isolation
}

package() {
  cd "$pkgname-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl

  mv "$pkgdir/usr/bin/$pkgname.py" "$pkgdir/usr/bin/$pkgname"

  # Remove duplicate GPL3 license
  local site_packages=$(python -c "import site; print(site.getsitepackages()[0])")
  rm "${pkgdir}${site_packages}/vdu_controls_digitaltrails-$pkgver.dist-info/LICENSE.md"

  install -Dm644 "docs/_build/man/$pkgname.1" -t "$pkgdir/usr/share/man/man1/"
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
}
