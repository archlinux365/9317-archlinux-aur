# Maintainer: Florian Loitsch <florian@toit.io>
pkgname='toit'
pkgver='0.10.2'
pkgrel=1
pkgdesc="Toit programming language SDK"
arch=('x86_64')
url="https://toitlang.org"
license=('LGPL')
depends=('gcc-libs')
makedepends=(
	'cmake'
	'ninja'
	'go'
)
source=("https://github.com/toitlang/toit/archive/v$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('e4072abc67ce9f114a3f5b953ed742e631eaad0a5ab58198114094ba5029fa90')

prepare() {
	cd "$pkgname-$pkgver"
	cd third_party
	git clone https://github.com/toitware/esp-idf.git
	cd esp-idf
	git checkout patch-head-4.3-3
	git submodule update .
	# We only need the mbedtls component, so don't bother doing a full recursive init.
	git submodule update --init components/mbedtls
}

build() {
	cd "$pkgname-$pkgver"
	IDF_PATH=third_party/esp-idf make -j1 tools
}

package() {
	cd "$pkgname-$pkgver"
	IDF_PATH=third_party/esp-idf make DESTDIR="$pkgdir/" install
	mkdir -p "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toitvm" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toitc" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toitpkg" "$pkgdir/usr/bin"
	ln -s "/opt/toit-sdk/bin/toitlsp" "$pkgdir/usr/bin"
}
