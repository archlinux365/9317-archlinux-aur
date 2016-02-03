# Maintainer: sekret, mail=$(echo c2VrcmV0QHBvc3Rlby5zZQo= | base64 -d)
# Contributor: orbisvicis <''.join(chr(ord(c)-1) for c in "pscjtwjdjtAhnbjm/dpn")>
# Contributor: Christopher Arndt <aur -at- chrisarndt -dot- de>

_pkgname=gigedit
pkgname=$_pkgname-svn
pkgver=1.0.0.r2860
pkgrel=1
pkgdesc="An instrument editor for gigasampler files"
arch=("i686" "x86_64")
url="http://www.linuxsampler.org/"
license=("GPL")
depends=("gtkmm3" "linuxsampler")
makedepends=("subversion" "intltool" "docbook-xsl")
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$_pkgname"::"svn+https://svn.linuxsampler.org/svn/$_pkgname/trunk")
md5sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  local rev="$(svnversion | tr -d '[[:alpha:]]')"
  grep 'm4_define(gigedit' configure.ac | sed 's/m4_//' > version.m4
  echo "gigedit_ver_major.gigedit_ver_minor.gigedit_ver_release" >>version.m4
  local ver="$(m4 version.m4 | tr -d '[[:space:]]')"
  echo "$ver.r$rev"
}

prepare() {
  cd "$_pkgname"
  make -f Makefile.cvs $MAKEFLAGS
}

build() {
  cd "$_pkgname"
  CXXFLAGS="-std=c++11 $CXXFLAGS" ./configure --prefix=/usr --disable-static
  make
}


package() {
  cd "$_pkgname"
  make DESTDIR=$pkgdir install
}

# vim:set ts=2 sw=2 et:
