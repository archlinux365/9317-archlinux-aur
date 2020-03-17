# Maintainer: James Armstrong <jm.armstrong1207@gmail.com>
pkgname=detect-tablet-mode-git
pkgver=master
pkgrel=2
pkgdesc="Detects both normal & tablet mode, executing custom scripts/commands for each mode. See the github page for instructions."
arch=('any')
url='https://github.com/alesguzik/linux_detect_tablet_mode'
license=('GPL')
groups=()
depends=('ruby' 'libinput')
makedepends=('git')
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname::git+$url")
noextract=()
sha256sums=('SKIP')
#build() {
#}

package() {
	cd $pkgname

	install -d $pkgdir/usr/bin
	install -d $pkgdir/home/$USER/.config/

	cp watch_tablet $pkgdir/usr/bin
	cp watch_tablet.yml $pkgdir/home/$USER/.config
}
