# Maintainer: Colin Arnott <colin@urandom.co.uk>

pkgname=asmfmt
pkgver=1.2.3
pkgrel=1
pkgdesc="Format your assembler code in a similar way that gofmt formats your Go code."
arch=('any')
url="https://github.com/klauspost/asmfmt"
license=('BSD')
makedepends=('go')
source=("${url}/archive/v${pkgver}.tar.gz" "go.mod" "go.sum")
sha512sums=('08f762c3c7a379c8dd67d4951bbb546c716fc02e47cd14b53d9e61fa4d44d91bd84848b5fe46813b0bfe9c069c0318a853f0232c9dd04b507c99c4c0043d96c0'
            '9d2fa60c07f6f38617ad08e902ddfa69e7b89a7b6fdc4701bdd03e4a49ccd60f22a310ce8aedeafa76adbb2a587eedc9634b2f26850cf725646aa231e72db1b4'
            '43900b7e5dd119db78c3b8a01e32d6d3a81c31f7918cd14f023184c4d9bac33cc7cccb8003fdd24e6822e5fb1ebd7a9ba5c8aa61d99082dbe5414b5ad9d19adc')

prepare() {
	mkdir -p bin "${pkgname}-${pkgver}"
	ln -sf ${srcdir}/go.mod ${srcdir}/go.sum "${pkgname}-${pkgver}"
}

build() {
	cd "${pkgname}-${pkgver}"
	go build \
		-o="../bin" \
		-trimpath \
		-buildmode=pie \
		-mod=readonly \
		./cmd/asmfmt
}

package() {
	install -Dm755 bin/* -t "$pkgdir/usr/bin"
	cd "${pkgname}-${pkgver}"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}
