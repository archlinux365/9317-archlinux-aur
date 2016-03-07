# Maintainer: Walter Dworak <preparationh67@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Otto Allmendinger <otto.allmendinger@googlemail.com>
# Contributor: Malte Rabenseifner <malte@zearan.de> 

pkgname=murmur-ice
pkgver=1.2.15
pkgrel=1
pkgdesc="The voice chat application server for Mumble"
arch=('i686' 'x86_64')
url="http://mumble.sourceforge.net"
license=('BSD')
depends=('avahi' 'lsb-release' 'protobuf' 'qt4' 'icu' 'zeroc-ice' 'python-zeroc-ice' 'python2-zeroc-ice')
makedepends=('boost')
backup=("etc/murmur.ini")
install="murmur.install"
conflicts=('murmur' 'murmur-git')
source=(https://github.com/mumble-voip/mumble/releases/download/${pkgver}/mumble-${pkgver}.tar.gz
        "murmur.dbus.conf"
        "murmur.service")

build() {
  cd ${srcdir}/mumble-$pkgver

  qmake-qt4 main.pro CONFIG+="no-client"
  make release
}

package() {
  cd ${srcdir}/mumble-$pkgver

  sed -e "1i# vi:ft=cfg" \
    -e "s|database=|database=/var/lib/murmur/murmur.sqlite|" \
    -e "s|#logfile=murmur.log|logfile=|" \
    -e "s|#uname=|uname=murmur|" \
    -i scripts/murmur.ini

  install -dm755 -o 122 -g 122 ${pkgdir}/var/lib/murmur
  install -Dm755 release/murmurd ${pkgdir}/usr/bin/murmurd
  install -Dm644 scripts/murmur.ini ${pkgdir}/etc/murmur.ini
  install -Dm644 ${srcdir}/murmur.dbus.conf ${pkgdir}/etc/dbus-1/system.d/murmur.conf
  install -Dm644 README ${pkgdir}/usr/share/doc/murmur/README
  install -Dm644 man/murmurd.1 ${pkgdir}/usr/share/man/man1/murmurd.1
  install -Dm644 ${srcdir}/murmur.service ${pkgdir}/usr/lib/systemd/system/murmur.service
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
}

md5sums=('3052ed64d1f4d4e5bf60095df53c7758'
         'eddea4cdbd0bde4b960a67e16b5d5478'
         'd27a9adcd7561859e7b033046729bc0e')
# vim: sw=2:ts=2 et:
