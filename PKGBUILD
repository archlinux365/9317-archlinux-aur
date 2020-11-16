# Maintainer: Eon S. Jeon <esjeon@hyunmu.am>

pkgname='hwpviewer'
pkgver=9.20.0.1573
pkgrel=2
pkgdesc='An official HWP viewer for Linux by Hancom'
arch=('x86_64')
url='https://www.hancom.com/'
license=('custom:hwpviewer')
depends=('gtk3' 'webkitgtk' 'gvfs' 'icu64')
optdepends=()
source=(
	'local://hancomoffice-hwpviewer-Ubuntu-amd64.deb'
	'license.txt'
)
sha512sums=(
	'ae8c1a8ed4ca2b09d24a7749c54f2a02ca6105814a82e389074a495e0b4022865c02aa6c6507f54d3283fa0d0a675a4578ea66b595bd47f83714a4e00be7802b'
	'ae8a48e372ecaa2f48c658b4485e831d472fc7a314187aa7d8110002af007ab44573d9b7b2f086f5b48b8eae0d89fc35306423aaef8f84e986c467a027ab2fce'
)

package() {
	msg2 "Extracting data.tar.xz..."
	bsdtar -xf data.tar.xz -C "$pkgdir/"

	install -Dm644 license.txt "$pkgdir/usr/share/licenses/hwpviewer/license.txt"
}
