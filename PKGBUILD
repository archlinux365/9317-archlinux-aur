# Maintainer: willemw <willemw12@gmail.com>
# Contributor: Limao Luo <luolimao+AUR@gmail.com>
# Contributor: sausageandeggs <sausageandeggs@archlinux.us>
# Contributor: Thomas Dziedzic <gostrc@gmail.com>
# Contributor: Angelo Theodorou <encelo@users.sourceforge.net>

pkgname=gnofract4d
pkgver=4.3
pkgrel=3
pkgdesc="Create beautiful fractal images"
arch=('any')
url="https://github.com/fract4d/gnofract4d"
license=('BSD')
depends=('gtk3' 'libjpeg' 'libpng' 'python-cairo' 'python-gobject')
makedepends=('python-setuptools')
optdepends=('ffmpeg: to create videos')
checkdepends=('python-pytest')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('8fb22fd626b3452957802abe9fba311d495481ddf91a2ecf8a41fc38377639e3')

build() {
  cd $pkgname-$pkgver
  ./setup.py build
}

check() {
  cd $pkgname-$pkgver
  ./test.py
}

package() {
  cd $pkgname-$pkgver
  install -Dm644 doc/$pkgname.1 -t "$pkgdir/usr/share/man/man1"
  ./setup.py install --root="$pkgdir" --optimize=1
}

