# Maintainer: Ivan Krivosheev <py.krivosheev@gmail.com>

pkgname=pa-notify
pkgver=1.3.3
pkgrel=1
pkgdesc="PulseAudio volume notification"
arch=(x86_64)
url="https://github.com/ikrivosheev/pa-notify"
license=(MIT)
depends=(libnotify libpulse)
makedepends=(cmake)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=('5dc2f1c0deee50089c2c04032d4b73fc')

build() {
    export CFLAGS+=" ${CPPFLAGS}"
    export CXXFLAGS+=" ${CPPFLAGS}"

    source_dir="${pkgname}-${pkgver}"
    cmake -B build -S "${source_dir}" \
        -DCMAKE_INSTALL_PREFIX='/usr' \
        -Wno-dev
    cmake --build build
}

package() {
    DESTDIR="$pkgdir" cmake --install build
}

