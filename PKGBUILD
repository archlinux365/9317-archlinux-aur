# Maintainer: Tim Wanders <timwanders241@gmail.com>
_pkgname=pacman-src
pkgname=pacman-src-git
pkgver=1
pkgrel=1
pkgdesc="pacman-src: A simple tool to compile packages from source using the ABS"
arch=('any')
url="https://github.com/tim241/${_pkgname}"
license=('GPL3')

provides=('pacman-src')
conflicts=('pacman-src')
depends=('bash'	'pacman' 'git')

source=("git://github.com/tim241/${_pkgname}.git")

sha256sums=('SKIP')

pkgver() {
    cd "$_pkgname"
    git describe --always | sed -e 's|-|.|g'
}

build() {
    cd "$_pkgname"
    make VERSION="$pkgver-git"
}

package() {
    cd "$_pkgname"
    make install prefix="/usr/" DESTDIR="$pkgdir"
}
