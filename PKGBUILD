#Package cryptojka by JoseluCross and Kprkpr from JKA - Network
#PKGBUILD mantainer: JoseluCross, Kprkpr

pkgname=cryptojka
pkgver=0.4.11
pkgrel=2
pkgdesc="de/encryption character by character"
arch=('i686' 'x86_64')
url="http://gitlab.com/JKANetwork/cryptoJKA"
license=('GPL3')
options=(!emptydirs)
source=(https://gitlab.com/JKANetwork/cryptoJKA/raw/master/last-version/$pkgname-$pkgver.tbz2)
md5sums=('61611d71f9fe0831686625e64ff7eea0')
install=$pkgname.install
build(){
  cd "$srcdir/$pkgname-$pkgver"
  make

}
package(){
  mkdir -p $pkgdir/usr/{bin,share}
  mkdir -p $pkgdir/usr/share/cryptojka/i18n/es/LC_MESSAGES
  cp "$srcdir/$pkgname-$pkgver/i18n/es.mo" "$pkgdir/usr/share/i18n/es/LC_MESSAGES/cryptojka.mo"
  cp "$srcdir/$pkgname-$pkgver/$pkgname" "$pkgdir/usr/bin"
}

