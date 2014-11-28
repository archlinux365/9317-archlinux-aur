# Maintainer: Jaroslav Lichtblau <dragonlord@aur.archlinux.org>

pkgname=magicrescue
pkgver=1.1.9
pkgrel=1
pkgdesc="Find and recover deleted files on block devices"
arch=('i686' 'x86_64')
url="http://freshmeat.net/projects/magicrescue/"
license=('GPL')
source=(http://www.itu.dk/people/jobr/$pkgname/release/$pkgname-$pkgver.tar.gz)
md5sums=('093ac491bc5f70c4b050e57e3437ab07')

build() {
  cd ${srcdir}/$pkgname-$pkgver
  install -d ${pkgdir}/usr || return 1

  ./configure --prefix=/usr
  make PREFIX=${pkgdir}/usr || return 1

  sed -i 's|$(PREFIX)/man/man1|$(PREFIX)/share/man/man1|' Makefile || return 1
  make PREFIX=${pkgdir}/usr install
}
