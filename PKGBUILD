# Maintainer: Andrew Stubbs <andrew.stubbs@gmail.com>
_npmname=thumbsup
_npmver=2.2.0-alpha.2
pkgname=nodejs-thumbsup # All lowercase
pkgver=${_npmver//-/}
pkgrel=1
pkgdesc="Photo / video gallery generator"
arch=(any)
url="https://github.com/thumbsup/thumbsup#readme"
license=()
depends=('nodejs' 'npm' 'perl-image-exiftool' 'graphicsmagick')
optdepends=('ffmpeg: for video support')
makedepends=('git' 'python' 'python2')
source=(http://registry.npmjs.org/$_npmname/-/$_npmname-$_npmver.tgz)
noextract=($_npmname-$_npmver.tgz)
sha1sums=('0fc226d68d598ba7ca4165b906ebf2f95f47c7c3')

package() {
  cd $srcdir
  local _npmdir="$pkgdir/usr/lib/node_modules/"
  mkdir -p $_npmdir
  cd $_npmdir
  npm install -g --prefix "$pkgdir/usr" $_npmname@$_npmver
}

# vim:set ts=2 sw=2 et:
