# Maintainer: Daniel Peukert <dan.peukert@gmail.com>
pkgname='mongodb-compass-isolated'
pkgver='1.19.6'
pkgrel='1'
pkgdesc='The official GUI for MongoDB - Isolated Edition'
arch=('x86_64')
url='https://www.mongodb.com/products/compass'
license=('custom')
depends=('electron3' 'libsecret')
optdepends=('gnome-keyring')
source=(
	'https://downloads.mongodb.com/compass/mongodb-compass-isolated-1.19.6.x86_64.rpm'
	'launch.sh'
)
sha256sums=(
	'ec8f5268568e566b7178b8373a4d56296bc6ca69bf5470e841933075c30b458f'
	'a9e2a135358cbbb57be58dcbd7e6a906ab894ed6ac2f166ee688f9ee80accc87'
)

package() {
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated/resources/app.asar" "$pkgdir/usr/lib/mongodb-compass-isolated/app.asar"
	cp -r "$srcdir/usr/share/mongodb-compass-isolated/resources/app.asar.unpacked/" "$pkgdir/usr/lib/mongodb-compass-isolated/app.asar.unpacked/"
	install -Dm755 "$srcdir/launch.sh" "$pkgdir/usr/bin/mongodb-compass-isolated"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated/LICENSE" "$pkgdir/usr/share/licenses/mongodb-compass-isolated/LICENSE"
	install -Dm644 "$srcdir/usr/share/mongodb-compass-isolated/LICENSES.chromium.html" "$pkgdir/usr/share/licenses/mongodb-compass-isolated/LICENSES.chromium.html"
	install -Dm644 "$srcdir/usr/share/applications/mongodb-compass-isolated.desktop" "$pkgdir/usr/share/applications/mongodb-compass-isolated.desktop"
	install -Dm644 "$srcdir/usr/share/pixmaps/mongodb-compass-isolated.png" "$pkgdir/usr/share/pixmaps/mongodb-compass-isolated.png"
}
