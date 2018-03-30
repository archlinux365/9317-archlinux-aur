# Maintainer: osch <oliver at luced de>
pkgname=luajit-lanes
pkgver=3.11
pkgrel=1
epoch=
pkgdesc="A solution for running Lua multithreaded"
arch=('x86_64')
url="https://github.com/LuaLanes/lanes"
license=('MIT')
groups=()
depends=('luajit')
makedepends=()
checkdepends=()
optdepends=()
provides=("lua51-lanes")
conflicts=("lua51-lanes")
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/LuaLanes/lanes/archive/v$pkgver.tar.gz")
noextract=()
md5sums=()
validpgpkeys=()

prepare() {
	cd "lanes-$pkgver"
}

build() {
	cd "lanes-$pkgver"
	make LUA=/usr/bin/luajit \
	     LUA_FLAGS=`pkg-config --cflags luajit` \
	     LUA_LIBS=`pkg-config --libs luajit` \
	     CFLAGS="-O2 -fPIC `pkg-config --cflags luajit`"
}

package() {
	cd "lanes-$pkgver"

	install -d                "$pkgdir`pkg-config --variable=INSTALL_CMOD luajit`/lanes"
	install src/lanes/core.so "$pkgdir`pkg-config --variable=INSTALL_CMOD luajit`/lanes/core.so"

	install -d                  "$pkgdir`pkg-config --variable=INSTALL_LMOD luajit`"
	install -m644 src/lanes.lua "$pkgdir`pkg-config --variable=INSTALL_LMOD luajit`"

	install -d "$pkgdir/usr/share/licenses/$pkgname"
	install -m644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname"
}
md5sums=('07ed104a450b76d5919cc8f46a5b4a2f')
