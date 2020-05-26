# Maintainer: Alireza Ayinmehr <alireza.darksun@gmail.com>

pkgname="flat-remix-git"
pkgver=VERSION
pkgrel=1
pkgdesc="Flat remix is a pretty simple icon theme inspired on material design."
arch=('any')
options=('!strip')
url="https://drasite.com/flat-remix"
license=('GPL3')
makedepends=('git')
provides=('flat-remix')
conflicts=('flat-remix')
source=("${pkgname}::git+https://github.com/daniruiz/flat-remix.git")
sha256sums=('SKIP')

pkgver () {
	cd "${srcdir}/${pkgname}/"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "${srcdir}/${pkgname}/"
	install -dm755 "${pkgdir}/usr/share/icons"
	cp -a "Flat-Remix"* "${pkgdir}/usr/share/icons/"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
