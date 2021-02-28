# Maintainer: robertfoster
# Contributor: Jakob Gahde <j5lx@fmail.co.uk>

pkgname=ocaml-alsa
pkgver=0.3.0
pkgrel=2
pkgdesc="OCaml ALSA bindings"
arch=('i686' 'x86_64')
url="https://github.com/savonet/ocaml-alsa"
license=('GPL2')
depends=('ocaml' 'alsa-lib')
makedepends=('dune')
options=('!strip' '!makeflags')
_commit=8ffe8abc1cb4907c6be801c5af32a41defaefe54
source=("https://github.com/savonet/${pkgname}/archive/${_commit}.tar.gz")

build() {
  cd "${srcdir}/${pkgname}-${_commit}"
  dune build
}

package() {
  cd "${srcdir}/${pkgname}-${_commit}"
  dune install --prefix "${pkgdir}/usr" \
    --libdir "${pkgdir}$(ocamlfind printconf destdir)"
}

sha256sums=('fda8ba6dcfcf25b9aa402a1fe13f7d829e28c4436258bf8da6cf3bf43f3c3bb1')
