# Maintainer: Štěpán Němec <stepnem@gmail.com>

pkgname=aspell-vi
pkgver=0.01.1
pkgrel=1
pkgdesc="Vietnamese dictionary for aspell"
arch=('x86_64')
url="http://aspell.net/"
license=('custom')
depends=('aspell')
source=("ftp://ftp.gnu.org/gnu/aspell/dict/vi/aspell6-vi-$pkgver-1.tar.bz2")
sha512sums=('d6b0a85ea3edf3193327f6df1b9c24947663fe711f060f10122e2c60aea2717d70277fd516fa685d9886c725baeebfc72d3f33e240ee8d182be669da716bb5c5')

build() {
  cd "$srcdir/aspell6-vi-$pkgver-1"
  ./configure
  make
}

package() {
  cd "$srcdir/aspell6-vi-$pkgver-1"
  make DESTDIR="$pkgdir" install

  install -D -m644 Copyright "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
