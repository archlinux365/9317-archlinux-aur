# Contributor: Bernhard Walle <bernhard@bwalle.de>
# AUR Category: devel

pkgname=ptxdist
pkgver=2017.03.0
pkgrel=1
pkgdesc="Embedded Linux build system"
arch=('i686' 'x86_64')
url="http://www.ptxdist.org"
license=('GPL')
depends=('dialog' 'flex' 'bison' 'patch' 'python2')
source=("http://www.pengutronix.de/software/ptxdist/download/${pkgname}-${pkgver}.tar.bz2")
sha256sums=('4de8a69cb1df6191bf40c4ac6ffe3a303ca3120c78ea9e9746892ef7017ffd70')
sha512sums=('ac14a53eb7adf79369f3ea8d9f9d123cdb52e347ae0dfd0b28e6ca9f3320656e2b224abf3de556c277c27c3270294b01ab4c9deef2160a81d61451881f610fd2')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr --with-python=/usr/bin/python2
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
}
