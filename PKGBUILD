# Maintainer: Mario Finelli <mario at finel dot li>
# Contributor: Sabart Otto <seberm at gmail dot com>

pkgname=adminer
pkgver=4.7.3
pkgrel=1
pkgdesc="A full-featured MySQL management tool written in PHP."
arch=('any')
license=('Apache' 'GPL')
depends=('php')
optdepends=('mysql' 'apache' 'postgresql' 'sqlite')
url="https://www.adminer.org"
install=${pkgname}.install
source=("${pkgname}.install"
        "httpd-${pkgname}.conf"
        "https://www.adminer.org/static/download/${pkgver}/${pkgname}-${pkgver}.php") 
sha256sums=('a9b786e220c0deabcb96849ffa511f1ef0b130836f978a8504e1ffbc9c723e51'
            '176b392620e8d972188685e0e202cba853a2ff5e3d0c90fef130ef1c8c2491c2'
            '1ebfd69d1ae128cb85a05fbb4ff81af3253821a320e5a65a8a95fd31b14e899e')

package() {
    cd "$srcdir"
    install -Dm0644 "${pkgname}-${pkgver}.php" \
        "$pkgdir/usr/share/webapps/$pkgname/index.php"

    # TODO: I don't really like this. What if someone is using nginx, for
    # example? Or doesn't care to have any configuration installed at all.
    # Consider removing.
    install -Dm0644 "httpd-${pkgname}.conf" \
        "$pkgdir/etc/httpd/conf/extra/httpd-${pkgname}.conf"
}
