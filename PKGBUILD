# Contributor: Tom < reztho at archlinux dot us >
pkgname=openmsx
pkgver=0.13.0
pkgrel=1
pkgdesc="The MSX emulator that aims for perfection."
arch=('i686' 'x86_64')
url="http://openmsx.org/"
license=('custom')
depends=('libxml2' 'sdl' 'sdl_image' 'sdl_ttf' 'tcl' 'libpng' 'zlib')
optdepends=('python2' 'jack-audio-connection-kit' 'glew' 'libgl' 'catalyst-utils' 'nvidia-utils' 'nvidia-304xx-utils')
install=${pkgname}.install
source=("https://github.com/openMSX/openMSX/releases/download/RELEASE_${pkgver//./_}/${pkgname}-${pkgver}.tar.gz")

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  
  # Changing some default configurations...
  sed -i 's@SYMLINK_FOR_BINARY:=true@SYMLINK_FOR_BINARY:=false@' build/custom.mk
  sed -i 's@INSTALL_BASE:=/opt/openMSX@INSTALL_BASE:=/usr/share/openmsx@' build/custom.mk
  echo 'INSTALL_DOC_DIR:=/usr/share/doc/openmsx' >> build/custom.mk
  echo 'INSTALL_SHARE_DIR:=/usr/share/openmsx' >> build/custom.mk
  echo 'INSTALL_BINARY_DIR:=/usr/bin' >> build/custom.mk

  # Compiling
  ./configure
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install

  # Licenses
  mkdir -p "${pkgdir}/usr/share/licenses/openmsx"
  ln -s /usr/share/licenses/common/GPL2/license.txt "${pkgdir}/usr/share/licenses/openmsx/openmsx.txt"
  install -m 644 "${pkgdir}/usr/share/doc/openmsx/cbios.txt" "${pkgdir}/usr/share/licenses/openmsx/"
}

md5sums=('995ad158a3796bf576d6ce7722c87d82')
