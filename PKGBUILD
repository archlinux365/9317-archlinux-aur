# Maintainer: Xiaoxu Guo <ftiasch0@gmail.com>
# Maintainer: László Várady <laszlo.varady93@gmail.com>
# Contributor: Daichi Shinozaki <dsdseg@gmail.com>

pkgname=folly
pkgver=2022.01.24.00
pkgrel=1
pkgdesc="An open-source C++ library developed and used at Facebook"
arch=('x86_64')
url="https://github.com/facebook/folly"
license=('Apache')
depends=('snappy' 'jemalloc' 'double-conversion' 'gflags' 'google-glog' 'libevent' 'boost>=1.51.0'
         'boost-libs' 'fmt' 'openssl' 'zlib' 'bzip2' 'xz' 'lz4' 'zstd' 'libsodium'
         'libdwarf' 'libaio' 'liburing' 'libunwind')
makedepends=('cmake' 'gtest' 'gmock')
source=("https://github.com/facebook/$pkgname/archive/v${pkgver}.tar.gz")
sha256sums=('5c8511eaed524da292ae7f624269153d45533995cb88e34f487ded49f8db388d')

build() {
  cd "$pkgname-$pkgver"
  cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DCMAKE_INSTALL_PREFIX=/usr -S . -B _build
  cmake --build _build
}

check() {
  cd "$pkgname-$pkgver"
  # cmake --build _build --target test
}

package() {
  cd "$pkgname-$pkgver"
  cmake --build _build --target install -- DESTDIR="$pkgdir/"
}
