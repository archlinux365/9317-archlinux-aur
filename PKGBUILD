# Maintainer: Morten Jakobsen <morten@jakeobsen.com>
# Previous Maintainer: Thomas Gubler <thomasgubler@gmail.com>
pkgname=blabel
pkgver=1.01
pkgbuild=24
pkgrel=1
pkgdesc="A Linux labeling program for Brother P-touch series"
arch=('any')
url="https://apz.fi/$pkgname"
license=('PerlArtistic')
groups=('office')
depends=('perl-gtk3' 'pango-perl' 'perl-net-cups')
makedepends=()
optdepends=()
provides=('blabel')
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=($url/src/$pkgname-v$pkgver-build-$pkgbuild.tar.bz2)

noextract=()
md5sums=('c8c551781a2bb5abdfde0b8c680f256b')

build() {
	echo "Nothing to build"
}

package() {
  cd "$srcdir"
  sed -i 's/use utf8::all;/#use utf8::all;/' blabel

  mkdir -p "${pkgdir}/usr/bin/"
  mkdir -p "${pkgdir}/usr/share/pixmaps/"
  mkdir -p "${pkgdir}/usr/share/applications/"
  mkdir -p "${pkgdir}/usr/share/$pkgname"
  mkdir -p "${pkgdir}/usr/share/man/man1"

  cp "blabel" "${pkgdir}/usr/bin/"
  cp "blabel-print" "${pkgdir}/usr/bin/"
  cp "blabel.glade" "${pkgdir}/usr/share/$pkgname/"
  cp "test-picture.png" "${pkgdir}/usr/share/$pkgname/"
  cp "blabel.desktop" "${pkgdir}/usr/share/applications/"
  cp "blabel.png" "${pkgdir}/usr/share/pixmaps/"
  cp "man/man1/blabel.1.gz" "${pkgdir}/usr/share/man/man1"
  cp "man/man1/blabel-print.1.gz" "${pkgdir}/usr/share/man/man1"
}
