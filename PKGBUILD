# Maintainer: Hythlodaeus <matteodelseppiaomm@gmail.com>
pkgname=cryptcat
pkgver=1.2.1
pkgrel=1
epoch=
pkgdesc="Cryptcat is the standard netcat enhanced with twofish 
encryption"
arch=(i686 x86_64)
url="https://cryptcat.sourceforge.net"
license=('GPLv2')
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
source=("http://downloads.sourceforge.net/project/cryptcat/cryptcat-unix-1.2/cryptcat-unix-1.2.1/cryptcat-unix-1.2.1.tar?r=https%3A%2F%2Fsourceforge.net%2Fprojects%2Fcryptcat%2Ffiles%2Fcryptcat-unix-1.2%2Fcryptcat-unix-1.2.1%2F&ts=1464475005&use_mirror=iweb")
noextract=()
md5sums=(fc4afff350f3dd5e4fe51b0dd01a8e21)
validpgpkeys=()

build() {
	cd unix
	make linux
}


package() {
	cd unix
	sudo cp -v cryptcat /usr/bin/cryptcat
}
