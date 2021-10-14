# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=neovim-cmp-git
pkgver=r252.f5393d5
pkgrel=1
pkgdesc="Autocompletion plugin for Neovim"
arch=('any')
url="https://github.com/hrsh7th/nvim-cmp"
license=('MIT')
groups=('neovim-plugins')
depends=('neovim>=0.5.0')
optdepends=(
	'neovim-cmp-nvim-lsp: source for Neovim builtin LSP client'
	'neovim-cmp-buffer: buffer autocompletion'
	'neovim-cmp-path: path autocompletion'
	'neovim-cmp-emoji: emoji autocompletion'
	'neovim-cmp-latex-symbols: LaTeX symbol autocompletion'
	'neovim-cmp-omni: omnifunc autocompletion'
	'neovim-cmp-vsnip: vsnip autocompletion')
makedepends=('git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
install=cmp.install
source=("$pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$pkgname"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$pkgname"
	find autoload lua plugin -type f -exec install -Dm 644 '{}' "$pkgdir/usr/share/nvim/runtime/pack/dist/start/$pkgname/{}" \;
	install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname/"
	install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname/"
}
