# Maintainer: M. Scholz <srtlg>
pkgname=otf-linguistics-pro
pkgver=1.010
pkgrel=1
pkgdesc="he Linguistics Pro font family is based on the Utopia Nova font family"
url="https://fontlibrary.org/en/font/linguistics-pro"
arch=('any')
license=('custom:OFL')
source=('https://fontlibrary.org/assets/downloads/linguistics-pro/425914a80ff1bddc48ab57e8df0fe4df/linguistics-pro.zip')
sha256sums=('bfb31dd13771692e68543e53185c27947533236155a601364db6ad32c6c5f586')

package() {
	cd "$srcdir"
	install -Dm0644 COPYING.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
	install -Dm0644 *.otf -t "$pkgdir/usr/share/fonts/OTF/"

}

