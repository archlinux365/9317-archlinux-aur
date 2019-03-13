# Maintainer: Tommaso Sardelli <lacapannadelloziotom at gmail dot com>
pkgname=bpftrace-git
_pkgname=bpftrace
pkgver=r723.89eb329
pkgrel=1
pkgdesc='High-level tracing language for Linux eBPF'
arch=('i686' 'x86_64')
url="https://github.com/iovisor/bpftrace"
license=('Apache')
depends=('libelf' 'zlib' 'llvm-libs' 'clang')
makedepends=('cmake' 'git' 'llvm' 'bcc')
conflicts=('bpftrace')
provides=('bpftrace')
source=("git+https://github.com/iovisor/bpftrace.git")
sha512sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd "$srcdir/$_pkgname"

  mkdir -p build
  cd build
  cmake -DCMAKE_BUILD_TYPE=DEBUG -DCMAKE_INSTALL_PREFIX=/usr ..
  make
}

package() {
  cd "$srcdir/$_pkgname/build"

  make DESTDIR="$pkgdir/" install

}

# vim:set ts=2 sw=2 et:
