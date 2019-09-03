# Maintainer: Viktor Drobot (aka dviktor) linux776 [at] gmail [dot] com
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>

pkgname=man-pages-ru
pkgver=5.00_2386_2386_20190811
pkgrel=1
pkgdesc="Russian Linux man pages"
arch=(any)
url="https://sourceforge.net/projects/man-pages-ru/"
depends=(man)
license=('FDL')
source=(http://downloads.sourceforge.net/project/man-pages-ru/man-pages-ru_${pkgver//_/-}.tar.bz2)
sha256sums=('df9c177cfb8acb8174c23bc212c50e11cbc699c835b48fa8fe1abc9d2b83480d')

package() {
  cd "$srcdir"/man-pages-ru_${pkgver//_/-}
  mkdir -p "$pkgdir"/usr/share/man/ru
  mv man* "$pkgdir"/usr/share/man/ru/
  cd "$pkgdir"/usr/share/man/ru
  # this is included in shadow
  rm -f man5/passwd.5*
  rm -f man3/getspnam.3*
  find . -type d -exec chmod 0755 {} \;
  find . -type f -exec chmod 0644 {} \;
}
