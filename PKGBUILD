# Maintainer: Janosch Dobler <janosch.dobler [at} gmx [dot} de>
pkgname=write_stylus
pkgver=203
pkgrel=1
pkgdesc="Write(orignal name) - A word processor for handwriting"
arch=(i686 x86_64)
url="http://www.styluslabs.com/"
license=('unknown')
depends=(qt4 libpng12)
if [[ $CARCH == 'x86_64' ]]; then
  depends=(lib32-qt4 lib32-libpng12)
fi
source=("http://www.styluslabs.com/write/write${pkgver}.tar.gz")
md5sums=('f788cbe34258fbef5c8288acbff635ea')


package() {
  # use write_stylus instead of Writer
  install -Dm755 "$srcdir/Write/Write" "$pkgdir/usr/bin/write_stylus"
}

# vim:set ts=2 sw=2 et:
