# Maintainer: Zhanibek Adilbekov <zhanibek.adilbekov@pm.me>
pkgname=firefox-tridactyl-native
pkgver=1.20.2
pkgrel=1
pkgdesc="Tridactyl native messaging host application for Firefox"
arch=('any')
url=https://github.com/tridactyl/tridactyl
license=('Apache')
depends=('python')
source=("$pkgname-$pkgver.tar.gz::https://github.com/tridactyl/tridactyl/archive/$pkgver.tar.gz")
md5sums=('9d0c4f32ee573a22d322f4fd8c3bb3bd')

build() {
    sed -i -e "s-REPLACE_ME_WITH_SED-/usr/lib/tridactyl/native_main.py-" \
        "$srcdir/tridactyl-$pkgver/native/tridactyl.json"
}

package() {
    install -d "$pkgdir/usr/lib/tridactyl"
    install -m 0755 "$srcdir/tridactyl-$pkgver/native/native_main.py" \
        "$pkgdir/usr/lib/tridactyl/native_main.py"
    install -d "$pkgdir/usr/lib/mozilla/native-messaging-hosts"
    install -m 0644 "$srcdir/tridactyl-$pkgver/native/tridactyl.json" \
        "$pkgdir/usr/lib/mozilla/native-messaging-hosts/tridactyl.json"
}
