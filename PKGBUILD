# Maintainer: Your Name <johnjahi55@gmail.com>
_pkgname=nchat
pkgname=${_pkgname}-git
pkgver=2.02.r2.g8ec85a6
pkgrel=1
pkgdesc="nchat is a console-based chat client for Linux and macOS with support for Telegram."
arch=('any')
url="https://github.com/d99kris/nchat"
license=('MIT')
depends=('ncurses' 'ccache' 'cmake' 'gperf' 'help2man' 'readline' 'openssl' 'zlib'  'sqlite' 'go' 'file')

# depends=('ncurses' 'ccache' 'cmake' 'gperf' 'help2man' 'readline' 'openssl' 'ncurses' 'zlib', 'php', 'clang')  #dependancies for slow mode (low memory/RAM systems)

makedepends=('git')
provides=('nchat')
conflicts=('nchat')
source=("git+$url")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_pkgname}"
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}/${_pkgname}"
    sed -i 's|ncursesw/ncurses.h|ncurses.h|' src/ui*
}

build() {
    cd "${srcdir}/${_pkgname}"
    bash ./make.sh build

}
package() {
    cd "${srcdir}/${_pkgname}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
    cd build
    make DESTDIR="${pkgdir}" install
}
