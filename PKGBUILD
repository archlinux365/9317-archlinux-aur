# Maintainer: quietvoid <tcChlisop0@gmail.com>

pkgname=libdovi-git
pkgver=1.6.5.g80aa8af
pkgrel=1
pkgdesc='Library to read and write Dolby Vision metadata (C-API)'
arch=('any')
url='https://github.com/quietvoid/dovi_tool/dolby_vision'
license=('MIT')
depends=(
  gcc-libs
  glibc
)
makedepends=(
  cargo-c
  git
  rust
)
conflicts=('libdovi.so')
provides=('libdovi.so')
source=(git+https://github.com/quietvoid/dovi_tool.git)
sha256sums=(SKIP)

pkgver() {
  cd dovi_tool

  printf "%s.g%s" "$(cargo pkgid --manifest-path dolby_vision/Cargo.toml | cut -d# -f2 | cut -d: -f2)" "$(git rev-parse --short HEAD)"
}

prepare() {
  cargo fetch \
    --locked \
    --manifest-path dovi_tool/dolby_vision/Cargo.toml
}

build() {
  cargo cbuild \
    --release \
    --frozen \
    --prefix=/usr \
    --manifest-path dovi_tool/dolby_vision/Cargo.toml
}

check() {
  cargo test \
    --release \
    --frozen \
    --all-features \
    --manifest-path dovi_tool/dolby_vision/Cargo.toml
}

package() {
  cd dovi_tool/dolby_vision

  cargo cinstall \
    --release \
    --frozen \
    --prefix /usr \
    --destdir "${pkgdir}"

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/libdovi/LICENSE"
}
