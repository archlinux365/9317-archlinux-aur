# Author: Julian Xhokaxhiu <info@julianxhokaxhiu.com>
pkgname=retroarch-standalone-service
pkgver=2
pkgrel=3
pkgdesc="Systemd service and user to run Retroarch in stand-alone mode"
url=""
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('MIT')
depends=('retroarch' 'retroarch-assets-xmb' 'retroarch-autoconfig-udev' 'xorg-server' 'xorg-xinit')
install='retroarch-standalone.install'
source=('retroarch-standalone.service'
        'retroarch-standalone.sysuser'
        'retroarch-standalone.cfg')
md5sums=('f73e83f0b6d17f06354d7c3db840afa1'
         'dff58d483453816a80dcdbc8d272e8b8'
         'ac40311816ee094e98f957db77cea241')

package() {
  # Copy additional configuration file to /etc
  install -Dm644 ${srcdir}/retroarch-standalone.cfg "$pkgdir/etc/retroarch-standalone.cfg"

  #Install service file
  install -Dm644 ${srcdir}/retroarch-standalone.service "$pkgdir/usr/lib/systemd/system/retroarch-standalone.service"

  #Install sysuser config
  install -Dm644 ${srcdir}/retroarch-standalone.sysuser "$pkgdir/usr/lib/sysusers.d/retroarch-standalone.conf"
}
