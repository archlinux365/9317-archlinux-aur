# Maintainer: MoonlightSentinel <moonlightsentinel@disroot.org>

pkgname=har-git
pkgver='0.1.0'
pkgrel=1
pkgdesc="Utility to create / extract HAR (Human Archive Format) files"
arch=( 'any' )
# N.B.: Forked from marler8997/har due to inactivity
url="https://github.com/MoonlightSentinel/har"
license=('Boost')
makedepends=(
	'git'
	'ldc'
)
provides=( "${pkgname%-git}" )
conflicts=( "${pkgname%-git}" )
source=( "$pkgname::git+${url}.git" )
md5sums=( 'SKIP' )

pkgver() {
	cd "$srcdir/${pkgname}"

	# Detect the latest tag
	git describe --tags `git rev-list --tags --max-count=1` | cut -c 2-
}

prepare() {
	cd "$srcdir/${pkgname}"
	# Checkout latest tag determined above
	git checkout --quiet "v$pkgver"
}

build() {
	cd "$srcdir/${pkgname}"

	# Build with full optimization. Statically link druntime / phobos
	# s.t. ldc (or rather libphobos) is a build-only dependency
	ldc2 harmain.d -of=har \
		-Isrc -i \
		-O3 -mcpu=native \
		-flto=full \
		-defaultlib="phobos2-ldc-lto,druntime-ldc-lto" \
		-link-defaultlib-shared=false \
		--function-sections -L--gc-sections
}

check() {
	cd "$srcdir/${pkgname}"

	# Ensure that the test is reentrant
	mkdir -p extracted
	rm -f extracted/*

	./har --quiet --dir=extracted examples/files.har
	[ "$(ls -1q extracted/ | wc -l)" == "3" ]
	[ "$(cat extracted/hello.txt)" == 'Hello, this is a file currently archived in a HAR file.' ]
	[ "$(cat extracted/other.txt)" == 'This is another file also archived within the same HAR file.' ]
	[ "$(cat extracted/yetanother.txt)" == 'This is yet another file also archived within the same HAR file.' ]
}

package() {
	cd "$srcdir/${pkgname}"
	local target="$pkgdir/usr/bin/"
	mkdir -p "$target"
	mv ./har "$target/"
}
