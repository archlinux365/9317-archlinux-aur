# Maintainer: Chih-Hsuan Yen <yan12125@archlinux.org>

pkgname=python-pyptt
_pkgname=PyPtt
pkgver=0.9.35
pkgrel=1
pkgdesc='A PTT library that support PTT and PTT2'
arch=(any)
url='https://github.com/PttCodingMan/PyPtt'
license=(LGPL3)
depends=(python python-progressbar python-websockets python-uao
         python-beautifulsoup4 python-requests)
makedepends=(python-setuptools)
source=("https://files.pythonhosted.org/packages/source/P/$_pkgname/$_pkgname-$pkgver.tar.gz")
sha256sums=('714bffce38179ec7840987b247226012a913de1687774107c71c88785d4615c2')

build() {
  cd $_pkgname-$pkgver
  python setup.py build
}

# no check() as testing requires a real PTT account

package() {
  cd $_pkgname-$pkgver
  python setup.py install --root="$pkgdir" --optimize=1 --skip-build
}
