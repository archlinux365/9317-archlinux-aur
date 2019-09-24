# Maintainer: Hurstel Alexandre <a.hurstel at unistra dot fr>
_pkgname=NordVPN-Connect
pkgname=gnome-shell-extension-nordvpn-connect-git
pkgver=r114.7916195
pkgrel=2
pkgdesc="Unofficial Gnome-Shell Extension to provide a GUI for the official NordVPN CLI Tool."
arch=('any')
url="https://github.com/AlexPoilrouge/NordVPN-connect"
license=('GPL3')
depends=('gnome-shell>=3.34' 'nordvpn-bin>=3.3' 'systemd')
makedepends=('git')
source=(
        "git://github.com/AlexPoilrouge/NordVPN-connect.git"
)

package() {
	cd NordVPN-connect
	
	mkdir -p "$pkgdir/usr/share/gnome-shell/extensions/NordVPN_Connect@poilrouge.fr"
	cp -r ./* "$pkgdir/usr/share/gnome-shell/extensions/NordVPN_Connect@poilrouge.fr"

}

md5sums=('SKIP')

