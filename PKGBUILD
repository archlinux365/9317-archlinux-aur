# Maintainer: Varagnac Kim <vacaniat@pm.me>
pkgname=vul-fzf-git
pkgver=r1
pkgrel=1
pkgdesc="Latin Vulgate with fuzzy finder"
arch=(any)
url="https://github.com/varagnac/pure-text-bible"
license=('custom:Public Domain')
depends=('bash' 'fzf')
source=("vul-fzf::https://github.com/varagnac/pure-text-bible/raw/master/vulgate_fzf")
md5sums=('SKIP')

package() {
	cd "$srcdir/"
	install -Dm755 vul-fzf $pkgdir/usr/bin/vul-fzf
}
