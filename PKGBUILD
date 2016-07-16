# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=libkcddb-git
pkgver=v16.04.3.0.g023aa4c
pkgrel=1
pkgdesc="KDE CDDB library. (GIT version)"
arch=('i686' 'x86_64')
url='https://projects.kde.org/projects/kde/kdemultimedia/libkcddb'
license=('GPL' 'LGPL' 'FDL')
depends=('kio'
         'libmusicbrainz5'
         )
makedepends=('extra-cmake-modules'
             'kdoctools'
             'git'
             'python'
             )
conflicts=('libkcddb'
           'libkcddb-frameworks-git'
           )
provides=('libkcddb')
source=('git://anongit.kde.org/libkcddb')
sha1sums=('SKIP')

pkgver() {
  cd libkcddb
  echo "$(git describe --long --tags | tr - .)"
}

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../libkcddb \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
