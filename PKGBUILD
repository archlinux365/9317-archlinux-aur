# Maintainer: Gonçalo Camelo Neves Pereira <goncalo_pereira@outlook.pt>
pkgname=esp-idf
pkgver=3.0_rc1
_pkgver=3.0-rc1
pkgrel=1
pkgdesc="Espressif IoT Development Framework. Official development framework for ESP32."
arch=('i686' 'x86_64' 'aarch' 'aarch64' 'armv7h')
url="https://github.com/espressif/esp-idf"
license=('APACHE')
depends=('gcc' 'git' 'make' 'ncurses' 'flex' 'bison' 'gperf' 'python2-pyserial')
source=(https://github.com/espressif/${pkgname}/archive/v${_pkgver}.tar.gz)
sha256sums=('SKIP')

build() {
    cd $srcdir/${_pkgname}
	git submodule update --init
}

package() {
  mkdir -p ${pkgdir}/opt/esp-idf-sdk
  cd "${srcdir}/${_pkgname}"
  cp -R . ${pkgdir}/opt/esp-idf-sdk
}