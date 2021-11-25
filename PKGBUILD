# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Simon Legner <Simon.Legner@gmail.com>

pkgname=wikibase-cli
pkgver=15.15.5
pkgrel=1
pkgdesc="The command-line interface to Wikibase (Wikidata)"
arch=('any')
url="https://github.com/maxlath/wikibase-cli"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
replaces=('nodejs-wikibase-cli')
source=("$pkgname-$pkgver.tgz::https://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz")
noextract=("$pkgname-$pkgver.tgz")
sha256sums=('262b1e1c63b5c632206258fcbdf36de9852ba0497ac31b067cf3e9fdb2c53a23')

package() {
  export NODE_ENV=production
  npm install -g \
    --cache "$srcdir/npm-cache" \
    --prefix "$pkgdir/usr" \
    --build-from-source \
    "$pkgname-$pkgver.tgz"
  chown -R root:root "$pkgdir/"
}

# vim:set ts=2 sw=2 et:
