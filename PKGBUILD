# Maintainer: Nek.12 <vaizin.nikita@gmail.com>
pkgname='notion-enhancer'
pkgver=0.8.0
pkgrel=1
pkgdesc="An enhancer / customiser for the Notion productivity software"
arch=('any')
url="https://github.com/dragonwocky/notion-enhancer"
license=(MIT)
groups=()
depends=('notion-app>=1:2.0.7-3.2'
         'nodejs>=14.8.0-1'
         'asar>=3.0.3-1')
makedepends=('npm' 'jq')
provides=()
conflicts=("${pkgname%-git}")
replaces=()
backup=()
options=()
install=
source=("https://registry.npmjs.org/notion-enhancer/-/$pkgname-$pkgver.tgz")
noextract=("${pkgname}-${pkgver}.tgz")
md5sums=('SKIP')
package() {
    npm install -g --user root --prefix "${pkgdir}/usr" "${srcdir}/${pkgname}-${pkgver}.tgz"
    find "${pkgdir}/usr" -type d -exec chmod 755 {} +
    chown -R root:root "${pkgdir}"

    # Remove references to $pkgdir
	find "$pkgdir" -type f -name package.json -print0 | xargs -0 sed -i "/_where/d"

	# Remove references to $srcdir
	local tmppackage="$(mktemp)"
	local pkgjson="$pkgdir/usr/lib/node_modules/$pkgname/package.json"
	jq '.|=with_entries(select(.key|test("_.+")|not))' "$pkgjson" > "$tmppackage"
	mv "$tmppackage" "$pkgjson"
	chmod 644 "$pkgjson"
}
