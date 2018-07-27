# Maintainer: Marat "Morion" Talipov <morion.self@gmail.com>
# Contributor: rostov <imn@pochta.ru>

pkgname=projectlibre
pkgver=1.8.0
pkgrel=3
pkgdesc="ProjectLibre is an open source project management software"
arch=('any')
replaces=('project-libre')
url="http://www.projectlibre.org"
license=('CPAL')
depends=('java-runtime')
install=projectlibre.install
source=("http://sourceforge.mirrorservice.org/p/pr/projectlibre/ProjectLibre/${pkgver%.*}/projectlibre-${pkgver}.tar.gz"
		"projectlibre.png"
		"projectlibre.desktop"
		"projectlibre.patch"
		"projectlibre.xml")
md5sums=('57648aa0ce61dd52072534fd0983a8de'
         'cbeee50a6324b473c17899616f3effbd'
         'e93fab66e95915aaf9ef204d914b6e9f'
         '189fa02637ff696ab89a247fd77cd50f'
         '78bb62198c864aa6ac7a103c044f5b56')

build() {
	cd "$srcdir/$pkgname-$pkgver/"
	patch < $srcdir/projectlibre.patch
}

package() {
	cd "$srcdir/$pkgname-$pkgver/"	

	# Dirs
	install -dm 755 "${pkgdir}"/usr/bin
	install -dm 755 "${pkgdir}"/usr/share/pixmaps
	install -dm 755 "${pkgdir}"/usr/share/applications
	install -dm 755 "${pkgdir}"/usr/share/mime/packages
	install -dm 755 "${pkgdir}"/usr/share/doc/projectlibre/license/third-party	
	install -dm 755 "${pkgdir}"/usr/share/projectlibre/lib

	#Files
	install -m644 $srcdir/$pkgname-$pkgver/projectlibre.jar "${pkgdir}"/usr/share/projectlibre/
	install -m644 $srcdir/$pkgname-$pkgver/lib/*.jar "${pkgdir}"/usr/share/projectlibre/lib
	install -m755 $srcdir/$pkgname-$pkgver/projectlibre.sh "${pkgdir}"/usr/bin/projectlibre
	install -m644 $srcdir/$pkgname-$pkgver/license/{index.html,index_html_0.gif,license.rtf} "${pkgdir}"/usr/share/doc/projectlibre/license
	install -m644 $srcdir/$pkgname-$pkgver/license/third-party/* "${pkgdir}"/usr/share/doc/projectlibre/license/third-party
	install -m644 $srcdir/projectlibre.png "${pkgdir}"/usr/share/pixmaps
	install -m644 $srcdir/projectlibre.desktop "${pkgdir}"/usr/share/applications
	install -m644 $srcdir/projectlibre.xml "${pkgdir}"/usr/share/mime/packages/

	msg "Done"
}

