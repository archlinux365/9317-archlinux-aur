# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Bruce Zhang <zttt183525594 at gmail dot com>

pkgname=mcfly
pkgver=0.5.5
pkgrel=1
pkgdesc="Fly through your shell history"
arch=('i686' 'x86_64')
url="https://github.com/cantino/mcfly"
license=('MIT')
depends=('sh')
optdepends=('zsh: for zsh support'
            'fish: for fish support')
makedepends=('rust' 'cargo')
install=mcfly.install
source=("${pkgname}-${pkgver}.tar.gz"::"https://github.com/cantino/${pkgname}/archive/v${pkgver}.tar.gz")
sha256sums=('09d22e761c5ba5f8f07fed2922abdcbc56574bbe58184019c7ebe591874d745c')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  env CARGO_INCREMENTAL=0 cargo build --release
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -Dm755 "${srcdir}/${pkgname}-${pkgver}/target/release/mcfly" "${pkgdir}/usr/bin/mcfly"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/mcfly.bash" "${pkgdir}/usr/share/doc/mcfly/mcfly.bash"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/mcfly.zsh" "${pkgdir}/usr/share/doc/mcfly/mcfly.zsh"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/mcfly.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/mcfly.fish"
  install -Dm644 "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
