# Maintainer: Lukas Jirkovsky <l.jirkovsky@gmail.com>
pkgname=gimp-plugin-texturize
pkgver=2.2
pkgrel=1
pkgdesc="Generates large textures from a small sample"
arch=('i686' 'x86_64')
url="http://gimp-texturize.sourceforge.net/"
license=('GPL')
depends=('gimp')
makedepends=('perl-xml-parser')
source=(https://github.com/lmanul/gimp-texturize/archive/master.zip)
md5sums=('2ced5c69b3ecbe16e32e5507553a5993')

build() {
  cd "$srcdir"/gimp-texturize-master
  # fix the build with recent versions of gimp
  # find . -type f -name "*.c" -exec sed -i '/.*gimpimage_pdb.h.*/ d' '{}' ';'
  # find . -type f -name "*.cpp" -exec sed -i '/.*gimpimage_pdb.h.*/ d' '{}' ';'
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir"/gimp-texturize-master
  make DESTDIR="$pkgdir" install
}
