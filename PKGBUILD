# Maintainer: Carl George < arch at cgtx dot us >

pkgname="tilix"
pkgver=1.6.1
pkgrel=1
pkgdesc="A tiling terminal emulator for Linux using GTK+ 3"
arch=('x86_64' 'i686')
url="https://github.com/gnunn1/tilix"
license=('MPL')
depends=('libx11' 'gtkd' 'vte3' 'dconf' 'gsettings-desktop-schemas')
makedepends=('ldc' 'po4a')
optdepends=('python2-nautilus: for "Open Tilix Here" support in nautilus'\
            'vte3-notification: for desktop notifications support'\
            'vte3-tilix: for notifications, triggers and badges support'
            'libsecret: for the password manager')
provides=('terminix')
conflicts=('terminix')
replaces=('terminix')
source=("$url/archive/$pkgver/$pkgname-$pkgver.tar.gz")
sha256sums=('1b3b0b7a5242400cec613b8f227b53b04b5889a6cb9b71ea95be7f42c9313426')

prepare() {
    cd "$pkgname-$pkgver"
    ./autogen.sh
}

build() {
    cd "$pkgname-$pkgver"
    ./configure --prefix=/usr
    make DC='ldmd' DCFLAGS='-O -inline -release -version=StdLoggerDisableTrace'
}

package() {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
}
