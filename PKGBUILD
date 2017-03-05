# Maintainer: Peter Cai <peter at typeblog dot net>

pkgname=yarmd
pkgver=1.0.4
pkgrel=1
pkgdesc='Yet Another Recursive Multi-thread Downloader (A wrapper script around aria2, Nginx autoindex required)'
arch=('any')
url='https://github.com/PeterCxy/yarmd'
license=('WTFPL')
depends=(
  'nodejs'
  'aria2'
)
makedepends=(
  'npm'
)

source=(
  "https://github.com/PeterCxy/yarmd/archive/${pkgver}.tar.gz"
)
md5sums=('36a9a166211acb80d5cce3e7c5436491')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  npm install --developement && npm run build
  rm -rf node_modules
}

package() {
  local _npmdir="$pkgdir/usr/lib/node_modules"
  mkdir -p "$_npmdir"
  cp -R "$srcdir/$pkgname-$pkgver" "$_npmdir/yarmd"
  cd "$_npmdir/yarmd" && npm install --production && rm -rf node_modules/.bin
  local _bindir="$pkgdir/usr/bin"
  mkdir -p "$_bindir"
  ln -s /usr/lib/node_modules/yarmd/bin/yarmd "$_bindir/yarmd"
}

