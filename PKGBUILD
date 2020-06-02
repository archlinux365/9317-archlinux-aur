pkgname=kisslicer2
pkgver=2.0.6
pkgrel=1
pkgdesc="KISSlicer is a fast, easy-to-use, cross-platform program that takes 3D files (STL) and generates path information (G-code) for a 3D Printer.  The FREE version has all the features needed for the hobbyist who uses a single-head machine. Alpha version of V2"
arch=('x86_64')
url="http://www.kisslicer.com/index.html"
license=('custom')
depends=(
	'libx11'
	'libgl'
)

conflicts=('kisslicer2')
provides=('kisslicer2')

# Sources
source=(
	"$pkgname.desktop"
	"$pkgname.sh"
	"$pkgname.png"
)
#source_i686=('') #No i686 build for linux since 2.0.6
source_x86_64=('https://www.dropbox.com/sh/78y5ec24yx1ycbk/AACnlMIwW3yhcLlClm_2YNqka/KISSlicer_Linux64_v2_alpha_2.0.6.zip')
# Checksums
sha256sums=('dcc2f0c110fc71e35a6a0e8aad8e375bfd4eb09db309fafa517b2857d600b6c6'
            '9f6bbb2357f2f81cfeb86f8f114b4e529c9f9f52a551fc5bca16a679ce60245b'
	    '17ec56ab667fc601b5282c8093e795cc65c6c73df25fdafd8ddd96436ea24589'
	   )
#sha256sums_i686=('SKIP')
sha256sums_x86_64=('9ea23bfe6ef49ee1d5124ac3b7bb974319703a5ecea4501568177063b0939d4f')

package() {

	cd "$srcdir/"

	# Program
	install -Dm755 "$srcdir/KISSlicer" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "$srcdir/$pkgname.png" "$pkgdir/usr/share/pixmaps/$pkgname.png"
	install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname.sh"

	# Desktop launcher
	install -Dm755 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
