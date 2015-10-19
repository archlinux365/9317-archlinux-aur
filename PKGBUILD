# Maintainer: Gavin Lloyd <gavinhungry@gmail.com>

pkgname=intel-xdk-iot
pkgver=2571
pkgrel=1
_rpmver=2.0-0
pkgdesc='JavaScript on-board app and HTML5 companion app development'
arch=('i686' 'x86_64')
url='http://xdk.intel.com/iot'
license=('custom')
depends=('libudev0')
makedepends=('rpmextract')

source=('intel-xdk-iot')
md5sums=('251ae4edbe9fbd775dc1910f9df4e481')

if [ "${CARCH}" == 'i686' ]; then
  _arch='32'
  _carch='i486'
  md5sums+=('920c375cb0e6742c6b9dea79299cc041')
elif [ "${CARCH}" == 'x86_64' ]; then
  _arch='64'
  _carch='x86_64'
  md5sums+=('732604440c3ef0e5daed7120523f8ff9')
fi

_base="iot_web_linux${_arch}"
source+=("https://download.xdk.intel.com/iot/${_base}_master_${pkgver}.tgz")

package() {
  cd "${srcdir}/${_base}/rpm"
  rpmextract.sh "intel-iot-${pkgver}-${_rpmver}.${_carch}.rpm"

  mkdir -p "${pkgdir}/opt/intel" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/licenses/${pkgname}"

  cp -r opt/intel/XDK_IoT_Edition "${pkgdir}/opt/intel/XDK_iot"
  rm -f "${pkgdir}/opt/intel/XDK_iot/libudev.so.0"
  install -m755 "${srcdir}/intel-xdk-iot" "${pkgdir}/usr/bin/"
  install -m644 "${pkgdir}/opt/intel/XDK_iot/xdk/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
