# Maintainer: Chinmay Dalal <w5vwg64uy@relay.firefox.com>

pkgname=river-levee-git
_pkgname=levee
pkgver=0.1.1.r2.g15c4386
pkgrel=1
pkgdesc="Statusbar for the river wayland compositor"
arch=('x86_64')
url="https://sr.ht/~andreafeletto/levee"
license=('MIT')
depends=('wayland' 'wayland-protocols' 'fcft' 'pixman' 'libpulse')
makedepends=('zig' 'git')
provides=('levee')
conflicts=('river-levee')
source=(
    "git+https://git.sr.ht/~andreafeletto/$_pkgname"
    'git+https://github.com/ifreund/zig-wayland'
    'git+https://github.com/ifreund/zig-pixman'
    'git+https://git.sr.ht/~novakane/zig-fcft'
    'git+https://git.sr.ht/~andreafeletto/zig-udev'
    'git+https://github.com/Hejsil/zig-clap'
)
sha256sums=(
    'SKIP'
    'SKIP'
    'SKIP'
    'SKIP'
    'SKIP'
    'SKIP'
)

prepare() {
   cd "$srcdir/$_pkgname"
   git submodule init
   for dep in wayland pixman fcft udev clap; do
       git config "submodule.deps/zig-$dep.url" "$srcdir/zig-$dep"
   done
   git submodule update
}

pkgver() {
    cd "$srcdir/$_pkgname"
    git describe --long | sed 's/v//;s/-/.r/;s/-/./'
}

build() {
    cd "$srcdir/$_pkgname"
    zig build -Drelease-safe
}


package() {
    cd "$srcdir/$_pkgname"
    DESTDIR="$pkgdir" zig build -Drelease-safe --prefix '/usr'
    install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$_pkgname"
    install -Dm644 README.md -t "$pkgdir/usr/share/doc/$_pkgname"
}
