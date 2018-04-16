# Maintainer: Dylan <dylan@psilly.com>

pkgname='flickmagnet'
pkgver='0.0.7'
pkgrel=1
pkgdesc='HTTP server for streaming public domain videos from torrent files to your web browser.'
arch=('any')
url='https://github.com/acerix/flickmagnet'
license=('MIT')

depends=(
  'btfs'
  'python-xdg'
  'python-daemonocle'
  'python-toml'
  'python-cherrypy'
  'python-mako'
)

install=flickmagnet.install
source=(
  "$url/archive/$pkgver.tar.gz"
  flickmagnet.install
)
sha256sums=(
  'c1329479912b862ad8198d9e2ded6a476d4cc18df29c8c94c87e48ff160dc0e7'
  '0a8d9d8e940c280c8038f4fdb35a036fd89e658ff26d3e1ce68d8787c1ce2970'
)
build() {
  cd "$pkgname-$pkgver"
  python setup.py build
}

package() {
  cd "$pkgname-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=2
  install -Dm755 "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
  install -dm700 "$pkgdir/srv/$pkgname"
  install -Dm644 "$pkgname/examples/$pkgname.service" "$pkgdir/usr/lib/systemd/system/$pkgname.service"
}

