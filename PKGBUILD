# Maintainer: Matt Harrison <matt@harrison.us.com>
# Contributor: David Runge <dvzrv@archlinux.org>

_name=igbinary
pkgname=php73-igbinary
pkgver=3.1.2
pkgrel=1
pkgdesc="A drop in replacement for the standard php serializer (PHP 7.3)"
arch=('x86_64')
url="https://github.com/igbinary/igbinary"
license=('BSD')
depends=('glibc' 'php73')
backup=("etc/php73/conf.d/${_name}.ini")
source=("$pkgname-$pkgver.tar.gz::https://github.com/${_name}/${_name}/archive/${pkgver}.tar.gz")
sha512sums=('617442e1fc437d12666b1172ca2ae34a4d7377bff8b1d00194a159260213179e65e7e2f755a1583d2b299e3b0e90374b9021cd61ec7ac67e64018153e77af8c5')

prepare() {
  mv -v "${_name}-${pkgver}" "$pkgname-$pkgver"
  cd "$pkgname-$pkgver"
  # disable the extension by default
  sed 's/extension/;extension/g' -i "${_name}.php.ini"
  phpize73
}

build() {
  cd "$pkgname-$pkgver"
  ./configure --prefix=/usr \
              --enable-igbinary
  make
}

check() {
  cd "$pkgname-$pkgver"
  NO_INTERACTION=1 make -k test
}

package() {
  cd "$pkgname-$pkgver"
  make INSTALL_ROOT="$pkgdir/" install
  install -vDm 644 "${_name}.php.ini" "${pkgdir}/etc/php73/conf.d/${_name}.ini"
  install -vDm 644 COPYING -t "${pkgdir}/usr/share/licenses/${pkgname}"
  install -vDm 644 {CREDITS,NEWS,README.md} \
    -t "${pkgdir}/usr/share/doc/${pkgname}"
}
