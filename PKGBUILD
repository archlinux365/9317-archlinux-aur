# Maintainer: François Guerraz <kubrick@fgv6.net>
pkgname=snaphu
pkgver=1.4.2
pkgrel=2
pkgdesc="Statistical-Cost, Network-Flow Algorithm for Phase Unwrapping"
arch=('x86_64')
url="https://web.stanford.edu/group/radar/softwareandlinks/sw/snaphu/"
license=('custom')
groups=()
depends=( )
makedepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=( "https://web.stanford.edu/group/radar/softwareandlinks/sw/snaphu/$pkgname-v$pkgver.tar.gz" 
         'fix-64-bit-segfault.patch' )
noextract=( )
sha256sums=( '30e7be7889fc2d2ce8606de01a29f2d908de5e8eb8e32619cf6d2deff9186eb7'
             '75b163cb6f2ba5de3a240d5d853c25d92431b9591de2ab9eedb81c0337a2704b' )

prepare() {
  cd ${pkgname}-v${pkgver}
  patch -p1 < ${srcdir}/fix-64-bit-segfault.patch
}

build() {
  cd ${pkgname}-v${pkgver}/src/
  make
}

package() {
  cd ${pkgname}-v${pkgver}/src/
  mkdir -p ${pkgdir}/usr/bin/ ${pkgdir}/usr/man/man1
  make INSTALLDIR=${pkgdir}/usr/bin/ MANDIR=${pkgdir}/usr/man/ install
  install -D -t ${pkgdir}/usr/share/licenses/snaphu/ ${srcdir}/${pkgname}-v${pkgver}/README
}

