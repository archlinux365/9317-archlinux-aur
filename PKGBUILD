# Maintainer: Leo <i@setuid0.dev>

pkgname=roadrunner
pkgver=2.7.4
pkgrel=1
pkgdesc="High-performance PHP application server, load-balancer and process manager written in Golang"
arch=(x86_64)
url="https://roadrunner.dev/"
license=(MIT)
depends=("php>=7.4")
makedepends=("go>=1.17")
source=(
	"$pkgname-$pkgver.tar.gz::https://github.com/spiral/$pkgname/archive/v$pkgver.tar.gz"
	".rr.yaml.sample-full"
	".rr.yaml.sample-minimal"
)
sha256sums=(
	'5a58b59831c2ef5c1e5d217bbe75891faac7926a6db5b2e82c4de387358197be'
	SKIP
	SKIP
)
options=("!buildflags")

prepare() {
	export GOPATH="$srcdir"/gopath

	cd "$srcdir/$pkgname-$pkgver"
	go mod download
	go mod verify
}

build() {
	export GOPATH="$srcdir"/gopath
	export CGO_CPPFLAGS="${CPPFLAGS}"
	export CGO_CFLAGS="${CFLAGS}"
	export CGO_CXXFLAGS="${CXXFLAGS}"
	export CGO_LDFLAGS="${LDFLAGS}"

	cd "$srcdir/$pkgname-$pkgver"

	CGO_ENABLED=0 go build \
		-trimpath \
		-ldflags "-s\
		 -X github.com/roadrunner-server/roadrunner/v2/internal/meta.version=${pkgver}\
		 -X github.com/roadrunner-server/roadrunner/v2/internal/meta.buildTime=$(date +%FT%T%z)" \
		-o ./rr \
		./cmd/rr
}

check() {
	export GOPATH="$srcdir"/gopath

	cd "$srcdir/$pkgname-$pkgver"
	go test -race -covermode=atomic -coverprofile ./coverage.txt ./...
}

package() {
	install -Dt "$pkgdir/usr/bin/" -m755 "$srcdir/$pkgname-$pkgver/rr"
	install -Dt "$pkgdir/usr/share/$pkgname/" -m644 "$srcdir/.rr.yaml.sample-full"
	install -Dt "$pkgdir/usr/share/$pkgname/" -m644 "$srcdir/.rr.yaml.sample-minimal"
}
