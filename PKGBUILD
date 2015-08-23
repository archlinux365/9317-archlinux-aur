#Maintainer: Kars Wang <jaklsy g-mail>

pkgname=lantern-beta
pkgver=2.0.1.20150821.200810
pkgrel=2
pkgdesc='Lantern is a free desktop application that delivers fast, reliable and secure access to the open Internet. (Beta Channel)'
arch=('i686' 'x86_64')
url='https://getlantern.org'
license=('Apache')
depends=('hicolor-icon-theme' 'bzip2' 'dbus' 'glib2' 'gtk3' 'libappindicator-gtk3' 'mesa' 'xcb-util' 'xdg-utils' 'zlib')
provides=('lantern')
options=('!emptydirs' '!strip' '!docs')
install=$pkgname.install
source=('lantern.service')
source_i686=('lantern-installer-beta-32-bit.deb::https://raw.githubusercontent.com/getlantern/lantern-binaries/master/lantern-installer-beta-32-bit.deb')
source_x86_64=('lantern-installer-beta-64-bit.deb::https://raw.githubusercontent.com/getlantern/lantern-binaries/master/lantern-installer-beta-64-bit.deb')
sha1sums=('da705ba2fa3608a17258009b933e8bb58b3172a2')
sha1sums_i686=('c1879554862ac7dc9590a1bb119c7638fbd3467f')
sha1sums_x86_64=('9978b58487377ff572c9bfbd926085b2713b7028')

package() {
    msg2 'Extracting the data.tar.xz...'
    bsdtar -xf data.tar.xz -C "${pkgdir}/"

    msg2 'Install systemd service file...'
    install -Dm644 "${srcdir}/lantern.service" "${pkgdir}/usr/lib/systemd/user/lantern.service"
}
