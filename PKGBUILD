# Maintainer: j4qfrost <j4qfrost at gmail dot com>
# Maintainer: ptolemy753 <dsconce at protonmail dot com>
# Maintainer: peeweep <peeweep at 0x0 dot ee>

pkgname=neovide-git
pkgver=0.10.1.r16.gf7ad535
pkgrel=1
pkgdesc='No Nonsense Neovim Client in Rust'
arch=('x86_64')
url='https://github.com/Kethku/neovide'
license=('MIT')
depends=('neovim' 'fontconfig' 'freetype2' 'libglvnd' 'sndio')
makedepends=('git' 'cargo' 'gtk3' 'cmake' 'sdl2' 'make' 'python')
provides=("neovide")
conflicts=("neovide")
source=("${pkgname}::git+${url}")
sha1sums=('SKIP')

pkgver() {
  cd "${srcdir}/${pkgname}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "${srcdir}/${pkgname}"
  sed -i -e '/^incremental/a opt-level = 3' Cargo.toml
}

build() {
  cd "${srcdir}/${pkgname}"
  export CARGO_HOME="${srcdir}/${pkgname}/CARGO"
  CFLAGS+=' -ffat-lto-objects'
  cargo build --release --all-features
}

package() {
  install -Dm644 ${srcdir}/${pkgname}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/LICENSE
  install -Dm755 ${srcdir}/${pkgname}/target/release/neovide ${pkgdir}/usr/bin/neovide
  install -Dm644 ${srcdir}/${pkgname}/assets/neovide.desktop ${pkgdir}/usr/share/applications/neovide.desktop
}

# vim: ts=2 sw=2 et:
