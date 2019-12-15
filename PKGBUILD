# Maintainer: Felix Kauselmann <licorn@gmail.com>
# Contributor: droserasprout <droserasprout@tuta.io>
# Contributor: atommixz <atommixz@gmail.com>

pkgname=airdcpp-webclient
pkgver=2.7.0
pkgrel=1
pkgdesc="A peer-to-peer file sharing client with web user interface"
arch=('x86_64' 'armv7h')
license=('GPL2')
url="https://github.com/airdcpp-web/${pkgname}"
depends=('miniupnpc' 'boost' 'libmaxminddb' 'leveldb' 'openssl' 'geoip' 'leveldb' 'websocketpp-git-dev' 'libnatpmp' 'intel-tbb')
makedepends=('cmake' 'git' 'npm')
source=("https://github.com/airdcpp-web/airdcpp-webclient/archive/${pkgver}.tar.gz") 
md5sums=('33f186cf82db9ecdbe2455899adb56b4')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}/airdcpp-core"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    cmake ./ -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_LIBDIR=lib
    make
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    make DESTDIR="$pkgdir" install
}
