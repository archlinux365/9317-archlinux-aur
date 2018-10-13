# Maintainer: taramana@microsoft.com
# Generated by opam2aur https://gitlab.com/malet/opam2aur

pkgname=ocaml-fstar
_oname=fstar
pkgver=0.9.6.0
pkgrel=4
pkgdesc="An ML-like language with a type system for program verification."
arch=('i686' 'x86_64')
url=''
license=('Apache')
options=('!strip' '!makeflags' 'staticlibs')
depends=('ocaml')
makedepends=('ocaml-findlib' 'ocaml-yojson' 'ocaml-stdint' 'ocamlbuild' 'ocaml-batteries' 'ocaml-zarith' 'ocaml-ppx_deriving_yojson' 'ocaml-pprint' 'ocaml-fileutils' 'ulex-git' 'ocaml-ppx_deriving' 'ocaml-menhir')
source=('https://github.com/FStarLang/FStar/archive/v0.9.6.0.tar.gz')
sha384sums=('831cf86c861f69ebc536633874e924e37b851494778eb0e1e435c5d46272d59e7611642cf14ba0289f7ca8c9a379a9f0')

build() {
  cd "$srcdir/"*/
  make PREFIX=%{prefix}% -C src/ocaml-output -j4
  make PREFIX=%{prefix}% -C ulib install-fstarlib
  make PREFIX=%{prefix}% -C ulib install-fstar-tactics
}

package() {
  cd "$srcdir/"*/
  export OCAMLFIND_DESTDIR="$pkgdir$(ocamlfind printconf destdir)"
  install -dm 755 "$OCAMLFIND_DESTDIR"
  make PREFIX=%{prefix}% -C src/ocaml-output install
}
