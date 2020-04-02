# Maintainer: Vbextreme <@>
# Contributor: Vbextreme <@>
pkgname=('easyframework')
pkgdesc='another C framework'
pkgver='1.1.1'
pkgrel=1
arch=('x86_64')
url='https://github.com/vbextreme/EasyFramework'
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/vbextreme/EasyFramework/archive/v${pkgver}.tar.gz")
license=('GPL3')
sha256sums=('SKIP')
makedepends=('meson' 'ncurses')
depends=('pcre2' 'libunistring' 'libtar' 'zlib' 'gnutls' 'curl' 'libgit2' )

prepare() {
    cd "EasyFramework-${pkgver}"
    meson build -Dprefix=/usr -Dterminfo=share/terminfo
}

build() {
    cd "EasyFramework-${pkgver}"
    ninja
}

package() {
    cd "EasyFramework-${pkgver}"
    DESTDIR="$pkgdir" ninja install
}

