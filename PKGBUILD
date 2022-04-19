# Contributor: Balló György <ballogyor+arch at gmail dot com>

pkgname=mangareader
pkgver=2.0.1
pkgrel=1
pkgdesc='Manga Reader for local files'
arch=('x86_64')
url='https://github.com/g-fb/mangareader'
license=('GPL3')
depends=('hicolor-icon-theme' 'kconfig' 'kcoreaddons' 'ki18n' 'kxmlgui' 'kio' 'kconfigwidgets')
makedepends=('cmake' 'extra-cmake-modules' 'git' 'ninja')
source=("https://github.com/g-fb/$pkgname/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('a4ade2945f97299bdb56a08ff5bde805b60824c668aa0d0a01aebabd0f4e7ee1')

build() {
  cmake -S $pkgname-$pkgver -B build -G Ninja -DCMAKE_INSTALL_PREFIX='/usr'
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
