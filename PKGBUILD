pkgname=manyverse-bin
_pkgname=manyverse
pkgdesc="A social network off the grid"
pkgrel=0
pkgver=0.2203.21
_pkgver=0.2203.21-beta
arch=('x86_64')
url="https://manyver.se"
license=('MPL2')
source=(
	"https://github.com/staltz/manyverse/releases/download/v${_pkgver}/${_pkgname}-${_pkgver}.tar.gz"
	'manyverse.png::https://gitlab.com/staltz/manyverse-site/-/raw/master/src/images/logo-square.png'
	'manyverse.desktop'
	'manyverse.sh')
sha256sums=(
	'8ac19d85b2ed4c5199c62db895252400ecda2624d81dbcb6a56f1a9ea551144e'
	'8fe2216da0a258fc9eb3bd2488a6b09ccc4c8cd753b74cba85e827d5c792998e'
	'60fbacb296707f47c57659c78d15c68a82c5363d9c629d12f210a303a13b6379'
	'3da5580a758dd55df3cbb4329662face1fdc594bd72618b962387dba7e9b93ce')

package() {
	mkdir -p "${pkgdir}/opt/"
	cp -r "${_pkgname}-${_pkgver}/" "${pkgdir}/opt/Manyverse"
	install -D -m755 "manyverse.desktop" "${pkgdir}/usr/share/applications/manyverse.desktop"
	install -D -m755 "manyverse.sh" "${pkgdir}/usr/bin/manyverse"
	install -D -m644 "manyverse.png" "${pkgdir}/usr/share/icons/hicolor/1024x1024/apps/manyverse.png"
}

