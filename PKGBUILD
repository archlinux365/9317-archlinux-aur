# Maintainer: Vlad Glagolev <scm(at)vaygr(dot)net>

pkgname=gitmux
pkgver=0.7.10
pkgrel=1
pkgdesc="Git in your tmux status bar"
arch=('x86_64' 'i686' 'aarch64')
url="https://github.com/arl/gitmux"
license=('MIT')
depends=('glibc' 'tmux')
makedepends=('go')

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/arl/gitmux/archive/v${pkgver}.tar.gz")
sha256sums=('0dfe594e3dd8f8830bd48952ad8afc83eea3b7e2e06d25e621c78fa16dcebae2')
_goname="github.com/arl/gitmux"


build() {
  rm -rf gopath
  mkdir -p gopath/src/${_goname}
  mv "${srcdir}/${pkgname}-${pkgver}/"* "gopath/src/${_goname}"
  cd "gopath/src/${_goname}"

  # Set proper version
  sed -e "s:^\(var version = \).*:\1\"${pkgver}\":" \
      -i "gitmux.go"

  export GOPATH="${srcdir}/gopath"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS}"
  go build -v
}

package() {
  cd "${srcdir}/gopath/src/${_goname}"

  install -Dm755 gitmux "${pkgdir}/usr/bin/gitmux"

  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
