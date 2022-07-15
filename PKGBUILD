# Maintainer: sseneca <me at ssene dot ca>
pkgname=html5validator
pkgver=0.4.2
pkgrel=1
pkgdesc="Command line tool to validate HTML5 files."
arch=('any')
url="https://github.com/svenkreiss/html5validator"
license=('MIT')
depends=('python-yaml' 'java-environment-openjdk=8')
makedepends=('python' 'python-setuptools')
source=("${url}/archive/v${pkgver}/${pkgname}-${pkgver}.tar.gz")
sha512sums=('0de38c394de6afc243c66f5dfca1c6b39e5de256e21c7051ea2030eda1848d0ac22d55642c4e399d6db65df5b94dd99a91fb6d4a81ed0ae6a31fd2ab9d8f9305')

package() {
  cd "$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
}
