pkgname=puush4linux
pkgdesc="puush4linux is a Linux client for the popular screenshot host puush. puush4linux aims to reach feature parity with the official Windows puush client. It currently supports authentication, taking screenshots and file uploading."
pkgver=0.01
pkgrel=1
arch=('i686' 'x86_64')
url="https://github.com/crescentrose/puush4linux"
license=('WTFPL')
source=(https://github.com/crescentrose/puush4linux/archive/master.zip)
md5sums=('SKIP')
depends=('bash' 'scrot' 'curl' 'libnotify')

package() {
	install -D $srcdir/puush4linux-master/puush $pkgdir/usr/bin/puush
}