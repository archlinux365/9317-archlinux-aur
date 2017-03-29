# Maintainer: Sven Karsten Greiner <sven@sammyshp.de>

pkgname=cmanager
pkgver=0.2.42
pkgrel=1
pkgdesc='Sync logs between geocaching.com and opencaching.de'
arch=('any')
url='https://github.com/RoffelKartoffel/cmanager'
license=('GPL3')
depends=('java-runtime>=8')
source=("$pkgname-$pkgver.jar::https://github.com/RoffelKartoffel/$pkgname/releases/download/$pkgver/cm-$pkgver.jar"
        "cmanager.sh"
        "cmanager.desktop")
md5sums=('72d0f7896855c7501fbcafa6fb5aeee2'
         'c258a1a5adc27de5a84572563d7578e6'
         '5197054a612b57f0215c3f9092f6b741')
noextract=("$pkgname-$pkgver.jar")

package() {
    # application
    install -Dm644 "$pkgname-$pkgver.jar" "$pkgdir/usr/share/java/cmanager/cmanager.jar"
    install -Dm755 cmanager.sh "$pkgdir/usr/bin/cmanager"

    # desktop integration
    install -Dm644 cmanager.desktop "$pkgdir/usr/share/applications/cmanager.desktop"
    # install -Dm644 cmanager.png "$pkgdir/usr/share/pixmaps/cmanager.png"
}
