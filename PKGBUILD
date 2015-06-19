# Maintainer: Thomas Dziedzic < gostrc at gmail >
# Contributor: Andrew Burkett <burkett.andrew@gmail.com>

pkgname=mpg321
pkgver=0.3.2
pkgrel=1
pkgdesc='a completely Free drop-in replacement for mpg123, for the use of frontends, shell scripts, etc.'
arch=('i686' 'x86_64')
url='http://sourceforge.net/projects/mpg321/'
license=('GPL')
depends=('libmad' 'libao' 'libid3tag')
provides=('mpg123')
conflicts=('mpg123')
source=("http://downloads.sourceforge.net/project/${pkgname}/${pkgname}/${pkgver}/${pkgname}_${pkgver}.orig.tar.gz")
sha512sums=(
		'f1bead2c11e4cde0f1a87e1b2e3d216ef80c9a5dd8b219841961688d44a5fc63a54b7af07359766fde0b2712ddc5d0a90b20149c3228cb2d70e830e15c8ab234')

build() {
  cd $pkgname-$pkgver-orig
  ./configure --prefix=/usr
  make 

}

package(){
	cd ${pkgname}-${pkgver}-orig
	make DESTDIR=${pkgdir} install
}

