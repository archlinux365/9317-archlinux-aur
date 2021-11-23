# Maintainer: Woshiluo Luo <woshiluo@woshiluo.site>

pkgname=bililive-recorder-bin
_pkgname=bililive-recorder
pkgver=1.3.10
pkgrel=1
pkgdesc='B站录播姬 | BiliBili Stream Recorder | 哔哩哔哩直播录制'
arch=('x86_64')
url='https://github.com/Bililive/BililiveRecorder'
license=('GPL3')
provides=("$_pkgname")
depends=(krb5 zlib)
source=($pkgname-$pkgver.zip::https://github.com/Bililive/BililiveRecorder/releases/download/v$pkgver/BililiveRecorder-CLI-linux-x64.zip)
sha256sums=('80c2bcb00b2939e20e382cefa421631bb043007f0328069e81a08a972308393b')

package() {
	cd $srcdir

	install -d $pkgdir/usr/lib/
	install -d $pkgdir/usr/bin/
	cp -ra linux-x64/. $pkgdir/usr/lib/bililive-recorder
	ln -s /usr/lib/bililive-recorder/BililiveRecorder.Cli "$pkgdir/usr/bin/BililiveRecorder.Cli"
}
