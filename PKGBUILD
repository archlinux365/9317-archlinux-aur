# Maintainer: higgsbosoncodes higgsbosoncodes@gmail.com
pkgname=arch-animated-startscreen
pkgver=1.0
pkgrel=1
epoch=
pkgdesc="Animated SDDM-Theme and Splashscreen for Archlinux (made for KDE)"
arch=("any")
url="https://github.com/higgsbosoncodes/ArchStartscreen-Animated"
license=('GPL3')
groups=()
depends=()
makedepends=()
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("$pkgname-$pkgver.tar.gz::https://github.com/higgsbosoncodes/ArchStartscreen-Animated/archive/master.tar.gz")
noextract=()
md5sums=('86fd75c609b2eb84ae58d9ddc87868da')
validpgpkeys=()

build() {
	cd "ArchStartscreen-Animated-master"
	make
}

check() {
	cd "ArchStartscreen-Animated-master"
	make -k check
}

package() {
	cd "ArchStartscreen-Animated-master"
	make DESTDIR="$pkgdir/" install
}
