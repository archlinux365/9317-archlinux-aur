# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=le-editor-git
pkgver=684.d223cbb
pkgrel=1
pkgdesc="A text editor in memorial to Norton Editor with block and binary operations - git version"
arch=('i686' 'x86_64')
url="https://directory.fsf.org/wiki/Le_editor"
license=('GPL3')
depends=('ncurses' 'bash')
makedepends=('git')
provides=('le' 'le-editor')
conflicts=('le' 'le-editor')
source=(git://git.sv.gnu.org/gnulib le-editor::git://github.com/lavv17/le.git dickey.patch)
md5sums=('SKIP'
         'SKIP'
         '4d180d25f95e07c275e6dce101ba2b52')
options=('!makeflags')
_gitname="le-editor"

pkgver() {
  cd $srcdir/$_gitname
  printf "%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" | sed 's|-|.|g'
}

prepare() {
  cd $_gitname
  patch -Np1 < $srcdir/dickey.patch
}

build() {
  cd "$srcdir/$_gitname"
  chmod 770 $srcdir/gnulib/gnulib-tool
  PATH=$PATH:$srcdir/gnulib
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd "$srcdir/$_gitname"
  make DESTDIR="$pkgdir/" install
}
