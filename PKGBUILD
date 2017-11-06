# Mantainer: Bruno Galeotti <bgaleotti@gmail.com>

pkgname=php-ds
pkgver=1.2.3
pkgrel=1
pkgdesc='Data structures for PHP 7.'
url='https://github.com/php-ds/extension'
license=('MIT')
arch=('any')
depends=('php')
conflicts=('php-ds-git')
backup=('etc/php/conf.d/ds.ini')
source=(https://github.com/php-ds/extension/archive/v$pkgver.tar.gz
        ds.ini)
md5sums=('79144786738f536742b539f8c43c6662'
         'a50c990f8285a21242caa1a955a35707')

build() {
  cd $srcdir/ds-$pkgver
  phpize
  ./configure
  make
}

package() {
  install -Dm744 $srcdir/ds-$pkgver/modules/ds.so $pkgdir/usr/lib/php/modules/ds.so
  install -Dm644 ds.ini $pkgdir/etc/php/conf.d/ds.ini
}

# vim:set ts=2 sw=2 et:
