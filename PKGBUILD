_npmname=hexo-cli
_npmver=1.0.2

pkgname=nodejs-hexo-cli
pkgver=1.0.2
pkgrel=1
pkgdesc="Command line interface for Hexo."
arch=('any')
url="https://hexo.io"
license=('MIT')
depends=('nodejs', 'npm')
conflicts=('nodejs-hexo')
source=(https://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
sha1sums=('8ebcae88cac29254f1e9ac07f8a9f07399a8a1ae')

package() {
  cd "$srcdir"
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p "$_npmdir"
  cd "$_npmdir"
  npm install --user root -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}
