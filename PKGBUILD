# Maintainer: Malachi Soord <me@malachisoord.com>
pkgname=psalm
pkgver=3.5.3
pkgrel=1
pkgdesc="Psalm is a static analysis tool for finding errors in PHP applications, built on top of PHP Parser."
url="https://getpsalm.org"
arch=('any')
license=('MIT')
depends=('php')

source=("https://github.com/vimeo/psalm/releases/download/${pkgver}/psalm.phar")
sha512sums=('69b7c8dbf6632f5384de726209542422f7e253a48a8607f9558e65254ed0a223a7a3c11800c791a8a8b9970574baa9ed84c43d66861204100a484a6385d26533')

package() {
  install -D -m 755 ${srcdir}/psalm.phar ${pkgdir}/usr/share/webapps/bin/${pkgname}.phar
  install -d ${pkgdir}/usr/bin
  ln -s /usr/share/webapps/bin/${pkgname}.phar ${pkgdir}/usr/bin/${pkgname}
}
