# Maintainer: Victor Schulz <schulz89 at gmail dot com>
# Contributor: 2ion <dev at 2ion dot de>
# Contributor: TDY <tdy at archlinux dot info>
# Contributor: system <system at tou dot de>

pkgname=ebview-git
pkgver=r61.4dc3ae8
pkgrel=1
pkgdesc="A GTK2 based EPWING dictionary viewer"
arch=('i686' 'x86_64')
url="http://ebview.sourceforge.net"
license=('GPL')
groups=()
depends=('gtk2' 'eb-library' 'pangox-compat')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=('git://github.com/fujii/ebview.git')
noextract=()
md5sums=('SKIP')

pkgver() {
    cd "$srcdir/${pkgname%-git}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "$srcdir/${pkgname%-git}"
    ./autogen.sh
    ./configure \
	--prefix=/usr \
	--sysconfdir=/etc \
	CFLAGS="-D_FILE_OFFSET_BITS=64" \
	LIBS=-lX11
    make
}

check() {
	cd "$srcdir/${pkgname%-git}"
	make -k check
}

package() {
    cd "$srcdir/${pkgname%-git}"
    make DESTDIR="$pkgdir/" install
}
