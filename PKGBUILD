# Maintainer Torsten Keßler <t dot kessler at posteo dot de>
pkgname=rocm-dbgapi
pkgver=5.0.2
pkgrel=1
pkgdesc="Support library necessary for a debugger of AMD's GPUs"
arch=('x86_64')
url='https://github.com/ROCm-Developer-Tools/ROCdbgapi'
license=('MIT')
depends=('comgr' 'hsa-rocr')
makedepends=('cmake' 'rocm-cmake' 'git' 'doxygen' 'texlive-latexextra')
source=("$pkgname-$pkgver.tar.gz::$url/archive/rocm-$pkgver.tar.gz"
        'add_limits.patch::https://patch-diff.githubusercontent.com/raw/ROCm-Developer-Tools/ROCdbgapi/pull/4.patch')
sha256sums=('b7554dfe96bda6c2ee762ad6e3e5f91f0f52b5a525e3fb29d5e1fe6f003652b5'
            '91b29cafec79441e6c311d50ca5653ec8315c401b1cc0f93ce65bfdfdda2e04e')
_dirname=$(basename "$url")-$(basename "${source[0]}" ".tar.gz")

prepare() {
    cd "$_dirname"
    patch -Np1 -i "$srcdir/add_limits.patch"
}

build() {
    cmake   -Wno-dev -B build \
            -S "$_dirname" \
            -DCMAKE_INSTALL_PREFIX=/opt/rocm

    make -C build doc all
}

package() {
    DESTDIR="$pkgdir" make -C build install
    install -Dm644 "$srcdir/$_dirname/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
