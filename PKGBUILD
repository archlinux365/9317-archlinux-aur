# Maintainer: marazmista <marazmista@gmail.com>

pkgname=radeon-profile-daemon-git
pkgver=20160124
pkgrel=2
pkgdesc="System daemon for radeon-profile"
url="http://github.com/marazmista/radeon-profile-daemon"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('qt5-base' 'xf86-video-ati' 'radeon-profile')
provides=('radeon-profile-daemon')
replaces=('radeon-profile-daemon')
source=('git+https://github.com/marazmista/radeon-profile-daemon.git')
sha256sums=('SKIP')
 
build() {
mkdir -p build
cd build
qmake-qt5 "../radeon-profile-daemon/radeon-profile-daemon/"
make
}
 
package() {
cd build
make prefix="${pkgdir}" install

install -Dm644 "$srcdir/build/radeon-profile-daemon" "$pkgdir/usr/bin/radeon-profile-daemon"
chmod +x "$pkgdir/usr/bin/radeon-profile-daemon"

install -Dm644 "$srcdir/radeon-profile-daemon/radeon-profile-daemon/extra/radeon-profile-daemon.service" "$pkgdir/etc/systemd/system/radeon-profile-daemon.service"
}