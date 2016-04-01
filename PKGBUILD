# Contributor: Patrick McCarty <pnorcks at gmail dot com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>
# if you switch from freetype2 from [extra] to freetype2-infinality-ultimate,
# delete the $srcdir directory before building

pkgname=lilypond-git
pkgver=2.19.39.1.9.g6992c0b
pkgrel=1
pkgdesc="An automated music engraving system (Git snapshot)"
arch=('i686' 'x86_64')
url="http://lilypond.org/"
license=('GPL')
depends=('fontconfig'
         'freetype2'
         'guile=2.0.11'
         'pango'
         'python2')
makedepends=('fontforge'
             'git'
             'gsfonts-cyr'
             't1utils'
	     'ghostscript'
	     'dblatex'
             'texlive-core>=2011.23170')
optdepends=('netpbm: building HTML documentation'
            'imagemagick: building HTML documentation'
            'ttf-kochi-substitute: building HTML documentation'
            'texi2html>=1.82: building HTML documentation'
            'rsync: installing HTML documentation')
provides=('lilypond')
conflicts=('lilypond' 'lilypond-devel')
source=(git://git.sv.gnu.org/lilypond.git)
md5sums=('SKIP')
options=('!makeflags')

pkgver() {
  cd lilypond/
  git describe | sed -e 's|release/\(.*\)|\1|' -e 's|-|.|g'
}

prepare() {
  cd lilypond/

  # python2 fix
  for file in $(find . -name '*.py' -print); do
    sed -i 's_^#!.*/usr/bin/python_#!/usr/bin/python2_' $file
    sed -i 's_^#!.*/usr/bin/env.*python_#!/usr/bin/env python2_' $file
  done

  sed -i 's|GUILE_CFLAGS=.*|GUILE_CFLAGS="`pkg-config --cflags guile`"|' configure.ac
  sed -i 's|GUILE_LDFLAGS=.*|GUILE_LDFLAGS="`pkg-config --libs guile`"|' configure.ac
  
  rm -rf python/out/
  sed -i '28iusing namespace std;' lily/main.cc
}

build() {
  cd lilypond/
  export PYTHON="python2"
  export PYTHON_CONFIG="python2-config"
  [ -f config.hh ] && rm config.hh
  ./autogen.sh \
          --prefix=/usr \
          --disable-documentation \
	  --enable-guile2
  make all
}

package() {
  cd lilypond/
  make DESTDIR="$pkgdir/" vimdir="/usr/share/vim/vimfiles" install
  sed -i '1s+guile1.8+guile+' $pkgdir/usr/bin/lilypond-invoke-editor
  rm -rf "$pkgdir/usr/share/man"
}
