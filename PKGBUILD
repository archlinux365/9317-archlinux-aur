# Maintainer: The-Repo-Club <The-Repo-Club@github.com>
# Contributor: The-Repo-Club <The-Repo-Club@github.com>
pkgname=pyfetch
pkgver=2021.01.18
pkgrel=1
pkgdesc='neofetch rewritten in python'
arch=('any')
groups=('therepoclub')
url="https://github.com/The-Repo-Club/$pkgname"
license=('CC BY-NC-SA 4.0')
depends=('gtk3' 'python-gputil' 'python-xlib')
source=("${pkgname}-$pkgver.tar.gz::${url}/archive/$pkgver.tar.gz")
sha256sums=('34450741166cb4d011a4bccf3d7350315d3d54b0dde8660987c9b57f24b00f24')

package() {
  cd "$pkgname-$pkgver"
  install -Dm755 "usr/bin/$pkgname" -t "$pkgdir/usr/bin"
}
