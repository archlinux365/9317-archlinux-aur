# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=('drill-search-cli' 'drill-search-gtk')
pkgbase=drill-search
pkgver=2.0.0
pkgrel=1
arch=('x86_64')
url="https://drill.software"
license=('GPL2')
makedepends=('dmd' 'dub')
install="$pkgbase.install"
source=("$pkgbase-$pkgver.tar.gz::https://github.com/yatima1460/Drill/archive/$pkgver.tar.gz"
	"$pkgbase"
	"$pkgbase-gtk.desktop")
sha256sums=('9ac863f693da7db1deb2e89ec78476a34c89618a1b00149d2e3fb6ae152bbe6a'
            'b875f928546aee7855cb1db9afc8ab3f1a8a34d43de5bbd62f7076d7ba9f3917'
            '5bafb37baf608a3168abba2ab9ea174a1d0f0472f52d3222ea0a05957c997c50')

build() {
    cd "Drill-$pkgver"
    dub build --parallel -b release -c CLI
    dub build --parallel -b release -c GTK
}

check() {
    cd "Drill-$pkgver"
    dub test --parallel
}

package_drill-search-cli() {
	pkgdesc="Search files without indexing, but clever crawling (CLI version)"

	cd "Drill-$pkgver/Build/Drill-CLI-linux-$arch-release"
	install -d $pkgdir/{opt/$pkgname,usr/bin}
	cp -r Assets $pkgdir/opt/$pkgname
	install -Dm755 $pkgname $pkgdir/opt/$pkgname/$pkgname
	install -Dm755 $srcdir/$pkgbase $pkgdir/usr/bin/$pkgname
	echo "/opt/$pkgname/$pkgname" "\$@" >> $pkgdir/usr/bin/$pkgname
}

package_drill-search-gtk() {
	pkgdesc="Search files without indexing, but clever crawling (GTK version)"
	depends=('gtk3' 'xdg-utils')

	cd "Drill-$pkgver/Build/Drill-GTK-linux-$arch-release"
	install -d $pkgdir/{opt/$pkgname,usr/bin}
	cp -r Assets $pkgdir/opt/$pkgname
	install -Dm755 $pkgname $pkgdir/opt/$pkgname/$pkgname
	install -Dm755 $srcdir/$pkgbase $pkgdir/usr/bin/$pkgname
	echo "/opt/$pkgname/$pkgname" "\$@" >> $pkgdir/usr/bin/$pkgname
	install -Dm644 Assets/icon.svg $pkgdir/usr/share/pixmaps/$pkgname.svg
	install -Dm644 $srcdir/$pkgname.desktop \
		$pkgdir/usr/share/applications/$pkgname.desktop
}
