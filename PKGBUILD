# Maintainer: Jackson Baker Ryan <jackson.baker.ryan@gmail.com>

pkgname=otf-mister-pixel
pkgdesc="Mister Pixel typeface - A pixelated typeface with a 
		style of cute PC-inspired symbols."
pkgver=1.0
pkgrel=1
arch=('any')
source=("http://velvetyne.fr/archives/fonts/mr_pixel.zip")

package() {
	cd $srcdir
	rm -r __MACOSX
	cd 'VTF MisterPixel'
	rm -r ufo vfb

	for f in otf/*; do
  		install -Dm644 -t "$pkgdir/usr/share/fonts/OTF/$pkgname" "$f"
	done
  		install -Dm644 -t "$pkgdir/usr/share/licenses/$pkgname/license.txt" Velvetyne\ Black\ Font\ Licence.txt
}
