# Maintainer: A. Husen <hi@husen.id>
pkgname=ncspot-bin
_pkgname=ncspot
pkgver=0.11.1
pkgrel=1
pkgdesc="Cross-platform ncurses Spotify client written in Rust, inspired by ncmpc and the likes."
arch=('x86_64')
url="https://github.com/hrkfdn/ncspot"
license=('BSD')
provides=('ncspot')
conflicts=('ncspot' 'ncspot-git')
optdepends=('ueberzug: album cover support')
source=("https://github.com/hapakaien/aur-packages/releases/download/ncspot%40v${pkgver}/ncspot-v${pkgver}-linux-x86_64.tar.gz" "${url}/raw/main/LICENSE")
sha512sums=('dc758e32d9a6dda85dc5e57eaad00d81762b50ee251364b4d05ce716af248a2c7b9f6a02a683701b2ffbbdbe9945021b09d5e454907ba2a6c5a1cc6f856be994'
            '5704429acf132bc3d66071eb9d5b3ba82e3cc960fb691a786fe8c0ce1526e4fb4a1ce36059501c9c37eca8d47ba67dfd0d0d4c673f7dfbb15f486a93a2c91bdf')

package() {
	cd "$srcdir"

    install -Dm 755 $_pkgname		"${pkgdir}/usr/bin/${_pkgname}"
	install -Dm 755 LICENSE 		"${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
