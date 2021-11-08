# Maintainer: Sýlvan Heuser <sylvan.heuser@gmx.net>

pkgname=upterm
pkgver=0.6.7
pkgrel=1
pkgdesc='Secure Terminal Sharing, an alternative to tmate'
arch=('x86_64')
url="https://github.com/owenthereal/upterm"
license=('Apache')
depends=('glibc')
makedepends=('go')
optdepends=()
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/owenthereal/upterm/archive/v${pkgver}.tar.gz")
sha256sums=('b3b6d856879dd3caa6a84ed8c31e7bbaffb0f98e03dcc7c942909b33a109c32a')

prepare() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  mkdir -p build/
}

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"
  go build -o build ./cmd/...
  build/gendoc
}

check() {
  cd "$srcdir/${pkgname}-${pkgver}"
  go test ./...
}

package() {
  cd "$srcdir/${pkgname}-${pkgver}"
  install -Dm755 "build/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
  install -Dm755 "build/${pkgname}d" "${pkgdir}/usr/bin/${pkgname}d"
  install -dm755 "${pkgdir}/usr/share/man"
  cp -av etc/man/* "${pkgdir}/usr/share/man/"
  install -dm755 "${pkgdir}/usr/share/bash-completion/completions"
  install -Dm644 "etc/completion/upterm.bash_completion.sh" "${pkgdir}/usr/share/bash-completion/completions/upterm"
  install -dm755 "$pkgdir/usr/share/zsh/site-functions"
  install -Dm644 "etc/completion/upterm.zsh_completion" "${pkgdir}/usr/share/zsh/site-functions/_upterm"
}

# vim:set ts=2 sw=2 et:
