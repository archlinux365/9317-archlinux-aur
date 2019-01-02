# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

pkgname=hexyl-bin
pkgver=0.3.0
pkgrel=1
pkgdesc="A command-line hex viewer"
arch=('x86_64')
url="https://github.com/sharkdp/hexyl"
license=('Apache' 'MIT')
conflicts=('hexyl')

source=("${url}/releases/download/v${pkgver}/hexyl-v${pkgver}-x86_64-unknown-linux-musl.tar.gz")
sha256sums=('ee10308ab9153687b499f034af4c7ef360229481a0714ca6a5a477ba439d5576')

package() {
  cd "${srcdir}/hexyl-v${pkgver}-x86_64-unknown-linux-musl/"
  install -D -m755 hexyl "${pkgdir}/usr/bin/hexyl"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 LICENSE-APACHE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-APACHE"
  install -Dm644 LICENSE-MIT "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE-MIT"
}
