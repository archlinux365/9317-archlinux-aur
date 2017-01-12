# Maintainer: not_anonymous <nmlibertarian@gmail.com>
# Contributor: Vitaliy Berdinskikh ur6lad[at]i.ua
# Original Submitter: Bob Finch <w9ya@qrparci.net>

pkgname=fdlog
pkgver=152i
pkgrel=3
pkgdesc="Ham Radio - Field Day Logger with networked nodes"
arch=('any')
url="http://www.fdlog.info"
license=('GPL')
depends=('python2' 'tk' 'epdfview' 'sqlite')
source=(${url}/files/$pkgname$pkgver.zip
	${url}/files/arrl_sect.txt
	http://www.arrl.org/files/file/Field-Day/2016/2016%20Rules.pdf
	http://www.arrl.org/files/file/Regulatory/Band%20Chart/Hambands_color.pdf
	diff.linux.patch.de.kd8kbu
	$pkgname.1
	$pkgname.desktop
	$pkgname.png)

prepare() {
	cd $srcdir/${pkgname}$pkgver

	mv README.txt readme.txt
	rm GPL.txt

	sed -i -e 's:os.startfile:os.system:' fdlog.py
	sed -i -e 's:fdrules.pdf:epdfview fdrules.pdf:' fdlog.py
	sed -i -e 's:bands.pdf:epdfview bands.pdf:' fdlog.py

	patch -p0 < ../diff.linux.patch.de.kd8kbu
}

package() {
	cd $srcdir/${pkgname}$pkgver

	mkdir -p $pkgdir/usr/share/$pkgname
	install -m 644 * $pkgdir/usr/share/$pkgname/
	install -m 644 ../arrl_sect.txt $pkgdir/usr/share/$pkgname/arrl_sect.txt
	install -m 644 ../2016%20Rules.pdf $pkgdir/usr/share/$pkgname/fdrules.pdf
	install -m 644 ../Hambands_color.pdf $pkgdir/usr/share/$pkgname/bands.pdf
	install -D -m 755 ../$pkgname.1 $pkgdir/usr/bin/$pkgname

	mkdir -p $pkgdir/usr/share/{applications,pixmaps}
	install -m644 ../*.desktop $pkgdir/usr/share/applications/
	install -m644 ../*.png $pkgdir/usr/share/pixmaps/
}
md5sums=('2fab5d9372c9d70515cb8b87e4cd4a40'
         'c735d25edf2535dc88e65f62a1be7d1c'
         '04abfe9ad9916b20efd0de3f728dfc14'
         'a254f68eeae6ebb3f24c3e5b61f26dff'
         'fc94f8d1deb8238200c1a75781f6cba5'
         'd74c9696c6132d51cf5cdc5c81afc427'
         'ed55981d519bc7a1644183d913ba54a0'
         '222f239adce839cd07d4fff44fac3ee8')
sha256sums=('39e4da70a1922937a94230fb34f9c277cc8b926a316de555dda9234fde592eed'
            'e466e4d6f2a7723b7de904f4dd54d999ec3e05ab2f19d147ff79ed1124f2927b'
            'cb2616e0e9da567c3b3b7d4d2b93a9be171e4265e703635fcc748aecd14c12c9'
            '0ee32f9930d7d353bb17f0332c117e2bef6700754cd5d96c26ba0a11c587c394'
            '294fa25ce11bb2f3507dcdefcd81e0cf5a69050cf73f769bafb8143716c88daf'
            '586bd09c0364d19c05b49a7d17c1e25ebb652c3cb3b8475440fed4358a02bfbd'
            'aea54578f79ef0aa7ca91eb5a52ddad92429379d40d97fc9f87234073bfc81ce'
            '5e3e7867385997b5a11c231d32f9429e09f234f50882ff8385241f4cbf92b500')
