# Maintainer: Eric Ozwigh <ozwigh at gmail dot com>
# Contributor: speps <speps at aur dot archlinux dot org>
# Contributor: Damir Perisa <damir.perisa@bluewin.ch>
# Contributor: damir <damir@archlinux.org>

pkgname=gtick
pkgver=0.5.4
pkgrel=2
pkgdesc="A Gtk metronome application supporting different meters and speeds"
arch=('i686' 'x86_64')
url="http://www.antcom.de/gtick/"
license=('GPL3')
depends=('gtk2' 'libpulse')
makedepends=('libsndfile')
optdepends=('pulseaudio: pulseaudio sound system support')
install="$pkgname.install"
source=("http://www.antcom.de/gtick/download/$pkgname-$pkgver.tar.gz")
sha1sums=('4500d4d79904a422b2ad30aef7bb5787d7c8a396')

build() {
  cd $pkgname-$pkgver
  ./configure --prefix=/usr
  make
}

package() {
  cd $pkgname-$pkgver
  make DESTDIR="$pkgdir/" install
}
