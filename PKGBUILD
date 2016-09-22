# Maintainer: John Jenkins <twodopeshaggy@gmail.com>

pkgname=flif
_pkgname=FLIF
pkgver=0.2
pkgrel=0
pkgdesc="Free Lossless Image Format"
arch=("i686" "x86_64")
url="https://github.com/FLIF-hub/FLIF"
license=('GPL3')
conflicts=('flif-git')
depends=('zlib' 'libpng')
makedepends=('git')
source=("https://github.com/FLIF-hub/FLIF/archive/v${pkgver//_/-}.tar.gz")
md5sums=('7ab5825cf9051690ed88e274a6c5ec6b')

build() {
  cd "$srcdir/${_pkgname}-${pkgver//_/-}"
  make all
}

package() {
  cd "$srcdir/${_pkgname}-${pkgver//_/-}"
  install -dm755 "${pkgdir}/usr/bin"
  install -dm755 "${pkgdir}/usr/lib/"
  install -dm755 "${pkgdir}/usr/share/man/man1/"
  install -dm755 "${pkgdir}/usr/include/${_pkgname}"
  install -m755 src/flif src/viewflif "${pkgdir}/usr/bin"
  install -m755 src/libflif.so "${pkgdir}/usr/lib/"
  install -m 644 src/library/*.h "${pkgdir}/usr/include/${_pkgname}"
  install -m 644 doc/flif.1 "${pkgdir}/usr/share/man/man1"
  install -m 755 tools/gif2flif "${pkgdir}/usr/bin"
  install -m 755 tools/apng2flif "${pkgdir}/usr/bin"
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${_pkgname}/LICENSE"
}
