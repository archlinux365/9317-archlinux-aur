# Maintainer: Vonpupp <vonpupp@gmail.com>

pkgname="unagi"
pkgver=0.3.4
pkgrel=2
pkgdesc="Compositing manager for implementing effects with regular window managers."
arch=('i686' 'x86_64')
url="http://projects.mini-dweeb.org/projects/unagi"
license=('GPL3')
conflicts=('unagi-git')
provide=('unagi')
depends=("libxcb>=1.4" "xcb-proto>=1.6" "xproto" "confuse" "libxdg-basedir>=1.0.0" "xcb-util-keysyms" "xcb-util-renderutil" "xcb-util-wm" "xcb-util-image" "libev")
makedepends=("pkgconfig")
source=("http://projects.mini-dweeb.org/attachments/download/114/$pkgname-$pkgver.tar.gz")
md5sums=('1f9373a69a1318d5a09f6144dfcf54a2')

build() {
  cd "$pkgname-$pkgver"
  mkdir m4
  ./autogen.sh
  ./configure --prefix=/usr --sysconfdir=/etc
  make
}
package() {
  #cd "$srcdir/$_gitname-build"
  cd "$pkgname-$pkgver"
  make DESTDIR="$pkgdir/" includedir="/usr/include/unagi" install

  # Remove libtool files.
  find $pkgdir -name "*.la" | xargs rm
}
