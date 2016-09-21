
pkgname=nodejs-configurable-http-proxy
pkgver=1.3.0
pkgrel=2
pkgdesc="node-http-proxy plus a REST API"
url="https://github.com/jupyter/configurable-http-proxy"
arch=(any)
license=('BSD')
makedepends=('npm')
depends=('nodejs')
source=("https://github.com/jupyter/configurable-http-proxy/archive/${pkgver}.tar.gz")
sha256sums=('4c59c33a0db7b353d626691bd70763cdb7c5a97850cb3f0f01eb7111867fd9e3')
_npmname=configurable-http-proxy

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$pkgver

  rm -rf "$pkgdir/usr/etc"
  chown -R root:root "$pkgdir/usr"
  cd "$srcdir/$_npmname-$pkgver"
  install -Dm644 COPYING.md "${pkgdir}"/usr/share/licenses/$pkgname/COPYING.md
}

