# Maintainer: Vlad Zahorodnii <vladzzag@gmail.com>
pkgname=plasma5-wallpapers-dynamic
pkgver=2.3
pkgrel=1
pkgdesc="Dynamic wallpaper plugin for KDE Plasma"
arch=(x86_64)
url="https://github.com/zzag/plasma5-wallpapers-dynamic"
license=('GPL')
depends=(plasma-framework qt5-base qt5-declarative)
makedepends=(cmake extra-cmake-modules)
source=("$pkgname-$pkgver.tar.gz"::"https://github.com/zzag/$pkgname/archive/$pkgver.tar.gz")
sha256sums=('0017a1a5e94fba33b425365a0a0995b6eacf985201b8cdf2f2358913dcf949fb')

prepare() {
    mkdir -p build
}

build() {
    cd build
    cmake ../$pkgname-$pkgver \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib
    make
}

package() {
    cd build
    make DESTDIR="$pkgdir" install

    cd "$srcdir/$pkgname-$pkgver"
    install -Dm644 metadata.json.solar.sample "$pkgdir/usr/share/doc/${pkgname}/metadata.json.solar.sample"
    install -Dm644 metadata.json.timed.sample "$pkgdir/usr/share/doc/${pkgname}/metadata.json.timed.sample"
}
