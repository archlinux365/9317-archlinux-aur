# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=python-buildlog-consultant
_name=${pkgname#python-}
pkgver=0.0.13
pkgrel=1
pkgdesc="Build log parser and analyser"
arch=('any')
url="https://github.com/jelmer/buildlog-consultant"
license=('GPL2')
depends=('python-debian' 'python-pyaml' 'python-requirements-parser')
makedepends=('python-setuptools')
source=("https://pypi.org/packages/source/${_name:0:1}/$_name/$_name-$pkgver.tar.gz"{,.asc})
sha256sums=('950911ac488a631d4e425e3677fc64df99b28c911d551caadde4b5c52192624a'
            'SKIP')
validpgpkeys=('DC837EE14A7E37347E87061700806F2BD729A457') # Jelmer Vernooĳ <jelmer@jelmer.uk>

build() {
  cd "$_name-$pkgver"
  python setup.py build
}

check() {
  cd "$_name-$pkgver"
  python setup.py test
}

package() {
  cd "$_name-$pkgver"
  export PYTHONHASHSEED=0
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
