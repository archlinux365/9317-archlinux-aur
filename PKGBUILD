# Maintainer: Martel Théo <marteltheo at gmail dot com>
pkgname=bettercrewlink-bin
pkgver=2.7.2
pkgrel=1
pkgdesc='Free, open, Among Us Proximity Chat'
arch=('x86_64')
provides=("bettercrewlink")
url="https://github.com/OhMyGuus/BetterCrewLink"
license=('GPL3')
install="bettercrewlink.install"
depends=('libcap>=2')
source=("https://mirror.bettercrewl.ink/pc/latest/BetterCrewlink-Linux.AppImage"
        "bettercrewlink.desktop"
        "https://raw.githubusercontent.com/OhMyGuus/BetterCrewLink/nightly/src/renderer/logos/BCL-AppIcon.png")
md5sums=('b7027ead9148710d09fe5e30d4c4408b'
         '617a6fc40e38cb2be31a1541e39fcf96'
         '0c383871ddf0e11c81cf4cd3a77bd589')
options=(!strip libtool emptydirs staticlibs)

package() {
	cd "$srcdir"
	
	install -Dm 755 "BetterCrewlink-Linux.AppImage" "$pkgdir/opt/BetterCrewlink/BetterCrewlink-Linux.AppImage"
	
	mkdir -p "$pkgdir/usr/bin"
	ln -s /opt/BetterCrewlink/BetterCrewlink-Linux.AppImage "$pkgdir/usr/bin/bettercrewlink"
	
	install -Dm 644 bettercrewlink.desktop "$pkgdir/usr/share/applications/bettercrewlink.desktop"
	install -Dm 644 BCL-AppIcon.png "$pkgdir/usr/share/pixmaps/bettercrewlink.png"
}
