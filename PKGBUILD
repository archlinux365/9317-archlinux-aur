# Maintainer: Albert Graef <aggraef at gmail.com>
# Contributor: bjoern lindig (bjoern _dot_ lindig _at_ google.com)

pkgname=faust2-git
pkgver=9355.bdfca8fd4
pkgrel=1
pkgdesc="The latest development version of Faust featuring additional backends for LLVM, C, Java, JavaScript etc."
arch=('i686' 'x86_64')
url="http://faust.grame.fr/"
license=('GPL')
depends=('llvm-libs'
# needed for sound2faust:
	 'libsndfile'
# needed for libfaustremote and faustbench:
#	 'jack2'
# needed for libHTTPDFaust:
	 'libmicrohttpd' 'openssl')
# We need xxd at build time, which is provided by 'gvim', 'vim' and 'xxd'
# (AUR).
makedepends=('llvm' 'git' 'xxd')
optdepends=('clang: needed for sound2reader'
	    'python2: needed for faust2md'
	    'ruby: needed for faust2sc and scbuilder')
provides=('faust')
conflicts=('faust')
# This keeps the static libraries. Remove the 'staticlibs' option if this
# isn't wanted.
options=('strip' 'staticlibs')
source=("$pkgname::git+https://github.com/grame-cncm/faust.git#branch=master-dev"
	"git+https://github.com/rukano/emacs-faust-mode.git"
	"python2-fix.patch")
md5sums=('SKIP' 'SKIP'
         '8680b87fc4e34445e02f34781ee45f19')

pkgver() {
  cd $srcdir/$pkgname
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare() {
  cd $srcdir/$pkgname
  git submodule update --init
  # fix up scripts like faust2md which need python2 to run
  patch -Np1 < $srcdir/python2-fix.patch
}

# NOTE: libHTTPDFaust requires 'liblo', 'libmicrohttpd' and 'openssl'.
# Similarly, sound2faust requires libsndfile which we also include by default.
# These are all optional, so you can get rid of the extra dependencies by
# changing the build target from 'world' to 'all' and removing the
# corresponding dependencies above.

build() {
  cd $srcdir/$pkgname
  make PREFIX=/usr world
  # 'remote' and 'benchmark' are disabled right now since they require jack2.
  #make benchmark remote PREFIX=/usr
}

package() {
  cd $srcdir/$pkgname
  make install PREFIX=/usr DESTDIR="$pkgdir"

  # docs
  install -d "$pkgdir/usr/share/doc/faust"
  for x in documentation/*.{pdf,html}; do test -f $x && install -Dm644 $x "$pkgdir/usr/share/doc/faust"; done

  # examples
  install -d "$pkgdir/usr/share/faust/examples"
  cp -R "examples/"* "$pkgdir/usr/share/faust/examples/"

  ## syntax highlighting files
  cd syntax-highlighting

  # kate
  install -Dm644 faust.xml "$pkgdir/usr/share/apps/katepart/syntax/faust.xml"
  # gedit
  install -Dm644 faust.lang "$pkgdir/usr/share/gtksourceview-2.0/language-specs/faust.lang"
  install -Dm644 faust.lang "$pkgdir/usr/share/gtksourceview-3.0/language-specs/faust.lang"

  # highlight
  install -Dm644 dsp.lang "$pkgdir/usr/share/highlight/langDefs/dsp.lang"

  # vim
  install -Dm644 faust.vim "$pkgdir/usr/share/vim/vimfiles/syntax/faust.vim"

  # emacs
  install -d "$pkgdir/usr/share/emacs/site-lisp/"
  install -Dm644 "$srcdir/emacs-faust-mode/faust-mode.el" "$pkgdir/usr/share/emacs/site-lisp/"
}
