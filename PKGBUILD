# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=neovim-headlines
pkgver=2.2.2
pkgrel=1
pkgdesc="Adds highlights for text filetypes"
arch=('any')
url="https://github.com/lukas-reineke/headlines.nvim"
license=('MIT')
groups=('neovim-plugins')
depends=('neovim')
install=headlines.install
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('9c683a3f0d8b4936c725b1945796ab59b4ec4c51d4bbd74540295442161a1284')

package() {
	cd "headlines.nvim-$pkgver"
	find doc lua \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/usr/share/nvim/runtime/{}" \;
	install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
