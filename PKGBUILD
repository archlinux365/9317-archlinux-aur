# Maintainer:  jon4hz me@jon4hz.io
pkgname=aaregurucli-git
pkgver=0.4.3.r98.ed3ab04
pkgrel=1
epoch=
pkgdesc="aare.guru CLI "
arch=(x86_64)
url="https://github.com/gexclaude/aaregurucli.git"
license=('GPLv3')
groups=()
depends=()
makedepends=(go git)
checkdepends=()
optdepends=()
provides=(aaregurucli)
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("git+$url")
noextract=()
md5sums=('SKIP')
validpgpkeys=()

get_latest_release() {
	curl --silent "https://api.github.com/repos/gexclaude/aaregurucli/releases/latest" |
	grep '"tag_name":' |
	sed -E 's/.*"([^"]+)".*/\1/'
}

pkgver() {
	cd "${_pkgname}"
	printf "%s.r%s.%s" "$(get_latest_release)" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	
}

build() {
	cd "aaregurucli"
	go build .
}

package() {
	cd "aaregurucli"
	sudo mv aaregurucli /usr/bin/
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/{pkgname}/LICENSE"
	install -Dm644 README.md "${pkgdir}/usr/share/doc/{pkgname}/README.md"
}
