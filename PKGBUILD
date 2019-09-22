# Maintainer: Jianfeng Zhang <swordfeng123@gmail.com>

pkgname=google-drive-ocamlfuse-opam
_pkgname=google-drive-ocamlfuse
pkgver=0.7.13
pkgrel=1
pkgdesc="FUSE-based file system backed by Google Drive, written in OCaml (installed from opam)"
arch=('x86_64')
url='https://astrada.github.io/google-drive-ocamlfuse/'
license=('MIT')
depends=('curl' 'fuse2' 'sqlite')
makedepends=('opam')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=()
sha256sums=()
options=()

pkgver() {
    cd "${srcdir}"
    opam init -a --disable-sandboxing 1>&2 && opam update 1>&2
    opam list ${_pkgname} --columns=version | awk '/^[^#]/{print}' | sort -V | tail -n 1
}

build() {
    cd "${srcdir}"
    opam switch create .
    eval $(opam env --switch=. --set-switch)
    opam install -y ${_pkgname}.${pkgver}
    cp "_opam/bin/${_pkgname}" "${_pkgname}"
    cp "_opam/doc/${_pkgname}/LICENSE" "LICENSE"
    opam switch -y remove .
}

package() {
    install -Dm755 "${srcdir}/${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

