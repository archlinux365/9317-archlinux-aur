# Maintainer: American_Jesus <american.jesus.pt AT gmail DOT com>

_pkgname=nano-syntax-highlighting
pkgname=$_pkgname-git
pkgver=196.8b06671
pkgrel=1
pkgdesc="Nano editor syntax highlighting enhancements"
arch=('any')
depends=('nano')
makedepends=('git')
url="https://github.com/scopatz/nanorc"
license=('GPL3')
install=nano-syntax-highlighting.install
provides=('nano-syntax-highlighting')
conflicts=('nano-syntax-highlighting')
source=('nanorc::git+https://github.com/scopatz/nanorc.git#branch=master')
md5sums=('SKIP')

pkgver() {
	cd $srcdir/nanorc
	echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
	# Generate nanorc.sample
	find $srcdir/nanorc/*.nanorc -type f | sed "s@${srcdir}\/nanorc@include \/usr\/share\/$_pkgname@" > $srcdir/nanorc.sample
}

package() {
	cd $srcdir
	
	mkdir -p $pkgdir/usr/share/$_pkgname
	
	find $srcdir/nanorc/ -name '*.nanorc' | xargs install -D -m644 -t $pkgdir/usr/share/$_pkgname/
	
	install -D -m644 $srcdir/nanorc.sample $pkgdir/usr/share/$_pkgname/nanorc.sample

} 


