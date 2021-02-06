# Maintainer: Aleksy Grabowski <hurufu+arch@gmail.com>

pkgname=python-pynng-git
pkgver=0.6.2.r17.g1a7ad77
pkgrel=3
pkgdesc='Ergonomic bindings for nanomsg next generation (nng), in Python'
arch=(any)
url='https://github.com/codypiersall/pynng'
license=('MIT')
depends=(
    licenses
    python-sniffio
)
makedepends=(
    git
    python-pip
    cmake
    python-wheel
)
checkdepends=(
    python-pytest-asyncio
    python-pytest-trio
    python-curio
    python-mbed-host-tests
)
source=('git+git://github.com/codypiersall/pynng.git')
md5sums=('SKIP')

pkgver() {
    git -C "$srcdir/pynng" describe | awk -F - '{ print substr($1,2)".r"$2"."$3 }'
}

build() {
    cd "$srcdir/pynng"
    python setup.py build
}

package() {
    cd "$srcdir/pynng"
    python setup.py install -O1 --root="$pkgdir" --skip-build
}

check() {
    cd "$srcdir/pynng"
    # FIXME: This requires already installed pynng
    pytest
}
