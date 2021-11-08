# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: grant0417 <grant0417@protonmail.com>

pkgname=moebius
pkgver=1.0.29
pkgrel=2
pkgdesc="Modern ANSI & ASCII Art Editor"
arch=('any')
url="https://github.com/blocktronics/moebius"
license=('APACHE')
depends=('electron9')
makedepends=('npm')
source=("$pkgname-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz"
        "$pkgname.sh"
        "$pkgname.desktop")
sha256sums=('b0cdbc8d91ff07c5a826f6c2738f6aeaded4b397350422770a7b05f9ac60652b'
            'cb61d695dc8be325f2456929fb1503ce7d05e7f064fc422d8d81e41b049fe496'
            '3ec191df8ad9214ebe65716c21beaba36f54322c87d94f254190c0a29a75e674')

build() {
  cd "$pkgname-$pkgver"
  _electronVer="$(</usr/lib/electron9/version)"
  HOME="$srcdir/.electron-gyp" npm install --cache "${srcdir}/npm-cache"
  ./node_modules/.bin/electron-builder --linux --dir dist \
		-c.electronDist=/usr/lib/electron9 -c.electronVersion="$_electronVer"
}

package() {
	install -D "$pkgname.sh" "$pkgdir/usr/bin/$pkgname"
	install -Dm 644 "$pkgname.desktop" -t "$pkgdir/usr/share/applications/"
	cd "$pkgname-$pkgver"
	install -d "$pkgdir/usr/lib/$pkgname/"
	cp -a --no-preserve=ownership dist/linux-unpacked/resources/* "$pkgdir/usr/lib/$pkgname/"
}
