# Maintainer: Katie Wolfe <katie@dnaf.moe>
pkgname=fortune-mod-lemons-git
pkgver=r4.3857b4c
pkgrel=1
pkgdesc="Lemon facts for fortune-mod"
arch=('any')
url="https://gitlab.com/dnaf/lemon-fortunes"
license=('MIT')
groups=('fortune-mods')
depends=('fortune-mod')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git+https://gitlab.com/dnaf/lemon-fortunes.git')
noextract=()
md5sums=('SKIP')

# Please refer to the 'USING VCS SOURCES' section of the PKGBUILD man page for
# a description of each element in the source array.

pkgver() {
	cd "${srcdir}/lemon-fortunes"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	strfile lemon-fortunes/lemons lemon-fortunes/lemons.dat
}

package() {
	install -D -m644 ${srcdir}/lemon-fortunes/lemons ${pkgdir}/usr/share/fortune/lemons
	install -D -m644 ${srcdir}/lemon-fortunes/lemons.dat ${pkgdir}/usr/share/fortune/lemons.dat
}
