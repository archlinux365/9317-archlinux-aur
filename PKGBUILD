# Maintainer: alexiobash < me (at) alexiobash (dot) com >

pkgname=conky-lua-arch
pkgver=1.1
pkgrel=1
pkgdesc="A conky-lua for ArchLinux"
arch=('any')
url="http://alexiobash.com/conky-lua-arch/"
license=('GPL')
depends=('conky-lua')
source=("$pkgname::git+http://git.alexiobash.com/git/$pkgname")
install="${pkgname}.install"
md5sums=('SKIP')

package() {
	cd $srcdir/$pkgname
	make DESTDIR=${pkgdir} install
}
