# Maintainer: ZenQy <zenqy.qin@gmail.com>

pkgname=i3-get-window-criteria
pkgver=git
pkgrel=2
pkgdesc="Get criteria for use with i3 config commands"
arch=('any')
url="https://gist.github.com/ZenQy/565458820faae65bb0d6"
license=('custom')
depends=('xorg-xwininfo' 'xorg-xprop')

source=("${pkgname}::git+https://gist.github.com/565458820faae65bb0d6.git")

md5sums=(SKIP)

package() {
	cd "$srcdir/$pkgname"
	install -Dm755 i3-get-window-criteria.sh "$pkgdir/usr/bin/$pkgname"
}
