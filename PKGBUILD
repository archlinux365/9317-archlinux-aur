# Maintainer: Kenneth Flak <kennethflak@protonmail.com>

pkgname=touchosc-bin
pkgver=1.0.0.92
pkgrel=1
pkgdesc='Modular control surface'
arch=('x86_64')
url=http://hexler.net
license=(custom:TouchOSC)
source=("https://hexler.net/pub/touchosc/touchosc-$pkgver-linux-$arch.deb")
sha256sums=('83469ec3aa776954d2eee2a52d58dab061593aab8605f99cf35b851fe0d4e6ef')

package() {

    cd "$srcdir"

    ar vx "touchosc-$pkgver-linux-$arch.deb"
    tar xzvf data.tar.gz

    sed -i 's:opt/touchosc:usr/bin:g' usr/share/applications/touchosc.desktop

    install -Dm755 $srcdir/opt/touchosc/TouchOSC $pkgdir/usr/bin/TouchOSC
    install -Dm644 $srcdir/usr/share/applications/touchosc.desktop -t $pkgdir/usr/share/applications
    install -Dm644 $srcdir/usr/share/icons/hicolor/128x128/apps/touchosc.png -t $pkgdir/usr/share/icons/hicolor/128x128/apps
    install -Dm644 $srcdir/usr/share/icons/hicolor/128x128/mimetypes/application-x-touchosc-layout.png -t $pkgdir/usr/share/icons/hicolor/128x128/mimetypes
    install -Dm644 $srcdir/usr/share/icons/hicolor/128x128/mimetypes/application-x-touchosc-classic-layout.png -t $pkgdir/usr/share/icons/hicolor/128x128/mimetypes
    install -Dm644 $srcdir/usr/share/icons/hicolor/256x256/apps/touchosc.png -t $pkgdir/usr/share/icons/hicolor/256x256/apps
    install -Dm644 $srcdir/usr/share/icons/hicolor/256x256/mimetypes/application-x-touchosc-layout.png -t $pkgdir/usr/share/icons/hicolor/256x256/mimetypes
    install -Dm644 $srcdir/usr/share/icons/hicolor/256x256/mimetypes/application-x-touchosc-classic-layout.png -t $pkgdir/usr/share/icons/hicolor/256x256/mimetypes
    install -Dm644 $srcdir/usr/share/mime/packages/touchosc.xml -t $pkgdir/usr/share/mime/packages


}
