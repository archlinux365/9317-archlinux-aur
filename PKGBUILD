# Maintainer: Gustavo Alvarez <sl1pkn07@gmail.com>

pkgname=ktorrent-git
pkgver=5.2.0.r2616.9747a8f5
pkgrel=1
pkgdesc="A powerful BitTorrent client. (GIT version)"
arch=('x86_64')
url='https://kde.org/applications/en/internet/org.kde.ktorrent'
license=('GPL')
depends=('libktorrent'
         'knotifyconfig'
         'kcmutils'
         )
makedepends=('extra-cmake-modules'
             'kdoctools'
             'git'
             'python'
             'boost'
             'taglib'
             'geoip'
             'plasma-workspace'
             'kdnssd'
             'kross'
             'kplotting'
             'kdesignerplugin'
             'kdewebkit'
             'kde-syndication'
             )
optdepends=('kplotting: for stats plugin'
            'taglib: for mediaplayer plugin'
            'geoip: for infowidget plugin'
            'plasma-workspace: for shutdown plugin'
            'kdnssd: for zeroconf plugin'
            'kdewebkit: for syndication plugin'
            'kde-syndication: for syndication plugin'
            'kross: for scripting plugin'
            )
provides=('ktorrent')
conflicts=('ktorrent')
source=('git+https://invent.kde.org/network/ktorrent.git')
sha256sums=('SKIP')

pkgver() {
  cd ktorrent
  _ver="$(cat libktcore/ktversion.h | grep -m1 KT_VERSION_MACRO | grep -o "[[:digit:]]*" | paste -sd'.')"
  echo "${_ver}.r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  mkdir -p build

  cd build
  cmake ../ktorrent \
    -DCMAKE_BUILD_TYPE=None \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_LIBDIR=lib \
    -DBUILD_TESTING=OFF \
    -DWITH_SYSTEM_GEOIP=ON

}

build() {
  make -C build
}

package() {
  make -C build DESTDIR="${pkgdir}" install
}
