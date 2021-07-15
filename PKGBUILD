
# Maintainer: Andrea Feletto <andrea@andreafeletto.com>

pkgname=telescope-bin
_pkgname=${pkgname%-*}
pkgver=0.3
pkgrel=1
pkgdesc='w3m-like browser for Gemini.'
arch=('x86_64')
url='https://telescope.omarpolo.com'
license=('ISC')
provides=('telescope')
conflicts=('telescope' 'telescope-git')
depends=('libretls')
source=(
	"$pkgname-$pkgver::https://github.com/omar-polo/$_pkgname/releases/download/$pkgver/$_pkgname.linux.amd64"
	"https://raw.githubusercontent.com/omar-polo/$_pkgname/main/telescope.1"
	"https://raw.githubusercontent.com/omar-polo/$_pkgname/main/LICENSE"
)
sha256sums=(
	'6e07c62db694791cb4c7ae8c159ea8ef169ab5f1b83c62ae3a8ac633cf6a648c'
	'd7906b357c7bf32161b643f2f3d150b37b59f4ad2c7cfac03015add94a6971f6'
	'd74e569d89bef32bc5b9b297e581022674b62e4f9317fa72b971947f9e7ecd67'
)

package() {
	cd "$srcdir"
	install -Dm755 "$pkgname-$pkgver" "$pkgdir/usr/bin/$_pkgname"
	install -Dm644 telescope.1 -t "$pkgdir/usr/share/man/man1"
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$_pkgname"
}
