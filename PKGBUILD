# Author: Miguel Useche <migueluseche@skatox.com>
# Maintainer: Miguel Useche <migueluseche@skatox.com>
# Contributor: Xiao-Long Chen <chenxiaolong@cxl.epac.to>

pkgname=dcmtk
pkgver=3.6.3
pkgrel=1
pkgdesc="A collection of libraries and applications implementing large parts the DICOM standard"
arch=('i686' 'x86_64')
url="http://dicom.offis.de/dcmtk"
license=('other')
depends=('zlib' 'libpng' 'libtiff' 'libxml2' 'openssl' 'libssh')
makedepends=('cmake' 'make')
source=("ftp://dicom.offis.de/pub/dicom/offis/software/dcmtk/dcmtk363/${pkgname}-${pkgver}.tar.gz")
sha512sums=('5b907422d2d80e417ae8239e159d1300da4ed8db7e92cee619cc1d37116165e8824f8a9103605e07a95b1bffe94bbd2d5e05125f068281d241e8e78755d0b5e8')

#Currently it's not building otherwise
options=(!buildflags)

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  # Fix linker flags
  export LDFLAGS="-lssh -lz ${LDFLAGS}"

  # Use CMake instead of autotools (./configure)
  # Must build from the root directory or the man pages won't get installed
  cmake . \
    -DCMAKE_BUILD_TYPE:STRING="Release" \
    -DBUILD_SHARED_LIBS:BOOL=ON \
    -DDCMTK_WITH_OPENSSL:BOOL=ON \
    -DDCMTK_WITH_PNG:BOOL=ON \
    -DDCMTK_WITH_PRIVATE_TAGS:BOOL=ON \
    -DDCMTK_WITH_TIFF:BOOL=ON \
    -DDCMTK_WITH_XML:BOOL=ON \
    -DDCMTK_WITH_CHARLS=ON \
    -DDCMTK_WITH_ZLIB:BOOL=ON \
    -DCMAKE_INSTALL_PREFIX=/usr

  make ${MAKEFLAGS}
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}/" install

  # Move configuration files from /usr/etc to /etc
  mv "${pkgdir}/usr/etc/" "${pkgdir}/"

  # Remove empty files (0 length)
  find "${pkgdir}" -type f -empty -exec rm -v {} \;

  install -dm755 "${pkgdir}/usr/lib/"
  
  # Install ld config file
  install -dm755 "${pkgdir}/etc/ld.so.conf.d/"
  echo "/usr/lib/" > "${pkgdir}/etc/ld.so.conf.d/${pkgname}.conf"
}