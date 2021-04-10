# Maintainer: Benedikt Rips <benedikt.rips@gmail.com>

pkgname=goto
pkgver=2.0.0
pkgrel=1
pkgdesc="Alias and navigate to directories with tab completion"
arch=('any')
url="https://github.com/iridakos/goto"
license=('MIT')
source=("$pkgname-$pkgver.tar.gz::https://github.com/iridakos/$pkgname/archive/v$pkgver.tar.gz")
sha256sums=('460fe3994455501b50b2f771f999ace77ade295122e90e959084047dbfb1f0dc')

package() {
	cd "$pkgname-$pkgver"
    install -Dm644 -t "$pkgdir/usr/share/$pkgname" "$pkgname.sh" CHANGELOG.md README.md
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
