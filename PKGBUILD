# Maintainer: Mads Kjeldgaard <mail@madskjeldgaard.dk>
pkgname=linvst3-x-bin
pkgver=4.5.2
pkgrel=1
pkgdesc="Linux Windows vst3 wrapper/bridge"
arch=('x86_64')
url="https://github.com/osxmidi/LinVst3-X"
license=('GPL')
groups=('pro-audio')
depends=('wine' 'gtk3')
conflicts=('linvst3x')
optdepends=('jack')
suffix="Manjaro"
source=("https://github.com/osxmidi/LinVst3-X/releases/download/4.5/LinVst3-X-4.5.2-Manjaro.zip")
md5sums=('ddf6c12a87c50c3e915975835ce79830')

package() {
	# Shared library
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/linvst3x.so" "$pkgdir/usr/share/LinVst/linvst3x.so"

	# # Embedded
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/lin-vst3-server-x.exe" "$pkgdir/usr/bin/lin-vst3-server-x.exe"
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/lin-vst3-server-x.exe.so" "$pkgdir/usr/bin/lin-vst3-server-x.exe.so"

	# # Converter
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/linvst3xconvert" "$pkgdir/usr/bin/linvst3xconvert"
	
	# #test
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/TestVst3/testvst3.exe" "$pkgdir/usr/bin/testvst3x.exe"
	install -Dm755 "$srcdir/LinVst3-X-$pkgver-$suffix/TestVst3/testvst3.exe.so" "$pkgdir/usr/bin/testvst3x.exe.so"

}

