# Maintainer: Vlad Glagolev <scm(at)vaygr(dot)net>

pkgname=rofi-connman
pkgver=0.2
pkgrel=1
pkgdesc="menu-driven connman interface"
arch=('i686' 'x86_64')
license=('GPL3')
url="https://github.com/sourcemage/rofi-connman"
depends=('rofi' 'connman' 'empty')
optdepends=('dmenu: to use dmenu instead of rofi'
            'sexpect: to use sexpect instead of empty'
            'mawk: for faster profile processing')

source=($pkgname-$pkgver.tar.gz::${url}/archive/refs/tags/v${pkgver}.tar.gz)
sha256sums=('23f0eb86a3bf64a74982cfdf814c0093e27ed8a3c50bb977a4c4650182062946')

build() {
  cd "${pkgname}-${pkgver}"
}

package() {
  cd "${pkgname}-${pkgver}"

  install -Dm755 -t "${pkgdir}/usr/bin/" rofi-connman

  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  for d in AUTHORS README.md TODO; do
    install -Dm644 $d "${pkgdir}/usr/share/doc/${pkgname}/${d}"
  done
}
