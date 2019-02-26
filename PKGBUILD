# Maintainer: Cody Schafer <aur at codyps.com>
pkgname=ftx-prog-git
pkgver=r54.31cfa4d
pkgrel=1
pkgdesc=""
arch=(x86_64)
url="https://github.com/richardeoin/ftx-prog"
license=('GPL')
groups=()
depends=(libftdi libusb)
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/richardeoin/ftx-prog.git')
noextract=()
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd "$srcdir/${pkgname%-git}"
	#patch -p1 -i "$srcdir/${pkgname%-VCS}.patch"
}

_run() {
	echo "$@"
	"$@"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	#./autogen.sh
	#./configure --prefix=/usr
	_run cc ${CFLAGS} ftx_prog.c -o ftx_prog ${LDFLAGS} -lusb -lftdi
}

check() {
	cd "$srcdir/${pkgname%-git}"
	#make -k check
}

package() {
	cd "$srcdir/${pkgname%-git}"
	mkdir -p $pkgdir/usr/bin
	install -m755 ftx_prog $pkgdir/usr/bin
	mkdir -p "$pkgdir/usr/share/doc/${pkgname%-git}"
	install -m644 README.md "$pkgdir/usr/share/doc/${pkgname%-git}"
}
