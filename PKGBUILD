# Maintainer: metamer <metamer at openmailbox dot org>
# Contributor: Michał Walczak <michalwalczak at michalwalczak dot eu>

pkgname=sil
pkgver=1.3.0
pkgrel=1
pkgdesc="A game of adventure set in the first age of Middle-earth, when the world still rang with elven song and gleamed with dwarven mail. Walk the dark halls of Angband. Slay creatures black and fell. Wrest a shining Silmaril from Morgoth’s iron crown."
arch=('i686' 'x86_64')
url="http://www.amirrorclear.net/flowers/game/sil/"
license=('GPL2' 'custom:angband' 'custom')
depends=('ncurses' 'libx11')
install=sil.install
source=(http://www.amirrorclear.net/flowers/game/sil/Sil-130-src.zip
        'sil.sh')
md5sums=('de935f85ab8f9c98d5b781f9ed9e114c'
         '0e7223f80877fc6aeed7dbbbb9948d52')

build() {
  cd "$srcdir/Sil/src"

  make -f Makefile.std install

  cd ..
}

package() {
  _dest_dir="$pkgdir/usr/share/$pkgname"
  mkdir -p $_dest_dir

  cd "$srcdir/Sil"

  install -DTm644 "$srcdir/Sil/copying.txt" "${pkgdir}/usr/share/licenses/${pkgname}/copying.txt"
  install -DTm644 "$srcdir/Sil/Sil 1.3 Manual.pdf" "${pkgdir}/usr/share/${pkgname}/doc/sil-manual.pdf"
  install -D -m 755 sil "$_dest_dir"
  cp -r lib "$_dest_dir"
  chown -R :games $_dest_dir
  chmod -R 775 $_dest_dir
  install -T -D -m 755 "$srcdir/sil.sh" "$pkgdir/usr/bin/$pkgname"
}
