# Maintainer: Jordan Klassen <forivall@gmail.com>
# https://github.com/forivall/aur-packages/tree/master/aur/flow-bin

# TODO: create a flow-examples package and add as an optdepend

pkgname=flow-bin
pkgver=0.36.0
pkgrel=1
epoch=
pkgdesc="Adds static typing to JavaScript to improve developer productivity and code quality"
arch=('x86_64')
url="http://flowtype.org/"
license=('BSD')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=('flow')
conflicts=('flow')
replaces=('flow')
backup=()
options=()
install=
changelog=
source=("https://raw.githubusercontent.com/facebook/flow/v${pkgver}/LICENSE")
source_x86_64=("https://github.com/facebook/flow/releases/download/v${pkgver}/flow-linux64-v${pkgver}.zip")
sha256sums=('7e143b7118d0d0d294ecac71a0dcf24275f3f9cc7a74a157a121ea18ec085114')
sha256sums_x86_64=('e0748136d859d1762fb6e077b2655278a3dc36582db0e15621047fda54046759')
noextract=()

package() {
	install -Dm0755 flow/flow "${pkgdir}/usr/bin/flow"
	install -Dm0644 LICENSE "${pkgdir}/usr/share/licenses/flow/LICENSE"
}
