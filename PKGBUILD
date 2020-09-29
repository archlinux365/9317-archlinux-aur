# Maintainer: Matteo Bonora <bonora.matteo@gmail.com>
pkgname=kmonad-git
pkgver=0.4.0.r37.9a2a8a8
pkgrel=2
pkgdesc="An advanced keyboard manager"
arch=('any')
url="https://github.com/david-janssen/kmonad"
license=('MIT')
groups=()
depends=()
makedepends=('git' 'stack') # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://github.com/david-janssen/kmonad")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${pkgname%-git}"

	# Git, tags available
	printf "%s" "$(git describe --long | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

build() {
	cd "$srcdir/${pkgname%-git}"
	stack build
}

package() {
	cd "$srcdir/${pkgname%-git}"
	stack install --local-bin-path="$pkgdir/usr/bin"
	install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
