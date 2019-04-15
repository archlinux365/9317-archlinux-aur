# Maintainer: Étienne Deparis <etienne@depar.is>
pkgname=ttf-b612
pkgver=1.008
pkgrel=1
pkgdesc="An highly legible open source font family designed and tested to be used on aircraft cockpit screens"
arch=("any")
url="http://b612-font.com/"
license=("EPL")
depends=(fontconfig xorg-font-utils)
source=("https://github.com/polarsys/b612/archive/$pkgver.tar.gz")
sha256sums=('bfe4827931a22ecde5576c2bd06b462d467b89fa580b6ded651346f94eba8dd6')
provides=("ttf-b612" "ttf-b612-mono")
conflicts=("ttf-b612-git" "ttf-b612-mono")

package() {
  cd $srcdir/b612-$pkgver
  install -d -m755 "$pkgdir/usr/share/licenses/$_pkgname"
  install -D -m644 edl-v10.html "$pkgdir/usr/share/licenses/$_pkgname/edl-v10.html"
  install -D -m644 EPL-2.0.html "$pkgdir/usr/share/licenses/$_pkgname/EPL-2.0.html"
  install -D -m644 OFL.txt "$pkgdir/usr/share/licenses/$_pkgname/OFL.txt"

  install -d -m755 "$pkgdir/usr/share/fonts/TTF"
  cd fonts/ttf
  find . -name "*.ttf" -exec install -D -m644 "{}" "$pkgdir/usr/share/fonts/TTF/{}" \;
}
