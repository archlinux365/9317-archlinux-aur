# Maintainer: Daniel Menelkir <menelkir at itroll dot org>
pkgname=g15composer-openrc
pkgver=20211101
pkgrel=1
pkgdesc="g15composer init script for OpenRC"
arch=('any')
url="https://gitlab.com/menelkir/g15composer"
license=('GPL2')
depends=('g15composer' 'g15daemon-openrc')
_filename='g15composer.initd'
source=("https://gitlab.com/menelkir/g15composer/-/raw/master/contrib/init/g15composer.initd")
sha512sums=('1e63a8ec482874df65a7685b0eb671be264b1228fdf53a6cf6f3efcc18b7b0a7d511572f99318013bb86b099e66827e44bcb060ba1d13b2af4699e4a9f6b02eb')

package() {
    install -dm755 "$pkgdir/etc/init.d"
    install -Dm755 "$srcdir/g15composer.initd" "$pkgdir/etc/init.d/g15composer"
}
