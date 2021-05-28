# Maintainer: Nimrod Maclomhair <nimrod4garoa@gmail.com>
pkgname=snkrx-git
pkgver=r68.8f933c9
pkgrel=1
pkgdesc="A replayable arcade shooter where you control a snake of heroes."
arch=("any")
url="https://codeberg.org/phel/SNKRX"
license=('MIT')
groups=()
depends=("love")
makedepends=('git')
provides=("SNRXK")
conflicts=("SNRXK")
backup=()
options=()
source=('git+https://codeberg.org/phel/SNKRX.git'
	'SNKRX.sh'
	'SNKRX.desktop'
)
sha256sums=('SKIP'
            '92168beb35e4d609cd9201296ffd91fea3544155ed73f8dcc1caa4aba09eeb13'
            'bd4ba1b6d5dc40114bf5d7ea31da9dc43fd3e9aa82550de7735effad1b7cc5a2')

pkgver() {
	cd "$srcdir/SNKRX"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/SNKRX"
	
	mkdir --parents "$pkgdir/usr/share/SNKRX"
	cp -r -t "$pkgdir/usr/share/SNKRX" *
	
	mkdir --parents "$pkgdir/usr/bin"
	install ../SNKRX.sh "$pkgdir/usr/bin/SNKRX"
	
	mkdir --parents "$pkgdir/usr/share/pixmaps"
	cp assets/images/icon.png "$pkgdir/usr/share/pixmaps/SNKRX.png"
	
	mkdir --parents "$pkgdir/usr/share/applications"
	cp ../SNKRX.desktop "$pkgdir/usr/share/applications/."
	
}
