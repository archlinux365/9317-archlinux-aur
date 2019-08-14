pkgname=linvst3
pkgver=1.63
pkgrel=1
pkgdesc="enables Windows vst's to be used as Linux vst's in Linux vst capable DAW's"
arch=('x86_64')
url="https://github.com/osxmidi/LinVst"
depends=('wine' 'freetype2' 'xcb-util' 'xcb-util-cursor' 'xcb-util-keysyms' 'libxkbcommon-x11' 'libx11' 'expat' 'gtkmm3' 'sqlite')
makedepends=('git')
source=("https://github.com/osxmidi/LinVst3/releases/download/1.6/LinVst3-$pkgver-Debian-Stretch.zip" 'w2lvst3')
sha256sums=('SKIP'
            'SKIP')

package() {
	cd "${srcdir}/LinVst3-${pkgver}-Debian-Stretch/embedded/"
	for file in *.so; do
        	install -Dm755 $file $pkgdir/usr/bin/$file
	done
	for file in *.exe; do
		install -Dm755 $file $pkgdir/usr/bin/$file
	done
	install -Dm755 $srcdir/w2lvst3 $pkgdir/usr/bin/w2lvst3
}
