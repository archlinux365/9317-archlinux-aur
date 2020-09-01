# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: AndyRTR <andyrtr@archlinux.org>
# Contributor: Judd Vinet <jvinet@zeroflux.org>
# Contributor: Tom Newsom <Jeepster@gmx.co.uk>

pkgname=lib32-unixodbc
pkgver=2.3.8
pkgrel=1
pkgdesc='ODBC is an open specification for providing application developers with a predictable API with which to access Data Sources'
arch=('x86_64')
url='http://www.unixodbc.org/'
license=('GPL2' 'LGPL2.1')
depends=('lib32-libltdl' 'unixodbc')
makedepends=('gcc-multilib' 'lib32-gcc-libs')
source=("http://www.unixodbc.org/unixODBC-${pkgver}.tar.gz")
sha256sums=('85372b9cd2cdfea3983c3958ab11ca1513ea091a263d82105e5da043379e48a5')

build() {
  cd ${srcdir}/unixODBC-${pkgver}

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  ./configure \
    --prefix='/usr' \
    --libdir='/usr/lib32' \
    --sysconfdir='/etc'
  make
}

package() {
  cd ${srcdir}/unixODBC-${pkgver}

  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/{etc,usr/{bin,include,share}}
}

# vim: ts=2 sw=2 et:
