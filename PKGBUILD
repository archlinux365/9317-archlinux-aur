# Maintainer of this PKGBUILD file: Martino Pilia <martino.pilia@gmail.com>
pkgname=vsce
pkgver=2.9.3
pkgrel=1
pkgdesc="Visual Studio Code extension manager"
arch=('any')
url="https://github.com/Microsoft/vscode-vsce"
license=('MIT')
depends=('nodejs')
makedepends=(
	'npm'
	'typescript'
    'yarn'
)
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
sha256sums=('c2579fc5962d6ecd646d883e22b4e712abb1c625ca0decab3bec52f1cedb0c0f')

package() {
	npm install -g \
		--prefix "$pkgdir"/usr \
		"$srcdir"/$pkgname-$pkgver.tgz

	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/cli/issues/1103 for details.
	find "${pkgdir}/usr" -type d -exec chmod 755 {} +

	# Fix ownership
	# npm gives ownership of ALL FILES to build user
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "${pkgdir}"

	install -D -m644 \
		"${srcdir}/package/LICENSE" \
		"${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
