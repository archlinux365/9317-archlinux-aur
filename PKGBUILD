# Maintainer: Malachi Soord <me@malachisoord.com>
pkgname=psalm
pkgver=3.0.15
pkgrel=1
pkgdesc="Psalm is a static analysis tool for finding errors in PHP applications, built on top of PHP Parser."
url="https://getpsalm.org"
arch=('any')
license=('MIT')
depends=('php')

source=("https://github.com/vimeo/psalm/releases/download/${pkgver}/psalm.phar")
sha512sums=('d4c4b38a20fb9ac9960ef6f0ac0fec8b90e27fa56e608fb60095b71f73788421c8034d03ffaaa9e474e03203de928583f96a68a5a3c3783c831a02cc5b9db6ea')

package() {
  install -D -m 755 ${srcdir}/psalm.phar ${pkgdir}/usr/share/webapps/bin/${pkgname}.phar
  install -d ${pkgdir}/usr/bin
  ln -s /usr/share/webapps/bin/${pkgname}.phar ${pkgdir}/usr/bin/${pkgname}
}
