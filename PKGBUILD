# Maintainer: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: Paul Préfontaine <paul+archlinuxaur@prefontaine.name>

pkgname=h2o
pkgver=1.4.3
pkgrel=1
pkgdesc="Optimized HTTP server with support for HTTP/1.x and HTTP/2"
arch=('i686' 'x86_64')
depends=('libuv' 'libyaml' 'wslay')
makedepends=('cmake' 'make')
url="https://github.com/h2o/h2o"
license=('MIT')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/h2o/$pkgname/tar.gz/v$pkgver
        h2o.service)
sha256sums=('b41cdbadd2a345bc4a91295fd6faf39923c83beb00ad795f87fde69e2ba66f43'
            'dadc4d08e8149ac0f9f2156251a639380795d1fed2068958b487da88161d4bb7')
backup=('etc/h2o.conf')
provides=('h2o' 'libh2o')
conflicts=('libh2o')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Building...'
  cmake -DCMAKE_INSTALL_PREFIX=/usr -DWITH_BUNDLED_SSL=on .
  make
  make libh2o
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  msg2 'Installing documentation...'
  install -Dm 644 README.md "$pkgdir/usr/share/doc/$pkgname/README.md"

  msg2 'Installing systemd service...'
  install -Dm 644 "$srcdir/h2o.service" "$pkgdir/usr/lib/systemd/system/h2o.service"

  msg2 'Installing conf file...'
  install -Dm 644 examples/h2o/h2o.conf "$pkgdir/etc/h2o.conf"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install
}
