# Maintainer: Mort Yao <soi@mort.ninja>

pkgname=ocaml-ppx_tools-git
pkgver=20200211
pkgrel=1
pkgdesc="Tools for authors of ppx rewriters and other syntactic tools"
arch=('x86_64')
url='https://github.com/ocaml-ppx/ppx_tools'
license=('MIT')
provides=('ocaml-ppx_tools')
conflicts=('ocaml-ppx_tools')
depends=('ocaml')
makedepends=('ocaml-findlib' 'dune')
source=("${pkgname}::git://github.com/ocaml-ppx/ppx_tools.git")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git log -1 --pretty=format:%cd --date=short | sed 's/-//g'
}

build() {
  cd "$pkgname"

  make -j1
}

package() {
  cd "$pkgname"

  export OCAMLFIND_DESTDIR="${pkgdir}$(ocamlfind printconf destdir)"
  install -dm755 "${OCAMLFIND_DESTDIR}"
  make install
  install -Dm644 "LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
