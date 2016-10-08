# Maintainer: Spyros Stathopoulos <foucault.online@gmail.com>

pkgname=python-boltons
_pkgname=boltons
pkgver=16.4.1
pkgrel=1
pkgdesc="Constructs/recipes/snippets that would be handy in the python standard library"
arch=('any')
url="https://github.com/mahmoud/boltons"
license=('BSD')
depends=('python')
source=("https://github.com/mahmoud/${_pkgname}/archive/${pkgver}.tar.gz")
md5sums=('f470175a6aa1e7343f978add8ab23b5d')

build() {
  cd ${srcdir}/${_pkgname}-${pkgver}
  python setup.py build
}

package() {
  cd ${srcdir}/${_pkgname}-${pkgver}
  python setup.py install --prefix=/usr --root="${pkgdir}"
  mkdir -p ${pkgdir}/usr/share/licenses/${pkgname}
  install -D -m644 LICENSE \
    ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}
