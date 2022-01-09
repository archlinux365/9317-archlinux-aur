# Contributor: Daniel Martí <mvdan@mvdan.cc>

pkgname=fdroidcl
_name="${pkgname}"
pkgver=0.5.0
pkgrel=3
pkgdesc="F-Droid desktop client"
url="https://github.com/mvdan/${_name}"
license=('BSD')
arch=('i686' 'x86_64')
depends=('android-tools')
makedepends=('git' 'go')
source=("${url}/archive/refs/tags/v${pkgver}.tar.gz")
sha1sums=('5a623e52c5531a200a324087ef9e68cfdce21b02')

build() {
	cd "${srcdir}/${_name}-${pkgver}"
    export CGO_CPPFLAGS="${CPPFLAGS}"
    export CGO_CFLAGS="${CFLAGS}"
    export CGO_CXXFLAGS="${CXXFLAGS}"
    export CGO_LDFLAGS="${LDFLAGS}"
    export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
    go build
}

package() {
	cd "${srcdir}/${_name}-${pkgver}"
	install -Dm755 "${_name}" "${pkgdir}/usr/bin/${_name}"
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 contrib/completion/zsh/_fdroidcl "${pkgdir}/usr/share/zsh/vendor-completions/_fdroidcl"
}
