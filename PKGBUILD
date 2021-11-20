# Maintainer: Kyle Yasuda <ksyasuda@umich.edu>
pkgname=aniwrapper-git
_pkgname=aniwrapper
pkgver=r89.737d066
pkgrel=1
pkgdesc="A rofi wrapper around a modified ani-cli: a cli to browse and watch anime"
arch=('any')
url="https://github.com/ksyasuda/aniwrapper"
license=('GPL3')
depends=('grep' 'curl' 'sed' 'mpv' 'rofi' 'sqlite3')
makedepends=('git')
source=('aniwrapper::git://github.com/ksyasuda/aniwrapper.git')
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${_pkgname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/${_pkgname%-VCS}"
    install -Dm755 ./ani-cli "$pkgdir/usr/bin/ani-cli"
    install -Dm755 ./aniwrapper "$pkgdir/usr/bin/aniwrapper"
}
