# Maintainer: Helder Bertoldo <helder.bertoldo@gmail.com>

_gitname=aesop
pkgname=("${_gitname}-git")
pkgver=latest
pkgrel=1
pkgdesc="The simplest PDF viewer around designed for elementary OS"
arch=('i686' 'x86_64')
url="https://github.com/lainsce/${_gitname}"
license=('GPL3')
depends=('gtk3' 'vala' 'granite' 'libsoup' 'json-glib' 'poppler-glib')
optdepends=('lib32-json-glib')
makedepends=('git' 'meson' 'ninja')
provides=("${_gitname}")
conflicts=("${_gitname}")
source=("git+${url}.git")
md5sums=('SKIP')

pkgver() {
    cd "${_gitname}"
    ( set -o pipefail
        git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
        printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
    )
}

build() {
    cd "${_gitname}/"
    meson . _build --prefix=/usr
    ninja -C _build
}

package() {
    cd "${_gitname}/"
    DESTDIR="${pkgdir}" ninja -C _build install
}

