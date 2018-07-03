# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-readonly'
pkgver='1.14.6'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Readonly Edition'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('nss' 'gconf' 'libxtst' 'alsa-lib' 'gtk2' 'libsecret' 'gcc-libs-multilib' 'libxss')
optdepends=('gnome-keyring' 'libgnome-keyring')
source=('https://downloads.mongodb.com/compass/mongodb-compass-readonly-1.14.6.x86_64.rpm')
md5sums=('a55948765b7c1970d08ff8cc7c52aee7')

package() {
	rm -r "$srcdir/usr/share/doc/"
	mkdir -p "$srcdir/usr/share/licenses/mongodb-compass-readonly"
	mv "$srcdir/usr/share/mongodb-compass-readonly/LICENSE"* "$srcdir/usr/share/licenses/mongodb-compass-readonly"

	cp -r --preserve=mode "$srcdir/usr/" "$pkgdir/usr/"
}
