# Maintainer: Connor Etherington <connor@concise.cc>
# ---
_pkgbase=st
pkgname=st-nu1ll1nux
pkgver=0.8.5
pkgrel=1
pkgdesc="Concise Build of Suckless Simple Terminal"
arch=('x86_64')
url="https://gitlab.com/qYp/${_pkgbase}"
license=('MIT')
options=('zipman')
depends=('libxft')
makedepends=('ncurses' 'libxft' 'git')
optdepends=(
    'dmenu: feed urls to dmenu'
    'libcurl: for curl'
  )
provides=(st)
conflicts=(st)
backup=(usr/bin/st.bak)
source=("git+$url.git")
md5sums=('SKIP')

pkgver() {
  cd "${_pkgbase}"
  printf "1.0.""$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare() {
	cd $srcdir/${_pkgbase}
	sed -i '/tic /d' Makefile
}

build() {
	cd "${_pkgbase}"
	make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11
}

package() {
	cd "${_pkgbase}"
	make PREFIX=/usr DESTDIR="${pkgdir}" clean install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 Xdefaults "${pkgdir}/usr/share/doc/${pkgname}/Xdefaults.example"
}
