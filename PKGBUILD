# Maintainer: Paul Clark <paul500clark at gmail dot com>
# Contributor: David Koenig <koenigdmj@gmail.com>
pkgname=bible-kjv
pkgver=4.32
pkgrel=1
pkgdesc="King James Bible, Concordance, and Command-Line Viewer"
arch=(x86_64)
url="http://www.debian.org/"
license=('GPL')
depends=('readline')
makedepends=('perl')
source=(http://ftp.debian.org/debian/pool/main/b/${pkgname}/${pkgname}_${pkgver}.tar.gz
	makefile.patch)
sha256sums=('2d7dc093467d58daf34a0159a060011eae5c074c18d36ecc8f2ee102f4023b8c'
            '91bb9de66b17d67b72f5de57098928aa897ba62a77b5ddcf2695e74c0a97d572')

package () {
  patch -p1 < makefile.patch

  cd work

  export MAKEFLAGS="-j1"

  # upstream ebuild wants "make all", not just "make"
  make DEST="/usr" DESTLIB="/usr/share/$pkgname" all || return 1
  make DEST="$pkgdir/usr" DESTLIB="$pkgdir/usr/share/$pkgname" install

  # copy for user convenience
  install -D -m644 bible.rawtext \
    $pkgdir/usr/share/$pkgname/kjv-uncompressed.txt

  cd debian
  make randverse
  install randverse $pkgdir/usr/bin
  gzip randverse.1
  install randverse.1.gz $pkgdir/usr/share/man/man1
}

# vim:set ts=2 sw=2 et:
