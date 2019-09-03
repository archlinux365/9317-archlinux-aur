# Maintainer: Mark Wagie <yochanan dot marqos at gmail dot com>
pkgname=guiscrcpy
pkgver=1.10
pkgrel=1
pkgdesc="A full fledged GUI integration for the most award winning open-source Android screen mirroring system -- scrcpy"
arch=('i686' 'x86_64')
url="https://srevinsaju.github.io/guiscrcpy"
license=('GPL3')
depends=('scrcpy' 'python-pyqt5' 'python-psutil')
optdepends=('python-qdarkstyle: for dark theme'
            'wmctrl: to use development toolkit'
            'xdotool: to use development toolkit')
source=("$pkgname-$pkgver.tar.gz::https://github.com/srevinsaju/$pkgname/archive/$pkgver.tar.gz"
        "$pkgname.desktop"
        "$pkgname.sh")
sha256sums=('de0c6aa64ec7fa792ab0358b90c51ed78e53e4ced1930c0cbdd834615e72767d'
            '17d3182d5a910b51803c72922ffd5a226691a290e360b72a93597dc5700a4c96'
            '21a9e0f6a38db03cbe84d6498519bd79d66796f47cd6a738133f38a45ea4bb42')

package() {
	cd "$pkgname-$pkgver"
	install -d "$pkgdir/"{opt/$pkgname,usr/bin}
	cp -r * "$pkgdir/opt/$pkgname/"
	install -Dm755 "$srcdir/$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
	install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
