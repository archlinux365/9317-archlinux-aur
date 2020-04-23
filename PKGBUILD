# Mantainer: Pellegrino Prevete <cGVsbGVncmlub3ByZXZldGVAZ21haWwuY29tCg== | base -d>

pkgname=mkbootfs
pkgver="4.4.4_r2.0.1"
pkgrel=1
pkgdesc='A tool to build android boot images.'
arch=('i686' 'x86_64')
url='https://android.googlesource.com/platform/system/core'
license=('GPL')
depends=('repo')
makedepends=()
source=('git+https://android.googlesource.com/platform/system/core#tag=android-4.4.4_r2.0.1')
sha256sums=('SKIP')

build() {
  cd core/libmincrypt
  gcc -c *.c -I../include
  ar rcs libmincrypt.a *.o
  cd ../cpio/
  gcc mkbootfs.c -o mkbootfs -I../include
}

package() {
  install -Dm644 "../src/core/cpio/mkbootfs" -t "$pkgdir/usr/bin/$pkgname"
}

# vim: ts=2 sw=2 et:
