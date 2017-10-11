# $Id$
# Maintainer: Jaroslav Lichtblau <svetlemodry@archlinux.org>
# Contributor: dibblethewrecker dibblethewrecker.at.jiwe.dot.org
# Contributor: William Rea <sillywilly@gmail.com>

# Contributor: Luigi Ranghetti <ggranga@gmail.com>

pkgname=gdal-hdf4
_pkgname=gdal
provides=('gdal')
conflicts=('gdal')
pkgver=2.2.1
pkgrel=7
pkgdesc="A translator library for raster geospatial data formats, with support to HDF4 format (required to use MODIStsp tool: http://github.com/lbusett/MODIStsp)"
arch=('i686' 'x86_64')
url="http://www.gdal.org/"
license=('custom')
depends=('curl' 'geos' 'giflib' 'hdf5' 'libgeotiff' 'libjpeg-turbo' 'libpng' 'libspatialite' 'libtiff' 'netcdf' 'hdf4-nonetcdf'
         'openjpeg2' 'poppler' 'python2' 'python2-numpy' 'cfitsio' 'sqlite' 'libmariadbclient' 'postgresql-libs')
makedepends=('perl' 'swig' 'chrpath' 'doxygen')
optdepends=('postgresql: postgresql database support'
            'mariadb: mariadb database support'
            'perl:  perl binding support')
options=('!emptydirs')
changelog=$_pkgname.changelog
source=(http://download.osgeo.org/${_pkgname}/${pkgver}/${_pkgname}-${pkgver}.tar.xz
        gdal-perl-vendor.patch
        gdal-2.2-poppler-0.58.patch)
sha256sums=('927098d54083ac919a497f787b835b099e9a194f2e5444dbff901f7426b86066'
            '20989e5fa499206b42c92280ce084fdf7b2f661a4233fc349611cc57102fe114'
            '17bbcfed72cdc346f1b5bb83247eb51e93ddcf0b00c8bf5e246338a2fb8a567d')

prepare() {
  cd "${srcdir}"/$_pkgname-$pkgver

# python2 fixes
  sed -i 's_python python1.5_python2 python python1.5_' configure
  for file in swig/python/{,osgeo/,samples/,scripts/}*.py; do
      sed -i 's_#!/usr/bin/env python_#!/usr/bin/env python2_' $file
  done

# Fix mandir
  sed -i "s|^mandir=.*|mandir='\${prefix}/share/man'|" configure

# Fix Perl bindings installation path
  patch -Np1 -i ../gdal-perl-vendor.patch

# poppler 0.58.x API change
# https://trac.osgeo.org/gdal/changeset/40036
  patch -Np4 -i ../gdal-2.2-poppler-0.58.patch
}

build() {
  cd "${srcdir}"/$_pkgname-$pkgver
  export CFLAGS="$CFLAGS -fno-strict-aliasing"

# bug #23654
  export LDFLAGS="$LDFLAGS -Wl,--as-needed"

  ./configure --prefix=/usr --with-netcdf --with-libtiff --with-sqlite3 --with-geotiff \
              --with-mysql --with-python=/usr/bin/python2 --with-curl --with-hdf5 --with-hdf4 --with-perl --with-geos \
              --with-png --with-poppler --with-spatialite --with-openjpeg

# workaround for bug #13646
  sed -i 's/PY_HAVE_SETUPTOOLS=1/PY_HAVE_SETUPTOOLS=/g' ./GDALmake.opt
  sed -i 's/EXE_DEP_LIBS/KILL_EXE_DEP_LIBS/' apps/GNUmakefile

# bug: http://osgeo-org.1560.x6.nabble.com/gdal-dev-jpeg2000-jasper-error-compiling-gdal-2-1-from-git-release-branch-td5299100.html
  sed -i -e 's@uchar@unsigned char@' frmts/jpeg2000/jpeg2000_vsil_io.cpp

  make
  make man
}

package () {
  cd "${srcdir}"/$_pkgname-$pkgver

  make DESTDIR="${pkgdir}" install
  make DESTDIR="${pkgdir}" install-man

# install license
  install -Dm644 LICENSE.TXT "${pkgdir}"/usr/share/licenses/$_pkgname/LICENSE

#FS15477 clean up junks - still present in 2.2.1
  rm -f "${pkgdir}"/usr/share/man/man1/_build_gdal_src_gdal-${pkgver}_apps_.1

# Remove RPATH
  eval local $(perl -V:vendorarch)
  chrpath --delete "${pkgdir}"${vendorarch}/auto/Geo/OSR/OSR.so
  chrpath --delete "${pkgdir}"${vendorarch}/auto/Geo/OGR/OGR.so
  chrpath --delete "${pkgdir}"${vendorarch}/auto/Geo/GDAL/GDAL.so
  chrpath --delete "${pkgdir}"${vendorarch}/auto/Geo/GDAL/Const/Const.so
  chrpath --delete "${pkgdir}"${vendorarch}/auto/Geo/GNM/GNM.so
}
