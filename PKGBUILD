# Maintainer: Michael Schubert <mschu.dev at gmail>
pkgname=python2-pythonmagick
pkgver=0.9.12
pkgrel=3
pkgdesc="Object-oriented Python2 bindings for the ImageMagick library"
arch=('i686' 'x86_64')
url="http://www.imagemagick.org/"
license=('custom')
depends=('boost<1.60.0' 'python2' 'imagemagick') # 'libstdc++5')
makedepends=('perl' 'automake')
options=('!libtool')
source=("http://www.imagemagick.org/download/python/PythonMagick-$pkgver.tar.gz")
md5sums=('5187cb51f3a850a88a95568bb96e62e3')

build() {
  cd "$srcdir/PythonMagick-$pkgver"
  perl autogen.pl

  CPPFLAGS="`python2-config --includes`" \
  PYTHON_LIB="`python2-config --libs`" \
  ./configure --prefix=/usr

#  sed -i 's:-l$(PYTHON_LIB):$(PYTHON_LIB):' Makefile
  make
}

package() {
  cd "$srcdir/PythonMagick-$pkgver"
  pydir=`python2 -c "from distutils.sysconfig import get_python_lib; print get_python_lib()"`

  make DESTDIR="$pkgdir" pyexecdir="$pydir" pythondir="$pydir" install
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/python2-pythonmagick/LICENSE"
}
