# Maintainer: Yan Doroshenko <yandoroshenko@protonmail.com>

pkgname=pulseaudiocontrol
pkgver=1.1
pkgrel=1
pkgdesc="Pulseaudio command line control"
arch=('any')
url="https://github.com/YanDoroshenko/pulseaudio-control"
license=('GPL')
depends=('libpulse>=4.0' 'pulseaudio>=4.0' 'sed')
provides=('pulseaudio-ctl' 'pulseaudio_ctl')
source=("https://github.com/YanDoroshenko/"$pkgname"/raw/master/"$pkgname"-"$pkgver".tar.xz")
sha256sums=('8f83e5698023bb913596b59873844590c18588fb6f4cb4121f30f4a3da989943')

package() {
    mkdir -p "$pkgdir"/usr/bin
    cp "$pkgname"-"$pkgver"/"$pkgname".sh "$pkgdir"/usr/bin/"$pkgname"
}
