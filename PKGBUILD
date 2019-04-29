# Maintainer: Amiad Bareli <amiad@hatul.info>

pkgname=ravkavonline
pkgver="2.4.1"
pkgrel=1
pkgdesc="Ravkav Online client - unofficial package"
arch=('x86_64')
url="https://ravkavonline.co.il/"
license=('custom' 'MIT')
depends=('pcsclite' 'ccid')
optdepends=('scmccid: additional support for some card readers')

source=("https://ravkavonline.co.il/releases/linux/${pkgname}_${pkgver}_amd64.deb" $pkgname.install)
sha256sums=('d61ed57fe520fb4a921d62a0158d56296c7051b15c66d30088be95f76a0155c2'
		'91373cde0ef5a269db942aaabe53bb553748306e9d7ef5aedf05183bd42f8447')
install=$pkgname.install

prepare() {
	tar -xf data.tar.gz
}

package() {
  install -dm 755 $pkgdir/usr/{bin,share/{applications,doc/$pkgname}}
  install -Dm 755 $srcdir/usr/bin/$pkgname $pkgdir/usr/bin
  install -Dm 755 $srcdir/usr/share/applications/$pkgname.desktop $pkgdir/usr/share/applications
  install -Dm 644 $srcdir/usr/share/doc/$pkgname/{LICENSE.txt,changelog.gz} $pkgdir/usr/share/doc/$pkgname/
   
}
