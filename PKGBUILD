# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=vdu_controls
pkgver=1.6.4
pkgrel=1
pkgdesc="Visual Display Unit virtual control panel - a GUI front end to ddcutil"
arch=('any')
url="https://github.com/digitaltrails/vdu_controls"
license=('GPL3')
depends=('ddcutil' 'python' 'python-pyqt5' 'qt5-multimedia')
makedepends=('python-build' 'python-installer' 'python-setuptools' 'python-wheel')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/v$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('2a1ce32d102fb4aa4d2e94bce86e735e81ca745d7720fb8a08ca6eb923babe02'
            'b29047aeba56c9d26b5b21fb8ced269a69b587ee79835d4b56653934fbb550d5')

build() {
  cd "$pkgname-$pkgver"
  python -m build --wheel --no-isolation
}

package() {
  cd "$pkgname-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl

  mv "$pkgdir/usr/bin/$pkgname.py" "$pkgdir/usr/bin/$pkgname"

  install -Dm644 "docs/_build/man/$pkgname.1" -t "$pkgdir/usr/share/man/man1/"
  install -Dm644 "$pkgname.png" -t "$pkgdir/usr/share/icons/hicolor/256x256/apps/"
  install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
}
