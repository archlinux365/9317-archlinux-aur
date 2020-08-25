#-*- mode: sh; -*-

# Maintainer: Bart Libert <bart dot libert at gmail dot com>
# Contributor: Tad Fisher <tadfisher at gmail dot com>
pkgname=jasmine-gjs-git
pkgver=2.2.1.r50.g01da266
pkgrel=1
pkgdesc='Run Jasmine specs for GJS code'
arch=('any')
url='https://github.com/ptomato/jasmine-gjs'
license=('MIT')
depends=('gjs')
makedepends=('git' 'meson')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("$pkgname::git+https://github.com/ptomato/jasmine-gjs.git")
sha256sums=('SKIP')

pkgver() {
    cd "$srcdir/$pkgname"
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    arch-meson "$srcdir/$pkgname" _build
    meson compile -C _build
}

package() {
    DESTDIR="$pkgdir/" meson install -C _build
    install -Dm644 "$srcdir/$pkgname/COPYING" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
