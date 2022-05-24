# Maintainer: Jurriaan Pruis <email@jurriaanpruis.nl>

pkgname=deconz
arch=('x86_64' 'armv6h' 'armv7h' 'aarch64')
pkgver=2.16.01
pkgrel=1
pkgdesc="A generic ZigBee monitoring and control tool"
url="https://www.dresden-elektronik.de"
license=('custom:"Copyright (c) dresden elektronik ingenieurtechnik GmbH"')
groups=()
depends=('hicolor-icon-theme'
         'libcap'
         'libpng'
         'qt5-base'
         'qt5-serialport'
	 'qt5-declarative'
         'qt5-websockets'
         'sqlite')
makedepends=('xz')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=(
  '69-conbee.rules'
  'deconz.sysusers'
  'deconz.tmpfiles'
)
source_x86_64=($pkgname-$pkgver-x86_64.deb::https://deconz.dresden-elektronik.de/ubuntu/stable/$pkgname-$pkgver-qt5.deb)
source_armv6h=($pkgname-$pkgver-armv6h.deb::https://deconz.dresden-elektronik.de/raspbian/stable/$pkgname-$pkgver-qt5.deb)
source_armv7h=($pkgname-$pkgver-armv7h.deb::https://deconz.dresden-elektronik.de/raspbian/stable/$pkgname-$pkgver-qt5.deb)
source_aarch64=(${pkgname}_${pkgver}-debian-buster-stable_arm64.deb::https://deconz.dresden-elektronik.de/debian/stable/${pkgname}_${pkgver}-debian-buster-stable_arm64.deb)
sha256sums=('568f0ff41fad18d6a26ef96a90181e6fac6b1dd6abd69d202de849d1caf76354'
            '4f4554238a3ee2ecd7af3510a3e4ff5a62259082f9b1672904da29c933c5e065'
            '5cb6ea540da8cfb4343b97792886952ee244fa272b3c00e6e5c7dcc1aa10eb1c')
sha256sums_x86_64=('ae40dd745c3edb2bb34fd496d48920ea8a748a1ce6edc6654828df0db5a7a86d')
sha256sums_armv6h=('6688584354028443233bd2deaab493e8761f80693a249d1edebca4856a625859')
sha256sums_armv7h=('6688584354028443233bd2deaab493e8761f80693a249d1edebca4856a625859')
sha256sums_aarch64=('4edcb97a663b1f27e1a1c6c14db8af8ddc1199c4d385cba41615849d971a198d')
noextract=()

package() {
  tar -xJf data.tar.xz -C "${pkgdir}"

  chown -R root:root "${pkgdir}"
  cp -rfv "${pkgdir}/lib" "${pkgdir}/usr"
  rm -rf "${pkgdir}/lib"

  # Remove group write permissions from all files/directories
  chmod -R g-w "${pkgdir}"

  # Run services with user deconz
  sed -e "s/User=1000/User=deconz/" -i ${pkgdir}/usr/lib/systemd/system/deconz.service ${pkgdir}/usr/lib/systemd/system/deconz-gui.service
  install -vDm 644 "69-conbee.rules" "${pkgdir}/etc/udev/rules.d/69-conbee.rules"
  install -vDm 644 "${pkgname}.sysusers" "${pkgdir}/usr/lib/sysusers.d/${pkgname}.conf"
  install -vDm 644 "${pkgname}.tmpfiles" "${pkgdir}/usr/lib/tmpfiles.d/${pkgname}.conf"
}
