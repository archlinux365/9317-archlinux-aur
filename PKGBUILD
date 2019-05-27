# Maintainer: Mikael Blomstrand <mbloms ÅT kth DÖT se>

pkgname=svgbob-git
pkgver=0.4.1.r323.43fb036
pkgrel=1
pkgdesc='Convert your ascii diagram scribbles into happy little SVG'
arch=('i686' 'x86_64')
url="https://github.com/ivanceras/svgbob"
license=('Apache')
depends=('gcc-libs')
conflicts=('svgbob')
provides=('svgbob')
makedepends=('rust' 'cargo' 'git')
source=("git+https://github.com/ivanceras/svgbob.git")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/svgbob"
    printf "%s.r%s.%s" "$(grep version svgbob_cli/Cargo.toml | sed -e "s/version = \"//" -e "s/\"//")"\
                       "$(git rev-list --count HEAD)"\
                       "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/svgbob/svgbob_cli"
  cargo build --release
}

package() {
  install -Dm755 "${srcdir}/svgbob/svgbob_cli/target/release/svgbob" "${pkgdir}/usr/bin/svgbob"
  install -Dm644 "${srcdir}/svgbob/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
