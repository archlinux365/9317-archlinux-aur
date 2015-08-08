# Maintainer : Johnathan Jenkins <twodopeshaggy@gmail.com>
# Contributor : fredbezies <fredbezies at gmail dot com>


pkgname=libpng14
_realname=libpng
pkgver=1.4.16
_apngver=1.4.16
pkgrel=0
pkgdesc="A collection of routines used to create PNG format graphics files - 1.4 version"
arch=('i686' 'x86_64')
url="http://www.libpng.org/pub/png/libpng.html"
license=('custom')
depends=('zlib')
options=('!libtool')
source=("http://downloads.sourceforge.net/sourceforge/$_realname/libpng-${pkgver}.tar.xz"
"http://downloads.sourceforge.net/sourceforge/libpng-apng/$pkgname/$pkgver/libpng-${pkgver}-apng.patch.gz")
md5sums=('2864fa5178f18fb1a2ea7b8f5e78bfd3'
         '9f8224f606cabc4e8cc18ca6bafc4e9b')

build() {
  cd "${srcdir}/${_realname}-${pkgver}"

patch -p1 -i "${srcdir}/libpng-${_apngver}-apng.patch"

  libtoolize --force --copy

# Workaround for Autoconf 1.13.x

  sed 's|AM_CONFIG_HEADER(config.h)|AC_CONFIG_HEADERS([config.h])|g' -i configure.ac

  aclocal
  autoconf
  automake --add-missing

  ./configure --prefix=/usr

  make
}

package() {
  cd "${srcdir}/${_realname}-${pkgver}"

  make DESTDIR="${pkgdir}" install
  

  rm -rf "${pkgdir}/usr/share"
  rm -rf "${pkgdir}/usr/bin/libpng-config"
  rm -rf "${pkgdir}/usr/lib/"{libpng.so,libpng.a}
  rm -fr "${pkgdir}/usr/lib/pkgconfig/libpng.pc"
  rm -rf "${pkgdir}/usr/include/"{pngconf.h,png.h}
  install -D -m644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

