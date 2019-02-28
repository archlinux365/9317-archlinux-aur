# Maintainer: Eduardo Parra Mazuecos <eduparra90@gmail.com>

# I maintain this on github, feel free to submit a pull request to
# https://github.com/soker90/paquetes-archinux.git
pkgname=python-pyexcel-ods
pkgver=0.5.4
pkgrel=2
pkgdesc="A wrapper library to read, manipulate and write data in ods format"
arch=('i686' 'x86_64')
url="https://github.com/pyexcel/pyexcel-ods"
license=('BSD-3-clause')
makedepends=('python-setuptools')
depends=('python' 'python-odfpy' 'python-pyexcel-io' 'python-defusedxml')
source=("https://github.com/pyexcel/pyexcel-ods/archive/v$pkgver.tar.gz")
md5sums=('85596dbdd695d0940cf2e66a74469fa1')

build() {
  cd "$srcdir/${pkgname#python-}-$pkgver"

  msg2 'Building...'
  python setup.py build
}

package() {
  cd "$srcdir/${pkgname#python-}-$pkgver"

  msg2 'Installing...'
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
  
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
