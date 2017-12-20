# Maintainer: Muhammad Fairuzi Teguh <mfairuzit at gmail dot com>
# Contributor: Grant Hames-Morgan <nthmorgan at gmail dot com>
pkgname=marp
pkgver=0.0.11
pkgrel=1
pkgdesc="Markdown presentation writer, powered by Electron"
arch=('x86_64' 'i686')
url="https://github.com/yhatt/marp"
license=('MIT')
depends=('gtk2' 'xdg-utils' 'gconf')

# Package
source_x86_64=("${url}/releases/download/v${pkgver}/${pkgver}-Marp-linux-x64.tar.gz")
md5sums_x86_64=('fc6c10b85af9d1627431a7269076ba14')
source_i686=("${url}/releases/download/v${pkgver}/${pkgver}-Marp-linux-ia32.tar.gz")
md5sums_i686=('af2fb6e993648426244f40ae47c39ccc')

# Icon and desktop file
source=(
	"https://raw.githubusercontent.com/yhatt/marp/master/images/marp.png"
	"marp.desktop"
)
md5sums=(
	'095ab0c670c1d311be1b066e416efed3'
	'734a3e3bd102ee9de4bc78d25008a92d'
)

package() {
	# Create /usr/bin for the executable and /usr/lib for the package
	install -dm755 ${pkgdir}/usr/bin
	install -dm755 ${pkgdir}/usr/lib/${pkgname}
	
	# This will be broken until all files are in place (that's okay)
	ln -s /usr/lib/marp/Marp ${pkgdir}/usr/bin/marp
	
	install -Dm644 marp.png ${pkgdir}/usr/share/pixmaps/marp.png
	install -Dm644 marp.desktop ${pkgdir}/usr/share/applications/marp.desktop
	install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
	
	# Remove unneeded files to save space
	rm marp.{png,desktop} LICENSE
	rm ${pkgver}-Marp-linux-*.tar.gz
	
	cp -r ./* ${pkgdir}/usr/lib/${pkgname}
}
