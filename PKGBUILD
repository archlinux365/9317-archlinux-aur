# Maintainer: Baptiste Jonglez <baptiste--aur at jonglez dot org>
# Contributor: acieroid
# Contributor: spider-mario <spidermario@free.fr>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: George Giorgidze <giorgidze@gmail.com>
# Contributor: William J. Bowman <bluephoenix47@gmail.com>
pkgname=('coq' 'coqide' 'coq-doc')
pkgver=8.6
pkgrel=1
pkgdesc='Formal proof management system'
arch=('i686' 'x86_64')
url='https://coq.inria.fr/'
license=('GPL')
groups=('coq')
options=('!emptydirs')
depends=('gtk2' 'ocaml' 'camlp4' 'gtksourceview2')
makedepends=('ocaml-findlib'
             'lablgtk2' 'gendesk' # coqide
             'texlive-bin' 'texlive-latexextra' 'texlive-pictures'
             'texlive-fontsextra' 'texlive-science'
             'fig2dev' 'imagemagick' 'hevea' 'ghostscript') # coq-doc
source=("https://coq.inria.fr/distrib/V$pkgver/files/coq-$pkgver.tar.gz"
        "0001-Fix-incorrect-documentation-that-prevents-successful.patch"
        "0002-Avoid-concurrent-runs-when-producing-html-documentat.patch")
sha1sums=('617a6f86d09dde0e409f3fa22268daf7be3f5bba'
          'ec5e9af33f37d2eb154f8de13815cb7f1f2fba6e'
          '201f1db7fd3e7e072ff7c94cfcdabdcc5910ccdd')

prepare() {
  gendesk -f -n --pkgname "coqide" \
    --name "CoqIDE Proof Assistant" \
    --pkgdesc "Graphical interface for the Coq proof assistant" \
    --categories "Development;Science;Math;IDE;GTK"

  cd "$srcdir/coq-$pkgver"
  patch -p1 < ../0001-Fix-incorrect-documentation-that-prevents-successful.patch
  patch -p1 < ../0002-Avoid-concurrent-runs-when-producing-html-documentat.patch
}

build() {
  cd "$srcdir/coq-$pkgver"

  ./configure \
    -prefix '/usr' \
    -mandir '/usr/share/man' \
    -configdir '/etc/xdg/coq/' \
    -coqide opt \
    -with-doc yes \
    -usecamlp4

  make world
}

package_coq() {
  depends=('ocaml' 'camlp4')
  optdepends=('coqide: for the graphical Coq IDE')
  # coq-nox was the old name for coq without coqide
  replaces=('coq-nox')
  conflicts=('coq-nox')

  cd "$srcdir/coq-$pkgver"

  make COQINSTALLPREFIX="$pkgdir" install-coq
  rm -f "${pkgdir}/usr/share/man/man1/coqide.1"
}

package_coqide() {
  pkgdesc="GTK-based graphical interface for the Coq proof assistant"
  depends=('coq' 'ocaml' 'camlp4' 'gtk2' 'gtksourceview2')

  cd "$srcdir/coq-$pkgver"

  make COQINSTALLPREFIX="$pkgdir" install-coqide
  install -D -m 644 -t "${pkgdir}/usr/share/man/man1/" man/coqide.1

  # Desktop file generated by gendesk
  install -D -m 644 "${srcdir}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
  install -D -m 644 ide/coq.png "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}

package_coq-doc() {
  pkgdesc="HTML and PDF documentation for the Coq proof assistant"
  depends=()
  arch=('any')

  cd "$srcdir/coq-$pkgver"

  make COQINSTALLPREFIX="$pkgdir" install-doc
}
