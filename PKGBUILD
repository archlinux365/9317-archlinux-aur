# Maintainer: Joseph Lansdowne <J49137@gmail.com>
pkgname=farragone
pkgver=0.2.2
pkgrel=1
pkgdesc="Batch file renamer for programmers"
arch=(any)
url=http://ikn.org.uk/Farragone
license=(GPL3)
makedepends=("python>=3")
depends=("python>=3.1" "python-pyqt5>=5.2" "qt5-base>=5.2" libxkbcommon-x11)
source=(http://ikn.org.uk/files/desktop/$pkgname/$pkgname-$pkgver.tar.gz)
md5sums=('5ba13d28a902f5f1d6aa5639f691461f')

build () {
    cd "$srcdir/${pkgname}-$pkgver"
    ./configure
    make
}

package () {
    cd "$srcdir/${pkgname}-$pkgver"
    make DESTDIR="$pkgdir" prefix=/usr install
}
