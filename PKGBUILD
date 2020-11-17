# Maintainer: mark.blakeney at bullet-systems dot net
pkgname=libinput-gestures
pkgver=2.53
pkgrel=1
pkgdesc="Actions gestures on your touchpad using libinput"
url="https://github.com/bulletmark/$pkgname"
license=("GPL3")
arch=("any")
depends=("python>=3.5" "libinput" "hicolor-icon-theme")
conflicts=("$pkgname-git")
replaces=("$pkgname-git")
backup=("etc/$pkgname.conf")
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
install=install.sh
md5sums=('c54af7b112e13d597bcadfd12e8c4c46')

package() {
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
