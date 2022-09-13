# Maintainer: Vadim Tsesko <incubos at yandex dot com>

pkgname=async-profiler
pkgver=2.8.3
pkgrel=1
pkgdesc='Sampling CPU and HEAP profiler for Java featuring AsyncGetCallTrace + perf_events'
arch=('x86_64')
url='https://github.com/jvm-profiling-tools/async-profiler'
license=('Apache')
provides=('async-profiler')
groups=('jvm-profiling-tools' 'odnoklassniki')
depends=('java-environment')
source=("$pkgname-$pkgver.tar.gz::https://github.com/jvm-profiling-tools/async-profiler/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('6a3fa97c9b3cbac4355459ee9e7f844a852b2f797f8c87c7188a81c22f0413d0')
install=async-profiler.install

build() {
  cd "$pkgname-$pkgver"
  make all
}

package() {
  cd "$pkgname-$pkgver"
  install -d "$pkgdir/opt/async-profiler/build"
  install -m 644 build/async-profiler.jar build/converter.jar "$pkgdir/opt/async-profiler/build"
  install build/libasyncProfiler.so build/jattach build/fdtransfer "$pkgdir/opt/async-profiler/build"
  install profiler.sh "$pkgdir/opt/async-profiler/profiler.sh"
}
