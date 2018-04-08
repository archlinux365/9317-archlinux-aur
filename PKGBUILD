# $Id$
# Maintainer: Daniel Maslowski <info@orangecms.org>
# Contributor: Alexander F Rødseth <xyproto@archlinux.org>
# Contributor: Angel Velasquez <angvp@archlinux.org>
# Contributor: Douglas Soares de Andrade <douglas@archlinux.org>
# Contributor: d'Ronin <daronin@2600.com>
# Contributor: Hexchain Tong <richard0053@gmail.com>

pkgname=botan-with-compression
_pkgname=botan
pkgver=2.5.0
pkgrel=2
pkgdesc='Crypto library written in C++, built with compression support'
arch=('x86_64')
url='https://botan.randombit.net/'
license=('BSD')
depends=('gcc-libs' 'sh')
makedepends=('python')
conflicts=('botan')
validpgpkeys=('621DAF6411E1851C4CF9A2E16211EBF1EFBADFBC')
source=("https://botan.randombit.net/releases/Botan-${pkgver}.tgz"{,.asc})
sha256sums=('b8a31fe03e7f048a5bd3967ecd04b6a48966215e78792df06e333b0eede4fb1b'
            'SKIP')

build() {
  cd "${_pkgname^}-$pkgver"

  ./configure.py --prefix=/usr --with-bzip --with-zlib
  make
}

package() {
  cd "${_pkgname^}-$pkgver"

  make DESTDIR="$pkgdir" install
  install -Dm644 license.txt "$pkgdir/usr/share/licenses/$_pkgname/LICENSE"
}

# getver: github.com/randombit/botan
# vim: ts=2 sw=2 et:
