# Maintainer: fordprefect <fordprefect@dukun.de>
pkgname=contao
pkgver=4.4.0
pkgrel=1
pkgdesc="small yet powerful Content Management System (CMS) based on php"
url="https://contao.org"
arch=('any')
license=('LGPL')
depends=('php' 'php-gd' 'mysql')
optdepends=('php-mcrypt: data encryption')
install=${pkgname}.install
source=("contao-${pkgver}.tar::https://download.contao.org/$pkgver/tar"
        "${pkgname}.install")
md5sums=('e3929412974300b50a9ccd0160117ca8'
         'a79edf316b0d4e0862afdbca7dbcf23e')
 
package() {
    install -d "${pkgdir}/usr/share/webapps/contao"
    cp -R "$srcdir/contao-${pkgver}/"* "${pkgdir}/usr/share/webapps/contao"
}
