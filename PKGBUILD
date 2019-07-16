# Maintainer: Arsen Musayelyan <moussaelianarsen@gmail.com>
pkgname=pak-config-yay
pkgver=1.0
pkgrel=1
pkgdesc="A pacman config for yay"
arch=('x86_64')
url="https://gitlab.com/moussaelianarsen/pak"
license=('GPL3')
depends=('pak' 'yay')
provides=('pak-config' 'yaywrap')
source=("https://gitlab.com/moussaelianarsen/pak/-/archive/master/pak-master.tar.gz")
md5sums=('SKIP')
conflicts=('pak-config-pacman')

build() {
	cd "pak-master"
	make yaywrap
}

package() {
	cd "pak-master"
	mkdir -p $pkgdir/etc/
	mkdir -p $pkgdir/usr/bin/
	sudo install yaywrap $pkgdir/usr/bin
	cp plugins/yaywrap/pak.cfg /etc
}
