# Maintainer: XavierCLL <xavier.corredor.llano (a) gmail.com>

pkgname=kup
pkgver=0.6.0
pkgrel=5
pkgdesc="A KDE bup backup software for helping people to keep up-to-date backups.
         The backup types support: incremental (dup) and synchronized (rsync)."
arch=('i686' 'x86_64')
url="http://kde-apps.org/content/show.php/Kup+Backup+System?content=147465"
license=('GPL')
depends=('kdebase-runtime' 'kde-cli-tools' 'kidletime')
makedepends=('cmake' 'extra-cmake-modules')
optdepends=('bup: support for incremental backups'
            'rsync: support for synced backups')
install=kup.install
source=("https://github.com/spersson/Kup/archive/${pkgname}-${pkgver}.tar.gz")
md5sums=('ba71ce5caf38f63e3881ecf5d56e7eab')

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../Kup-${pkgname}-${pkgver} \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
    -DSYSCONF_INSTALL_DIR=/etc \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="${pkgdir}" install
}
