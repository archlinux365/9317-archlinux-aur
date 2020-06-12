# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=python2-pyuv
pkgver=1.4.0
pkgrel=1
_libname=${pkgname/python2-/}
pkgdesc="A Python module which provides an interface to libuv."
url="https://crate.io/packages/pyuv/"
license=('MIT')
arch=('i686' 'x86_64')
depends=('python2' 'libuv')
source=("https://github.com/saghul/pyuv/archive/$_libname-$pkgver.tar.gz")

build() {
	cd "$srcdir"/$_libname-$_libname-$pkgver
	python2 setup.py build_ext --use-system-libuv
}

package() {
	cd "$srcdir"/$_libname-$_libname-$pkgver
	python2 setup.py install --skip-build --root="$pkgdir"
	install -m0644 -D LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

sha256sums=('922e1dd4c05085bc6257b8f254e5e8bc232647fc757d371002abe31a1ce31b07')
