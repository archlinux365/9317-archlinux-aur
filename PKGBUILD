# $Id: PKGBUILD 266875 2017-11-15 14:29:11Z foutrelis $
# Maintainer: Sergej Pupykin <pupykin.s+arch@gmail.com>

pkgname=aumix
pkgver=2.9.1
pkgrel=8
pkgdesc="A color text mode sound mixer with GPM support"
arch=('x86_64')
license=('GPL')
depends=()
makedepends=('gtk2' 'gpm' 'ncurses')
optdepends=('gtk2: aumix'
	    'ncurses: aumix-nox'
	    'gpm: aumix-nox')
replaces=('aumix-gtk')
provides=('aumix-gtk')
url="http://www.jpj.net/~trevor/aumix.html"
source=(http://www.jpj.net/~trevor/aumix/releases/aumix-$pkgver.tar.bz2
	aumix.desktop)
md5sums=('34f28ae1c94fc5298e8bb2688c4b3a20'
         'afba8b39b8dd95d8a9d74356023de14a')

build() {
  cd "$srcdir"
  cp -a aumix-$pkgver aumix-gtk-$pkgver

  cd "$srcdir"/aumix-$pkgver
  msg "No X11 build"
  ./configure --prefix=/usr --mandir=/usr/share/man --without-gtk --without-gtk1 \
	--without-alsa --without-x
  make

  cd "$srcdir"/aumix-gtk-$pkgver
  msg "X11+GTK2 build"
  ./configure --prefix=/usr --mandir=/usr/share/man --without-gtk1 --without-alsa \
	--without-gpm
  make
}

package() {
  cd "$srcdir"/aumix-$pkgver
  install -D -m0755 src/aumix "$pkgdir"/usr/bin/aumix-nox

  cd "$srcdir"/aumix-gtk-$pkgver
  make DESTDIR="$pkgdir" install
  install -D -m0644 "$srcdir"/aumix.desktop "$pkgdir"/usr/share/applications/aumix.desktop
}
