# Maintainer: bleak <bleaktradition@gmail.com>

pkgname=python-isc-dhcp-leases
pkgver=0.9.1
pkgrel=1
pkgdesc="Ppython module for reading /var/lib/dhcp/dhcpd.leases from isc-dhcp-server"
arch=('any')
url="https://github.com/MartijnBraam/python-isc-dhcp-leases"
license=('MIT')
depends=('python-freezegun')
source=("$pkgname-$pkgver.tar.gz::https://github.com/MartijnBraam/python-isc-dhcp-leases/archive/refs/tags/$pkgver.tar.gz")
_extracted_name="python-isc-dhcp-leases-$pkgver"
sha256sums=('392843bea965fc4cec15846973c80fe54e657d18321525a4d2daee2347b1a6bc')
sha512sums=('2a4e4af2a5c95acd9f0b132a23d266c40bdd30be353bb110ddc4a0ec5c4346b5e75d7c99114d0c2454117456a2cac29af57ae4ac4a52e1bc524faac7d48ab830')

build() {
  cd "$_extracted_name"
  python setup.py build
}

package() {
  cd "$_extracted_name"
  python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim:ts=2:sw=2:et:
