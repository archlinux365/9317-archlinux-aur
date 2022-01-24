# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=neovim-lspconfig
pkgver=0.1.2
pkgrel=1
pkgdesc='Quickstart configurations for the Neovim LSP client'
arch=('any')
url=https://github.com/neovim/nvim-lspconfig
license=('Apache')
groups=('neovim-plugins')
depends=('neovim')
install=lspconfig.install
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('d9aa89b890a441338b974f46640a54b42ab8c8b959687e6f052140cfa88b3af3')

PURGE_TARGETS=('tags')

package() {
	cd "nvim-lspconfig-$pkgver"
	find lua plugin \
		-type f \
		-exec install -Dm644 '{}' "$pkgdir/usr/share/nvim/runtime/{}" \;
	install -Dm644 doc/lspconfig.txt -t "$pkgdir/usr/share/nvim/runtime/doc/"
	install -Dm644 README.md doc/server_configurations.md \
		-t "$pkgdir/usr/share/doc/$pkgname/"
}
