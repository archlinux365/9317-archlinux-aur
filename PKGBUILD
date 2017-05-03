_pkgname=butterfly
pkgname=butterfly
pkgver=3.1.2
pkgrel=1
pkgdesc="A sleek web based terminal emulator"
arch=('any')
url="https://github.com/paradoxxxzero/butterfly"
license=('GPLv3')
depends=('python' 'python-pyopenssl' 'python-tornado' 'tornado_systemd' 'python-setuptools')
optdepends=('python-libsass')
source=('https://pypi.python.org/packages/bd/01/647a4e17f2d02edf8d65cafd9b6f8ccd7f06bdeaf8fb2c95ff9fd6d400a8/butterfly-3.1.2.tar.gz')
md5sums=('80a4af29f2ab98e0e00614b22e0c83fc')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py build
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  LANG=en_US.UTF-8 python3 setup.py install --root=$pkgdir --optimize=1 --skip-build
}

# vim:set sw=2 et:
