# ---------------------------------------------------------------
# Maintainer: Romain Bazile <gromain.baz@gmail.com>
# ---------------------------------------------------------------

pkgname=xygrib-git
pkgver=1.2.6.1.r74.ga47fee3
pkgrel=1
pkgdesc="Grib reader and weather visualization software. Zygrib fork."
arch=('x86_64' 'aarch64')
license=("GPL3")
conflicts=('xygrib')
provides=('xygrib')
depends=('libnova' 'qwt' 'proj' 'qt5-base' 'openjpeg2')
makedepends=('cmake' 'zlib' 'bzip2' 'libpng')
url="https://opengribs.org/"
source=("$pkgname::git+https://github.com/opengribs/XyGrib.git")
sha1sums=('SKIP')

pkgver() {
  cd $pkgname
  git describe --long --tags | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd $pkgname
  mkdir -p build
  cd build
  cmake ../
  make
}

package() {
  mkdir -p $pkgdir/usr/share/icons/hicolor
  mkdir -p $pkgdir/usr/share/applications
  mkdir -p $pkgdir/usr/bin
  cd $pkgname
  cp linux_online_installer/config/xyGrib_32.png $pkgdir/usr/share/icons/hicolor/
  cp debian/xygrib.desktop $pkgdir/usr/share/applications/
  cd build
  cmake -DCMAKE_INSTALL_PREFIX=/usr/share/openGribs/ ../
  DESTDIR="$pkgdir" make install
  mv $pkgdir/usr/share/openGribs/XyGrib/XyGrib $pkgdir/usr/bin/
}
