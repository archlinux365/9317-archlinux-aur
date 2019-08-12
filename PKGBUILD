# Maintainer: Julien Nicoulaud <julien.nicoulaud@gmail.com>
pkgname=packagecore
pkgver=0.11.5
pkgrel=1
pkgdesc="Utility for building distribution specific Linux packages."
arch=(any)
url="https://github.com/BytePackager/packagecore"
license=(GPL2)
depends=(python)
makedepends=('python-setuptools')
provides=('packagecore-git')
conflicts=('packagecore-git')
source=("https://github.com/BytePackager/${pkgname}/releases/download/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
md5sums=('2ce311507a6b1277bce5d6eda0f9fa57')
sha256sums=('cf4c92df6830dc4cacaee23d50e704b54f7d46e44af7e0de4e3d433e1c50404e')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py build
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build --single-version-externally-managed
}
