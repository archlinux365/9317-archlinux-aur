# Maintainer: Egor Tensin <Egor.Tensin@gmail.com>
pkgname=config-links
pkgver=0.2
pkgrel=1
pkgdesc='Config file sharing'
arch=(any)
url='https://github.com/egor-tensin/config-links'
license=(MIT)
depends=(bash)
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=(SKIP)

package() {
    cd "$srcdir"

    install -D -m 0644 -t "$pkgdir/usr/share/doc/config-links" "../README.Arch"

    cd "$pkgname-$pkgver"

    install -D -m 0644 -t "$pkgdir/usr/share/config-links" LICENSE.txt

    install -D -m 0644 -t "$pkgdir/usr/share/doc/config-links" README.md

    install -D -m 0755 -t "$pkgdir/usr/lib/config-links" update.sh
    install -D -m 0755 -t "$pkgdir/usr/lib/config-links" unlink.sh
    install -D -m 0644 -t "$pkgdir/usr/lib/config-links/src" src/common.sh
    install -D -m 0644 -t "$pkgdir/usr/lib/config-links/src" src/db.sh
    install -D -m 0644 -t "$pkgdir/usr/lib/config-links/src" src/os.sh
    install -D -m 0644 -t "$pkgdir/usr/lib/config-links/src" src/path.sh
    install -D -m 0644 -t "$pkgdir/usr/lib/config-links/src" src/vars.sh

    install -d "$pkgdir/usr/bin"
    ln -s -- /usr/lib/config-links/update.sh "$pkgdir/usr/bin/links-update"
    ln -s -- /usr/lib/config-links/unlink.sh "$pkgdir/usr/bin/links-remove"
}
