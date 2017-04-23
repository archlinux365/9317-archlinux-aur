# Maintainer: Quentin Glidic <sardemff7@eventd.org>

pkgname=eventd-git
pkgver=0.22.0.r0.gc8d1fe20
_gitname=eventd
_pkgdir=${_gitname}
pkgrel=1
pkgdesc="A small daemon to act on remote or local events"
arch=(
    i686
    x86_64
)
url="https://www.eventd.org"
license=(
    GPL3
    LGPL3
    MIT
)
depends=(
    'cairo>=1.12.0'
    gdk-pixbuf2
    'glib2>=2.40.0'
    glib-networking
    pango
    libsystemd
    libxcb
    util-linux
    xcb-util
    xcb-util-wm
)
makedepends=(
    'meson>=0.39.1'
    ninja
    libxslt
    docbook-xsl
)
optdepends=(
    'avahi: DNS-SD support'
    'gssdp: SSDP support'
    'librsvg: SVG images support'
    'libsoup: WebSocket support'
)
provides=(
    eventd
)
conflicts=(
    eventd
)
options=(
    !strip
)
source=(
    git+https://github.com/sardemff7/${_gitname}
)
sha256sums=(
    SKIP
)

pkgver() {
    cd "${srcdir}"/${_pkgdir}
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}"/${_pkgdir}
    git submodule update --init
}

build() {
    local params=(
        --prefix=/usr
        -Denable-systemd=true
        -Denable-introspection=false
        -Denable-nd-wayland=false
        -Denable-im=false
        -Denable-sound=false
    )

    cd "${srcdir}"/${_pkgdir}
    meson "${srcdir}"/build "${params[@]}"
    ninja -C "${srcdir}"/build
}

check() {
    ninja -C "${srcdir}"/build test
}

package() {
    DESTDIR="${pkgdir}" \
    ninja -C "${srcdir}"/build
}
