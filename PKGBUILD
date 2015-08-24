# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
pkgname=sxemacs-git
pkgver=22.1.15.201.g6a46975
pkgrel=1
pkgdesc="A derivation of xemacs - git checkout"
arch=('i686' 'x86_64')
url="http://www.sxemacs.org/"
license=('GPL')
depends=('libao' 'gpm' 'libtiff' 'libltdl' 'jack' 'libmad' 'desktop-file-utils' 'compface' 'libpulse' 'libxaw' 'postgresql-libs' 'libpng')
makedepends=('git' 'texinfo')
provides=('sxemacs')
conflicts=('sxemacs' 'xemacs')
source=('git+http://git.sxemacs.org/sxemacs')
md5sums=('SKIP')
install=sxemacs.install
_gitname="sxemacs"
options=('!libtool')

prepare() {
  cd "$srcdir/${_gitname}/src"
  sed -i '204,217d' sxe-utils.h
}

pkgver() {
  cd "$srcdir/${_gitname}"
  git describe --tags | sed -e 's|-|.|g' -e 's|v||'
}

build() {
  cd "$srcdir"
  [ -d ${_gitname}/libltdl/m4 ] || mkdir -p ${_gitname}/libltdl/m4
  [ -d build ] || mkdir -p build
  cd build
  ../${_gitname}/autogen.sh 
  LIBS="$LIBS -ldl -fPIC" CFLAGS="$CFLAGS -I/usr/include/freetype2" \
      ../${_gitname}/configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$_gitname/build"
  make DESTDIR="$pkgdir/" install
# remove conflict with ctags package
  mv "$pkgdir"/usr/bin/{ctags,ctags.sxemacs}
  mv "$pkgdir"/usr/share/man/man1/{ctags.1,ctags.sxemacs.1}
# remove conflict with other emacsen
  mv "$pkgdir"/usr/bin/{etags,etags.sxemacs}
  mv "$pkgdir"/usr/share/man/man1/{etags.1,etags.sxemacs.1}
  mv "$pkgdir"/usr/share/info/cl.info \
    "$pkgdir"/usr/share/info/cl-sxemacs.info
  mv "$pkgdir"/usr/share/info/widget.info \
    "$pkgdir"/usr/share/info/widget-sxemacs.info
}
