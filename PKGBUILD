# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-isolated'
pkgver='1.14.6'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Isolated Edition'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('nss' 'gconf' 'libxtst' 'alsa-lib' 'gtk2' 'libsecret' 'gcc-libs-multilib' 'libxss')
optdepends=('gnome-keyring' 'libgnome-keyring')
source=('https://downloads.mongodb.com/compass/mongodb-compass-isolated-1.14.6.x86_64.rpm')
md5sums=('821dd2b2038034f3ef06e561ae832151')

package() {
	rm -r "$srcdir/usr/share/doc/"
	mkdir -p "$srcdir/usr/share/licenses/mongodb-compass-isolated"
	mv "$srcdir/usr/share/mongodb-compass-isolated/LICENSE"* "$srcdir/usr/share/licenses/mongodb-compass-isolated"

	cp -r --preserve=mode "$srcdir/usr/" "$pkgdir/usr/"
}
