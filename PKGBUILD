# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Maciej Sieczka <msieczka at sieczka dot org>

pkgname=grass
pkgver=7.0.2
pkgrel=1
_shortver=${pkgver%.*}; _shortver=${_shortver/./}
pkgdesc='Geospatial data management and analysis, image processing, graphics/maps production, spatial modeling and visualization'
arch=('i686' 'x86_64')
url='http://grass.osgeo.org/'
license=('GPL')
depends=('fftw' 'gdal' 'glu' 'python2-pillow' 'subversion' 'wxpython')
makedepends=('libxt')
optdepends=('postgresql: PostgreSQL database interface')
install=$pkgname.install
source=("http://grass.osgeo.org/grass$_shortver/source/$pkgname-$pkgver.tar.gz")
md5sums=('1f2c8f5cba2fe2d681a01b9519180e9e')

prepare() {
  cd $pkgname-$pkgver

  # Change everything to use python2
  sed -i 's/\(env \|\/usr\/bin\/\)python$/&2/' $(find . -iname "*.py")
  sed -i '/os\.environ.*GRASS_PYTHON/ s/"python"/"python2"/' lib/init/grass.py
  sed -i '/^PYTHON/ s/python$/&2/' include/Make/Platform.make.in

  # Fix path
  sed -i '/^\s*INSTDIR/ s/".*"//' configure
}

build() {
  cd $pkgname-$pkgver

  # Ancient autoconf used upstream can't handle CPPFLAGS correctly
  export CFLAGS="$CPPFLAGS $CFLAGS"
  export CXXFLAGS="$CPPFLAGS $CXXFLAGS"
  unset CPPFLAGS

  ./configure \
    --prefix=/opt/$pkgname \
    --with-freetype-includes=/usr/include/freetype2 \
    --with-wxwidgets \
    --with-readline \
    --with-pthread \
    --with-netcdf \
    --with-nls \
    --with-geos \
    --with-postgres

  make
}

package() {
  cd $pkgname-$pkgver

  make exec_prefix="$pkgdir/usr" INST_DIR="$pkgdir/opt/$pkgname" install

  # Install linker config file, needed for qgis to find grass
  install -d "$pkgdir/etc/ld.so.conf.d/"
  echo "/opt/$pkgname/lib" > "$pkgdir/etc/ld.so.conf.d/$pkgname.conf"

  cd "$pkgdir/opt/$pkgname"

  # Put freedesktop.org files in correct location
  mv share "$pkgdir/usr"
  install -Dm644 gui/icons/grass-48x48.png "$pkgdir/usr/share/icons/hicolor/48x48/apps/grass.png"
  install -Dm644 gui/icons/grass-64x64.png "$pkgdir/usr/share/icons/hicolor/64x64/apps/grass.png"

  # Fix some paths that get hard coded by make install
  sed -i "s|$pkgdir||g" demolocation/.grassrc$_shortver \
                        include/Make/{Platform,Grass}.make \
                        etc/fontcap \
                        "$pkgdir/usr/bin/grass$_shortver"
  sed -i "s|$srcdir||g" docs/html/t.connect.html
}
