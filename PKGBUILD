# Maintainer: osch <oliver at luced de>
pkgname=lua-lanes
pkgver=3.15.1
pkgrel=1
epoch=
pkgdesc="A solution for running Lua multithreaded"
arch=('x86_64')
url="https://github.com/LuaLanes/lanes"
license=('MIT')
groups=()
depends=('lua')
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/LuaLanes/lanes/archive/v$pkgver.tar.gz")
noextract=()
md5sums=('ad240ec8b55cecadf9e028c1a748824a')
validpgpkeys=()

prepare() {
	cd "lanes-$pkgver"
}

build() {
	cd "lanes-$pkgver"
	make LUA=/usr/bin/lua \
	     LUA_FLAGS=`pkg-config --cflags lua` \
	     LUA_LIBS=`pkg-config --libs lua` \
	     CFLAGS="-O2 -fPIC `pkg-config --cflags lua`"
}

package() {
	cd "lanes-$pkgver"

	install -d                "$pkgdir`pkg-config --variable=INSTALL_CMOD lua`/lanes"
	install src/lanes/core.so "$pkgdir`pkg-config --variable=INSTALL_CMOD lua`/lanes/core.so"

	install -d                  "$pkgdir`pkg-config --variable=INSTALL_LMOD lua`"
	install -m644 src/lanes.lua "$pkgdir`pkg-config --variable=INSTALL_LMOD lua`"

	install -d                  "$pkgdir`pkg-config --variable=INSTALL_INC lua`"
	install -m644 src/lanes.h   "$pkgdir`pkg-config --variable=INSTALL_INC lua`"

	install -d "$pkgdir/usr/share/licenses/$pkgname"
	install -m644 COPYRIGHT "$pkgdir/usr/share/licenses/$pkgname"
}
