# Maintainer: Paul Davis ("dangersalad") <paul@dangersalad.com>

pkgname=starruler2-mod-risingstars
pkgver=1.3.0
pkgrel=1
pkgdesc="mod for Star Ruler 2"
arch=('x86_64')
url="https://github.com/DaloLorn/Rising-Stars"
license=('custom')
depends=(starruler2-git)

source=(
    https://github.com/DaloLorn/Rising-Stars/archive/WorkshopBuild.tar.gz
)

md5sums=('9a9b828791260f22b7c3a14976d5019b')

package() {
    install -d $pkgdir/opt/starruler2/mods
    cp -r "$srcdir/Rising-Stars-WorkshopBuild/Rising Stars" $pkgdir/opt/starruler2/mods
}

