# Maintainer: mehalter <micah at mehalter.com>

_pkgname=ueberzug
pkgname=python-${_pkgname}-git
pkgver=18.1.8.07a7998
pkgrel=1
pkgdesc="ueberzug is an python script which aims to replace w3mimgdisplay"
arch=('any')
url="https://github.com/seebye/${_pkgname}"
license=('GPL3')
depends=("libxext" "libxres" "python-pillow" "python" "python-docopt" "python-attrs")
makedepends=("git" "python-setuptools")
source=("git+${url}.git#branch=master")
md5sums=('SKIP')
conflicts=("python-${_pkgname}")
provides=("python-${_pkgname}=${pkgver}")

build() {
  cd "$srcdir/$_pkgname"
  python setup.py build
}

package() {
  cd "$srcdir/$_pkgname"
  python setup.py install --prefix=/usr --root "${pkgdir}" || return 1
}
