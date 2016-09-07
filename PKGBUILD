# Maintainer: Piotr Rogoza <piotr dot r dot public at gmail dot com>
# Contributor: Piotr Rogoza <piotr dot r dot public at gmail dot com>

_author=A/AZ/AZAWAWI
_perlmod=Wx-Scintilla
pkgname=perl-wx-scintilla
pkgver=0.39
pkgrel=2
pkgdesc='Wx::Scintilla - Scintilla source code editing component for wxWidgets'
arch=('i686' 'x86_64')
url="http://search.cpan.org/~azawawi/Wx-Scintilla/"
license=('GPL' 'PerlArtistic')
depends=(
perl
# wxgtk2.8
wxgtk
)
makedepends=(
perl-alien-wxwidgets
perl-extutils-xspp
perl-test-simple
perl-wx
perl-module-build
)
provides=(
perl-wx-scintilla-constant
perl-wx-scintilla-textctrl
perl-wx-scintilla-textevent
perl-wx-scintillatextctrl
perl-wx-scintillatextevent
)
options=(!emptydirs)
source=("http://search.cpan.org/CPAN/authors/id/$_author/$_perlmod-$pkgver.tar.gz"
remove-uneeded-libs.patch
# p.patch
Fix_STC_compilation_with_GCC6.patch::https://anonscm.debian.org/cgit/pkg-perl/packages/libwx-scintilla-perl.git/plain/debian/patches/Fix_STC_compilation_with_GCC6.patch?id=da71bd9
)
sha256sums=('d6d67528a55552bb3fda2a1f22058c6c94a05eaf632dba5331afb3390defe0ea'
            '53d8f6018affd735b4deb5d80128c9a0106185ddab5ed53f1409975319188e52'
            'f6e31893d71e1fc7ba10f7ad33bf478be952442ecf718e615ec28532e9527401')
prepare(){
  cd "$srcdir/$_perlmod-$pkgver"
  patch -Np1 -i "$srcdir/remove-uneeded-libs.patch"
  patch -Np1 -i "$srcdir/Fix_STC_compilation_with_GCC6.patch"
#   patch -Np1 -i "$srcdir/p.patch"
}
build(){
  cd "$srcdir/$_perlmod-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1 MODULEBUILDRC=/dev/null
  /usr/bin/perl Build.PL
  ./Build
}
check(){
  cd "$srcdir/$_perlmod-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  export PERL_MM_USE_DEFAULT=1
  ./Build test
}
package(){
  cd "$srcdir/$_perlmod-$pkgver"
  unset PERL5LIB PERL_MM_OPT PERL_MB_OPT PERL_LOCAL_LIB_ROOT
  ./Build install installdirs=vendor destdir="$pkgdir"
}
