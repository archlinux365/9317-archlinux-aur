 
# Maintainer: matmoul <matmoul at the google email domain which is .com>
# Contributor: enihcam <nanericwang at the google email domain which is .com>
# Contributor: Arun <cute.tec at the google email domain which is .com>

pkgname=walinuxagent
_pkgname=WALinuxAgent
pkgver=2.2.38
pkgrel=1
pkgdesc="Microsoft Azure Linux Guest Agent"
arch=('any')
url="https://github.com/Azure/WALinuxAgent"
license=('Apache')
depends=('python' 'openssh' 'openssl' 'parted' 'net-tools')
makedepends=('python-setuptools')
checkdepends=()
optdepends=()
install=${pkgname}.install
provides=("walinuxagent")
backup=("etc/waagent.conf")
options=()
changelog=
source=(
  "https://github.com/Azure/WALinuxAgent/archive/v${pkgver}.tar.gz")
sha256sums=(
  '05f5246250db1ce748588f7a8bf0ad00d94c29d27837e3ce44db119b9462e7c8')

package() {
	cd "$_pkgname-$pkgver"
	python setup.py install --root="$pkgdir" --prefix="/usr" --optimize=1
	install -Dm644 LICENSE.txt "$pkgdir"/usr/share/licenses/$pkgname/LICENSE.txt
}
