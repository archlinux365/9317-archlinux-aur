# Contributor: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Anatol Pomozov anatol dot pomozov at g mail
# Contributor: Leslie P. Polzer <polzer@gnu.org>
# Contributor: bender02 at archlinux dot us
# Contributor: Felix Saparelli <me@passcod.name>

pkgname=mongoose
pkgver=7.1
pkgrel=1
pkgdesc="Easy to use, powerful, embeddable web server"
arch=('i686' 'x86_64')
license=('GPL2')
depends=('openssl')
url="https://github.com/cesanta/mongoose"
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/cesanta/mongoose/archive/${pkgver}.tar.gz")
sha256sums=('f099bf7223c527e1a0b7fc8888136a3992e8b5c7123839639213b9483bb4f95b')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  # hopefully upstream will provdide an official Makefile
  # https://github.com/cesanta/mongoose/issues/326
  gcc -shared -fPIC -DMG_ENABLE_SSL $CFLAGS $LDFLAGS mongoose.c -o libmongoose.so -lssl
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm755 libmongoose.so "${pkgdir}/usr/lib/libmongoose.so"
  install -Dm644 mongoose.h "${pkgdir}/usr/include/mongoose.h"
}
