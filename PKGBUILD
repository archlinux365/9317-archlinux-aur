# Maintainer: Torsten Keßler <t dot kessler at posteo dot de>
# Contributor: Markus Näther <naetherm@cs.uni-freiburg.de>
# Contributor: fermyon <antifermion@protonmail.com>
# Contributor: Ranieri Althoff <ranisalt+aur at gmail.com>

pkgname=rocm-cmake
pkgver=5.0.0
pkgrel=1
pkgdesc='CMake modules for common build tasks needed for the ROCm software stack'
arch=('x86_64')
url='https://github.com/RadeonOpenCompute/rocm-cmake'
license=('MIT')
makedepends=('cmake')
source=("${pkgname}-${pkgver}.tar.gz::$url/archive/rocm-$pkgver.tar.gz")
sha256sums=('45eb958fac33aafea86fb498127ebf8f567646ce9d7288d46afbd087500553a1')
_dirname="$(basename "$url")-$(basename "${source[0]}" .tar.gz)"

build() {
  cmake -DCMAKE_INSTALL_PREFIX=/opt/rocm "$_dirname"
}

package() {
  make DESTDIR="$pkgdir" install

  install -Dm644 "$_dirname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
