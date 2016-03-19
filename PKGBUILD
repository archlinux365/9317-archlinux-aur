# Maintainer: gandalf3 <zzyxpaw at gmail dot com>

pkgname=pixelscale-git
_pkgname=libxbr-standalone
pkgver=4.3835e97
pkgrel=2
pkgdesc="Standalone xBR/HQx pixel art scaling library and standalone executable (includes hqx compatibility script, pixelscale binary and xbr script)"
url="https://github.com/Treeki/libxbr-standalone"
arch=('x86_64' 'i686')
license=('LGPL2.1')
depends=('libpng' 'imagemagick' )
makedepends=()
conflicts=('hqx')
provides=('hqx' 'xbr')
source=('hqx.sh' 'xbr.sh' 'git://github.com/Treeki/libxbr-standalone.git')
md5sums=('6c9338b1399d1732f149d9e48e85554e'
         '0feb03f6f73e34af84eed887a9619ecd'
         'SKIP')

build() {
  cd "${srcdir}/$_pkgname"
  msg2 "Compiling HQ2x library"
  cc -Wall -Wno-parentheses -fpic -c hq2x.c -o hq2x.o
  cc -Wall -Wno-parentheses -shared hq2x.o -o libhq2x.so
  msg2 "Compiling HQ3x library"
  cc -Wall -Wno-parentheses -fpic -c hq3x.c -o hq3x.o
  cc -Wall -Wno-parentheses -shared hq3x.o -o libhq3x.so
  msg2 "Compiling HQ4x library"
  cc -Wall -Wno-parentheses -fpic -c hq4x.c -o hq4x.o
  cc -Wall -Wno-parentheses -shared hq4x.o -o libhq4x.so
  msg2 "Compiling xBR library"
  cc -Wall -Wno-parentheses -fpic -c xbr.c -o xbr.o
  cc -Wall -Wno-parentheses -shared xbr.o -o libxbr.so
  msg2 "Compiling binary"
  cc -Wall -Wno-parentheses -L. -lhq2x -lhq3x -lhq4x -lxbr -lpng test_app.c -o pixelscale
}
  
pkgver () {
  cd "${srcdir}/$_pkgname"
  echo "$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/$_pkgname"

  install -D -m755 "../../hqx.sh" "${pkgdir}/usr/bin/hqx"
  install -D -m755 "../../xbr.sh" "${pkgdir}/usr/bin/xbr"
  install -D -m755 "libhq2x.so" "${pkgdir}/usr/lib/libhq2x.so"
  install -D -m755 "libhq3x.so" "${pkgdir}/usr/lib/libhq3x.so"
  install -D -m755 "libhq4x.so" "${pkgdir}/usr/lib/libhq4x.so"
  install -D -m755 "libxbr.so" "${pkgdir}/usr/lib/libxbr.so"
  install -D -m755 "pixelscale" "${pkgdir}/usr/bin/pixelscale"
}
