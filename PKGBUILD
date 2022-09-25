# Maintainer: Jeff Henson <jeff@henson.io>

pkgname=jqp
pkgver=0.2.0
pkgrel=1
pkgdesc=" A TUI playground to experiment with jq "
arch=('x86_64' 'i686')
url="https://github.com/noahgorstein/jqp"
license=('MIT')
depends=('glibc')
makedepends=('go')
source=("$pkgname-$pkgver.tar.gz::${url}//archive/v${pkgver}.tar.gz")
sha256sums=('3ef3228c9b5344cf382531c3b57623cd5a5c364234b7fec5852cf9d7e2694bd8')

build() {
	cd "${pkgname}-${pkgver}"
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"
	export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
	go build -o ${pkgname}
}

package() {
	cd "${pkgname}-${pkgver}"
	install -vDm 755 ${pkgname} -t "${pkgdir}/usr/bin/"
	install -vDm 644 README.md -t "${pkgdir}/usr/share/doc/${pkgname}"
}
