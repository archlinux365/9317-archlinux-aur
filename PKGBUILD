# Maintainer: tytan652 <tytan652@tytanium.xyz>

_reponame=obs-ptz
pkgname=$_reponame-controls
pkgver=0.10.0
pkgrel=1
pkgdesc="Plugin for OBS Studio to add a PTZ Camera control dock"
arch=("i686" "x86_64" "aarch64")
url="https://obsproject.com/forum/resources/ptz-controls.1284/"
license=("GPL2")
depends=("obs-studio" "qt5-gamepad" "qt5-serialport")
makedepends=("cmake")
source=("$_reponame-$pkgver.tar.gz::https://github.com/glikely/$_reponame/archive/v$pkgver.tar.gz")
sha256sums=("de50a272c34e18688a8574d1d85089d5abc49f6dbf52a81541f8459883b9be39")

build() {
  cd "$_reponame-$pkgver"

  cmake -B build \
  -DCMAKE_INSTALL_PREFIX='/usr'

  make -C build
}

package() {
  cd "$_reponame-$pkgver"

  make -C build DESTDIR="$pkgdir/" install
}
