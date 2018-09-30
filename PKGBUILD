# Maintainer: Simon Legner <Simon.Legner@gmail.com>
pkgname=lebab
pkgver=3.0.3
pkgrel=1
pkgdesc="Turn your JavaScript ES5 code into readable ES6/ES7"
arch=(any)
url="https://github.com/mohebifar/lebab"
license=('MIT')
depends=('nodejs')
makedepends=('npm')
source=(http://registry.npmjs.org/$pkgname/-/$pkgname-$pkgver.tgz)
noextract=($pkgname-$pkgver.tgz)

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $pkgname@$pkgver
  install -Dm755 "$_npmdir/$pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  find "${pkgdir}"/usr -name package.json -exec sed -i '/"_where"/d' '{}' '+'
  find "${pkgdir}"/usr -type d -exec chmod 755 {} +
}

# vim:set ts=2 sw=2 et:
sha256sums=('9b57afd713ef9a657d418c5e9e3b8c1ddd68593bb4d1de5636f0a7c794d82529')
