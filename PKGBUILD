# Contributor: Andreas Baumann <abaumann at yahoo dot com>

pkgname=sqlitexx
pkgver=0.0.3
pkgrel=5
pkgdesc="A C++ API for Sqlite."
arch=('i686' 'x86_64')
url='http://wiki.github.com/andreasbaumann/sqlitexx/'
license=('LGPL')
makedepends=('sqlite3>=3.0' 'doxygen')
depends=('sqlite3>=3.0')
provides=('sqlitexx')
source=(http://downloads.sourceforge.net/sourceforge/${pkgname}/${pkgname}-${pkgver}.tar.gz)
source=(http://github.com/downloads/andreasbaumann/${pkgname}/${pkgname}-${pkgver}.tar.gz)
md5sums=('85bda2872260213c8e336c0a98e451dd')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  make
  make doc
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make DESTDIR=${pkgdir} install
}

check() {
  cd ${srcdir}/${pkgname}-${pkgver}
  make check
}
