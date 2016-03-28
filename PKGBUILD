# Maintainer: Jakob Gahde <j5lx@fmail.co.uk>

_pkgname=ppx_deriving
pkgname=ocaml-${_pkgname}
pkgver=3.3
pkgrel=1
pkgdesc="Type-driven code generation for OCaml >=4.02"
arch=('i686' 'x86_64')
url="https://github.com/whitequark/ppx_deriving"
license=('MIT')
depends=('ocaml' 'cppo>=1.2.0' 'ocaml-ppx_tools')
makedepends=('ocaml-findlib')
source=("https://github.com/whitequark/${_pkgname}/archive/v${pkgver}.tar.gz")
md5sums=('c4a15d783a76912a1244a95aebb5935c')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"

  export OCAMLPATH="$(ocamlc -where):${pkgdir}$(ocamlc -where)"
  export OCAMLFIND_DESTDIR="${pkgdir}$(ocamlfind printconf destdir)"
  mkdir -p "${OCAMLFIND_DESTDIR}"

  make install
  install -Dm644 "LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE.txt"
}
