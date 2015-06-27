#Contributor: Tom Tryfonidis <tomtryf [at] gmail [dot] com>
#Maintainer: Tom Tryfonidis <tomtryf [at] gmail [dot] com>

_pkgname=socnetv
pkgname=$_pkgname-git
pkgver=1.6.r112.g4279da4
pkgrel=1
pkgdesc="Social Networks Analysis and Visualisation (Development version)"
arch=('any')
url="http://socnetv.sourceforge.net/"
license=('GPL3')
depends=('qt5-base')
makedepends=('git')
provides=('socnetv-git')
conflicts=('socnetv')
source=("$_pkgname::git://git.code.sf.net/p/socnetv/git#branch=develop")
md5sums=('SKIP')

pkgver() {
	cd "${srcdir}/$_pkgname"
  git describe --long --tags | sed -r 's/^v//;s/([^-]*-g)/r\1/;s/-/./g'
}

build() {
	cd "${srcdir}/$_pkgname"

	qmake-qt5
	make
}

package() {
	cd "${srcdir}/$_pkgname"

	install -d "$pkgdir/usr/share/doc/socnetv/"
	install -d "$pkgdir/usr/share/socnetv/"
	install -D socnetv "$pkgdir/usr/bin/socnetv"
	install -D socnetv.desktop "$pkgdir/usr/share/applications/socnetv.desktop"
	install -D "src/images/socnetv.png" "$pkgdir/usr/share/pixmaps/socnetv.png"
	install -D "man/socnetv.1.gz" "$pkgdir/usr/share/man/man1/socnetv.1.gz"

	cp -r translations/ "$pkgdir/usr/share/socnetv/"
	cp -r manual/ "$pkgdir/usr/share/doc/socnetv/"
}
