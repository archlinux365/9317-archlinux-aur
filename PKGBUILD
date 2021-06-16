# Maintainer: Ysblokje <ysblokje at gmail dot com>
# Previous Maintainer: Jeff Youdontneedtoknow <jeffpublicjr at gmail dot com>
# Contributer: Arnaud
# 
# Use with care, I accept no responsibility what so ever.
pkgname=('opentx-companion')
pkgver=2.3.12
pkgrel=1
pkgdesc="EEPROM Editor for OpenTX RC transmitter firmwares"
arch=('x86_64')
url="http://www.open-tx.org/"
license=('GPL')
depends=('qt5-base' 'qt5-multimedia' 'qt5-svg' 'sdl' 'hicolor-icon-theme')
optdepends=('dfu-util: tool for flashing stm32 based radios')
makedepends=('cmake' 'xsd' 'bc' 'python' 'avr-gcc' 'avr-libc' 'sed' 'qt5-tools' 'python-pyqt5' 'arm-none-eabi-gcc' 'arm-none-eabi-binutils' 'arm-none-eabi-newlib' 'fox' 'python-pillow')
provides=('companion')
conflicts=('companion' 'companion9x-svn')
source=("https://github.com/opentx/opentx/archive/release/$pkgver.tar.gz"
"installprefix.patch"
)
sha256sums=(
    '3201dd3c614cad50c457bfc25a397fdbfd231686184e028294f0b85a8f2e9db9'
    '74e7e1280d1238078f62579034490d5f5ab65f22f528a86a8a15b529a7235aeb'
)
_srcmap=opentx-release-$pkgver


build() {
  patch ${_srcmap}/tools/build-companion-release.sh $startdir/installprefix.patch
  cd "${_srcmap}"
  ./tools/build-companion-release.sh ${srcdir}/${_srcmap} ${srcdir}/build 23
}


package() {
  cd ${srcdir}/build
  make -j`nproc` DESTDIR=$pkgdir/ install
  cd $pkgdir/usr/share/applications
  sed -i -e 's/Categories=Application/Categories=Development;/' companion23.desktop
  sed -i -e 's/Categories=Application/Categories=Development;/' simulator23.desktop
}

