# Maintainer: Colin Arnott <colin@urandom.co.uk>

pkgbase=python-stringcase
pkgname=(python-stringcase python2-stringcase)
pkgver=1.2.0
pkgrel=1
pkgdesc="Convert string cases between camel case, pascal case, snake case etc"
arch=('any')
url="http://pypi.python.org/pypi/stringcase"
license=('MIT')
makedepends=('python2-setuptools' 'python-setuptools')
source=("https://pypi.python.org/packages/f3/1f/1241aa3d66e8dc1612427b17885f5fcd9c9ee3079fc0d28e9a3aeeb36fa3/${pkgbase#python-}-${pkgver}.tar.gz")
sha512sums=('c987f9aa42d22bcfaa6559791bf9292e4300af00d2cf2165838cacd6203b913da197852d49285c30188ca529fd529513cce73a1984f5555cfb81e704977786d3')

package_python2-stringcase() {
  cd "${srcdir}/${pkgbase#python-}-${pkgver}"

  python2 setup.py install --root="$pkgdir/" --optimize=1
}

package_python-stringcase() {
  cd "${srcdir}/${pkgbase#python-}-${pkgver}"

  python setup.py install --root="$pkgdir/" --optimize=1
}
