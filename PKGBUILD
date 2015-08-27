# Maintainer: Martchus <martchus@gmx.net>
pkgname=passwordfile
pkgver=3.0.0
pkgrel=1
arch=('i686' 'x86_64')
pkgdesc="C++ library to read/write passwords from/to encrypted files (using AES-256-CBC via OpenSSL)."
license=('GPL')
depends=('c++utilities' 'openssl')
makedepends=('qt5-base')
install=
url="https://github.com/Martchus/passwordfile"
source=("passwordfile-${pkgver}.tar.gz::https://github.com/Martchus/passwordfile/archive/v${pkgver}.tar.gz")
_reponame=passwordfile
sha256sums=('skip')

build() {
    cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
    INSTALL_ROOT=$pkgdir/usr/ qmake-qt5 "$pkgname.pro"
    make
}

package() {
    cd "$srcdir/${PROJECT_DIR_NAME:-$_reponame-$pkgver}"
    make install
}
