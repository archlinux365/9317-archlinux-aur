# Maintainer: Sebastian Wiesner <sebastian@swsnr.de>
# Contributor: Genki Sky <alt+archlinux.org@genki.is>

pkgname=tla-toolbox
pkgver=1.7.0
pkgrel=1
pkgdesc='IDE for the TLA+ tools'
arch=('x86_64')
url='http://research.microsoft.com/en-us/um/people/lamport/tla/toolbox.html'
license=('MIT')
depends=('java-runtime')
source=("https://github.com/tlaplus/tlaplus/releases/download/v$pkgver/TLAToolbox-$pkgver-linux.gtk.x86_64.zip"
        tla-toolbox.desktop)
sha256sums=('a91c7d93ba7ecd490aed05da5988c7b6299ae279e0fbdbc97e34cdc642483f67'
            '900b0d2e03a7254faa108653aee50f1107b249c41e40d66655f7fdb12d4a5c82')

package() {
    install -d -m755 "$pkgdir/usr/share/java/tla-toolbox"
    cp -r "$srcdir"/toolbox/* "$pkgdir/usr/share/java/tla-toolbox/"
    install -d -m755 "$pkgdir/usr/bin"
    ln -s "/usr/share/java/tla-toolbox/toolbox" "$pkgdir/usr/bin/tla-toolbox"
    install -D -m644 "$srcdir/toolbox/icon.xpm" "$pkgdir/usr/share/pixmaps/tla-toolbox.xpm"
    install -D -m644 "$srcdir/tla-toolbox.desktop" "$pkgdir/usr/share/applications/tla-toolbox.desktop"
}
