# Maintainer: pkfbcedkrz <pkfbcedkrz@gmail.com>
pkgname=xorg-fonts-cronyx-75dpi
pkgver=2.3.8
pkgrel=1
pkgdesc="X.org cyrillic fonts (Cronyx collection)"
arch=('any')
url="https://packages.debian.org/bullseye/xfonts-cronyx-75dpi"
license=('GPL3')
conflicts=('xorg-fonts-cyrillic')
source=("http://ftp.us.debian.org/debian/pool/main/x/xfonts-cronyx/xfonts-cronyx-75dpi_${pkgver}-9_all.deb")
md5sums=('4f590ee0e14d24482f50c20a13418866')

package() {
    tar xf data.tar.xz
    mv usr $pkgdir/
}
