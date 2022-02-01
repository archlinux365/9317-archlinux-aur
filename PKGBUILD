# Maintainer: Rafael Fontenelle <rafaelff@gnome.org>
# Contributor: Balló György <ballogyor+arch at gmail dot com>

pkgname=gnome-internet-radio-locator
pkgver=12.0.6
pkgrel=1
pkgdesc="Easily find live radio programs based on geographical location of radio broadcasters on the Internet"
arch=(x86_64)
url="http://gnomeradio.org"
license=(GPL3)
depends=(libchamplain geoclue gst-plugins-base gst-plugins-bad)
makedepends=(intltool itstool python)
source=("https://download.gnome.org/sources/$pkgname/${pkgver%.*}/$pkgname-$pkgver.tar.xz")
sha256sums=('546787af7dc492d87c07bbdfcf4a64c24bdeb3dc6c6a603c47c288a8474488dd')

build() {
  cd $pkgname-$pkgver
  ./configure --prefix=/usr --with-recording
  make
}

check(){
  cd $pkgname-$pkgver
  make check -k
}

package(){
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir" install
}
