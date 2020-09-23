# Maintainer: graysky <graysky AT archlinux DOT us>

pkgbase=kodi-standalone-service
pkgname=(kodi-standalone-service kodi-standalone-gbm-service kodi-standalone-wayland-service)
pkgver=1.106
pkgrel=1
pkgdesc="Systemd service to run kodi in stand-alone mode without a DE"
# Do NOT attempt to use this package on Arch ARM! This is only for x86_64.
# You have been warned.
arch=('x86_64')
url="https://github.com/graysky2/kodi-standalone-service"
license=('GPL')
install=readme.install
source=("$pkgbase-v$pkgver.tar.gz::https://github.com/graysky2/$pkgbase/archive/v$pkgver.tar.gz")
b2sums=('4fb670b66d037e8fa718582887dd2588e3756da603c7d19b9ece03392327e3b36958b6b0b20a985b013eac2be26c61862980141d44187c3c6fbd79adb14c3a28')

package_kodi-standalone-service() {
  depends=('kodi' 'polkit' 'xorg-server' 'xorg-xinit')

  cd "$pkgbase-$pkgver"
  install -Dm644 init/kodi.service "$pkgdir/usr/lib/systemd/system/kodi.service"
  install -Dm644 init/sysusers.conf "$pkgdir/usr/lib/sysusers.d/kodi.conf"
  install -Dm644 init/tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/kodi.conf"
}

package_kodi-standalone-gbm-service() {
  depends=('kodi-gbm' 'polkit' 'libinput')

  cd "$pkgbase-$pkgver"
  install -Dm644 init/kodi-gbm.service "$pkgdir/usr/lib/systemd/system/kodi-gbm.service"
  install -Dm644 init/sysusers.conf "$pkgdir/usr/lib/sysusers.d/kodi-gbm.conf"
  install -Dm644 init/tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/kodi-gbm.conf"
}

package_kodi-standalone-wayland-service() {
  depends=('kodi-wayland' 'polkit' 'libinput' 'cage')

  cd "$pkgbase-$pkgver"
  install -Dm644 init/kodi-wayland.service "$pkgdir/usr/lib/systemd/system/kodi-wayland.service"
  install -Dm644 init/sysusers.conf "$pkgdir/usr/lib/sysusers.d/kodi-wayland.conf"
  install -Dm644 init/tmpfiles.conf "$pkgdir/usr/lib/tmpfiles.d/kodi-wayland.conf"
}

# vim:set ts=2 sw=2 et:
