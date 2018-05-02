# Maintainer: Sven Karsten Greiner <sven@sammyshp.de>

# Contributor: Lukas Jirkovsky <l.jirkovsky@gmail.com>
# Contributor: caemir <benjamin@colard.info>
# Contributor: Eichi <mail@der-eichi.de>
# Contributor: Jaroslav Lichtblau <svetlemodry@archlinux.org>

pkgname=josm-latest
pkgver=13698
pkgrel=1
pkgdesc="Nightly build of an editor for OpenStreetMap written in Java"
arch=('any')
url="http://josm.openstreetmap.de/"
license=('GPL')
depends=('java-runtime>=8' 'libxtst' 'ttf-font')
provides=('josm')
conflicts=('josm')
backup=('etc/conf.d/josm')
source=("josm${pkgver}_josm-latest.jar::https://josm.openstreetmap.de/josm-latest.jar"
        "josm${pkgver}_josm.1.man::https://josm.openstreetmap.de/export/HEAD/josm/trunk/linux/latest/usr/share/man/man1/josm-latest.1"
        "josm${pkgver}_josm.desktop::https://josm.openstreetmap.de/export/HEAD/josm/trunk/linux/tested/usr/share/applications/josm.desktop"
        "josm.sh"
        "josm.conf.d")
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         '97fe42c35e8a90fef9621de2ce027052'
         'bb7c9a6a06d6633aa091d80d3da96744')
noextract=('josm-latest.jar')

prepare() {
    bsdtar -xf josm${pkgver}_josm-latest.jar --strip-components 1 images/logo_48x48x32.png

    sed -i 's/-latest//g' josm${pkgver}_josm.1.man
}

package() {
    # application
    install -Dm644 josm${pkgver}_josm-latest.jar "$pkgdir/usr/share/java/josm/josm.jar"
    install -Dm755 josm.sh "$pkgdir/usr/bin/josm"

    # configuration
    install -Dm644 josm.conf.d "$pkgdir/etc/conf.d/josm"

    # desktop integration
    install -Dm644 josm${pkgver}_josm.desktop "$pkgdir/usr/share/applications/josm.desktop"
    install -Dm644 logo_48x48x32.png "$pkgdir/usr/share/pixmaps/josm.png"

    # man page
    install -Dm644 josm${pkgver}_josm.1.man "$pkgdir/usr/share/man/man1/josm.1"
}
