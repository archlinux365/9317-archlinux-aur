# Maintainer: Brad Erhart <brae dot 04 plus aur at gmail dot com>

pkgname=zapier-platform-cli
_pkgname="${pkgname%-platform-cli}"
pkgver=9.1.0
pkgrel=1
pkgdesc='Gateway to creating custom applications on the Zapier platform'
arch=('x86_64')
url='https://platform.zapier.com/cli'
license=('UNLICENSED')
depends=('nodejs')
makedepends=(
	'npm'
	'jq'
)
optdepends=('bash-completion: for tab completion')
provides=("$_pkgname")
source=("https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('24d7462a7a792072fe81416509896482a2c4c4062353d1ff6de2397cd4c9d2d0')

package() {
	npm install --cache "$srcdir"/npm-cache -g --user root --prefix "$pkgdir"/usr "$srcdir"/$noextract

	# Non-deterministic race in npm gives 777 permissions to random directories.
	# See https://github.com/npm/npm/issues/9359 for details.
	find "$pkgdir"/usr -type d -exec chmod 755 {} +

	# Remove references to $srcdir/$pkgdir
	find "$pkgdir" -name package.json -print0 | xargs -r -0 sed -i '/_where/d'

	# npm gives ownership of ALL FILES to build user 
	# https://bugs.archlinux.org/task/63396
	chown -R root:root "$pkgdir"


	# Remove references to $srcdir
	local tmppackage=`mktemp`
	local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"

	# Please file an issue to enable specifying completion path
	"$pkgdir"/usr/bin/zapier autocomplete --refresh-cache

	install -Dm 644 ~/.cache/"$pkgname"/autocomplete/functions/bash/"$_pkgname".bash "$pkgdir"/usr/share/bash-completion/completions/"$_pkgname"
	install -Dm 644 ~/.cache/"$pkgname"/autocomplete/functions/zsh/_"$_pkgname" "$pkgdir"/usr/share/zsh/site-functions/_"$_pkgname"

	# Prefer not to do this, but necessary due to non-standard completion implementation
	rm -r ~/.cache/"$pkgname"
}
