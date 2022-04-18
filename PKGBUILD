# Maintainer:  Emanuel Schmidt <emanuel.schmidt@gmail.com>

pkgname=xdp-tools
pkgver=1.2.3
pkgrel=3
pkgdesc='Utilities for use with XDP and libxdp'
depends=('libelf' 'linux-api-headers' 'libbpf' 'libpcap')
url='https://github.com/xdp-project/xdp-tools'
license=('custom')
makedepends=('gcc' 'make' 'clang' 'm4' 'pkgconfig' 'libpcap' 'zlib')
arch=('x86_64')
source=("https://github.com/xdp-project/xdp-tools/archive/refs/tags/v${pkgver}.tar.gz")
sha512sums=('588cda7010592f34ac600993ea528b76be4a8786c1b4e4599c92c5683a80848a11ae90db825f56b67adec60bd8c684bb4ced21dc1bc1b750cbd5d0704d67390d')
b2sums=('26c1bfd5b6c3457794801db64d020b8d6eb254661a0a44fa89dde6a1ff7c04dec1207d38a755029c8caaa955cabec70f196e37257f337cf484b8e3525261119e')

prepare () {
  cd "${srcdir}/${pkgname}-${pkgver}"
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export PRODUCTION=1
  export DYNAMIC_LIBXDP=1
  export FORCE_SYSTEM_LIBBPF=1
  export PREFIX="/usr"
  ./configure  ## `--prefix` doesn't work yet (https://github.com/xdp-project/xdp-tools/issues/133)
  make V=1
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export DESTDIR="${pkgdir}"
  export SBINDIR="/usr/bin"
  export PREFIX="/usr"
  make install V=1
  pushd "${pkgdir}/usr"
  rm -r share/xdp-tools ## Do not package examples or tests (https://github.com/xdp-project/xdp-tools/issues/134)
  popd
}
