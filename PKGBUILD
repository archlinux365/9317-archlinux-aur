# Maintainer: Torsten Keßler <t dot kessler at posteo dot de>
pkgname=hipify-clang
pkgver=5.1.1
pkgrel=1
pkgdesc='Convert CUDA to Portable C++ Code '
arch=('x86_64')
url='https://github.com/ROCm-Developer-Tools/HIPIFY'
license=('MIT')
depends=('rocm-llvm' 'cuda')
makedepends=('cmake')
source=("${pkgname}-${pkgver}.tar.gz::$url/archive/rocm-$pkgver.tar.gz")
sha256sums=('2d1bdfc75f5be4895e4b15a00cbf5a6869df17c79a8fefdf65a3834c47201429')
_dirname="$(basename "$url")-$(basename "${source[0]}" .tar.gz)"

build() {
  cmake -Wno-dev -B build \
        -S "$_dirname" \
        -DLLVM_DIR=/opt/rocm/llvm/lib/cmake/llvm \
        -DCMAKE_INSTALL_PREFIX=/opt/rocm/hip/bin
  make -C build
}

package() {
  DESTDIR="$pkgdir" make -C build install

  install -Dm644 "$_dirname/LICENSE.txt" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
