# Maintainer: Breno Martins da costa corrêa e Souza <breno.ec@gmail.com>
pkgname=jet-git
pkgver=2.0
pkgrel=1
pkgdesc="Persist or retrieve strings over streams."
arch=('any')
url="https://github.com/cognocoder/jet.git"
license=('MIT')
makedepends=(git gcc make)
provides=(jet)
conflicts=(jet)
source=("git+$url")
md5sums=('SKIP')

package() {
	cd jet
	sudo make DESTDIR="$pkgdir" PREFIX=/usr install
}
