# Maintainer: Daurnimator <daurnimator@archlinux.org>
# Maintainer: Vincent BESANCON (bigbrozer) <besancon.vincent@gmail.com>
pkgname=azure-storage-fuse
pkgver=1.4.2
pkgrel=1
pkgdesc="A virtual file system adapter for Azure Blob storage"
arch=('x86_64')
url="https://github.com/Azure/azure-storage-fuse"
license=('MIT')
depends=('boost-libs'
         'curl'
         'fuse'
         'gnutls'
         'libgcrypt')
makedepends=('boost'
             'cmake')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Azure/azure-storage-fuse/archive/refs/tags/blobfuse-$pkgver.tar.gz")
sha256sums=('252d0562c0403bc85cfd9f98fb66211180cf961b09f6f180752ea07c6694b10f')

build() {
  cd "$pkgname-blobfuse-$pkgver"

  # Build Azure Storage lib first
  mkdir -p cpplite/build.release
  env -C cpplite/build.release cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBUILD_ADLS=ON \
    -DUSE_OPENSSL=OFF \
    ..
  make -C cpplite/build.release

  # Build blobfuse
  mkdir -p build
  env -C build cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DBoost_USE_STATIC_LIBS=OFF \
    ..
  make -C build
}

package() {
  cd "$pkgname-blobfuse-$pkgver"
  make -C build DESTDIR="$pkgdir/" install
  install -d "$pkgdir/usr/share/doc/$pkgname/"
  install -d "$pkgdir/usr/share/licenses/$pkgname/"
  install README.md "$pkgdir/usr/share/doc/$pkgname/"
  install LICENSE "$pkgdir/usr/share/licenses/$pkgname/"
}
