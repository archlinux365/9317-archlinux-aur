# Maintainer: Popolon <popolon@popolon.org>

pkgname=('yoga-image-optimizer')
pkgver='1.0.0'
pkgrel=1
pkgdesc="A graphical interface to convert and optimize JPEG, PNG and WebP images (based on YOGA)"
url="https://github.com/flozz/yoga-image-optimizer"
depends=('python' 'yoga')
makedepends=('python-setuptools')
license=('unknown')
arch=('any')
source=("${pkgname}-${pggver}.tar.gz::https://github.com/flozz/yoga-image-optimizer/archive/refs/tags/v1.0.0.tar.gz")
sha256sums=('a7b801fa322aaa9415f57ce21f8ce605f3a92fbfa1e9976639e9c985c792f91b')

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
