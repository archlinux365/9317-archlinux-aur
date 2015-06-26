# Contributor: Christoph Gysin <christoph.gysin@gmail.com>
pkgname=bashate
pkgver=0.3.1
pkgrel=1
pkgdesc="A pep8 equivalent for bash scripts"
arch=('any')
makedepends=('setuptools')
depends=('python')
url="https://github.com/openstack-dev/${pkgname}"
license=('Apache')
source=(http://pypi.python.org/packages/source/${pkgname:0:1}/${pkgname}/${pkgname}-${pkgver}.tar.gz)
md5sums=('80a1cb9dbfeddd2b1779deb28ebdaa10')

build() {
    cd ${srcdir}/${pkgname}-${pkgver}
    python2 setup.py build
}

package() {
    cd ${srcdir}/${pkgname}-${pkgver}
    python2 setup.py install \
        --skip-build \
        --optimize=1 \
        --prefix=/usr \
        --root=${pkgdir}
}
