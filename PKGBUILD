# Maintainer: Martel Théo <marteltheo at gmail dot com>
pkgname=bettercrewlink-bin
pkgver=2.6.0
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
        "https://github.com/OhMyGuus/BetterCrewLink/raw/nightly/logo.png")
md5sums=('f513aba85c06a5336328fcbc3df8e2dc'
         '617a6fc40e38cb2be31a1541e39fcf96'
         '01af2cd3a3ef33e85f267854d35e14c4')
options=(!strip libtool emptydirs staticlibs)

package() {
	cd "$srcdir"
	
	install -Dm 755 "BetterCrewlink-Linux.AppImage" "$pkgdir/opt/BetterCrewlink/BetterCrewlink-Linux.AppImage"
	
	mkdir -p "$pkgdir/usr/bin"
	ln -s /opt/BetterCrewlink/BetterCrewlink-Linux.AppImage "$pkgdir/usr/bin/bettercrewlink"
	
	install -Dm 644 bettercrewlink.desktop "$pkgdir/usr/share/applications/bettercrewlink.desktop"
	install -Dm 644 logo.png "$pkgdir/usr/share/pixmaps/bettercrewlink.png"
}
