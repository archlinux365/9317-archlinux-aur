# Maintainer: Zhanibek Adilbekov <zhanibek.adilbekov@pm.me>
pkgname=slack-cli
pkgver=0.18.0
pkgrel=4
pkgdesc="Powerful Slack CLI via pure bash. Rich messaging, uploads, posts, piping, oh my!"
arch=('any')
url="https://github.com/rockymadden/slack-cli"
license=('MIT')
depends=('bash')
source=(
	"$pkgname-$pkgver.tar.gz::https://github.com/rockymadden/slack-cli/archive/v$pkgver.tar.gz"
	)

package() {
	install -Dm755 "$srcdir/$pkgname-$pkgver/src/slack" "$pkgdir/usr/bin/slack-cli"
}

md5sums=('d7df2879cce8dcd5bbe20aec60f466a4')
