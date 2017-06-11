# Contributor: Mitsu <archlinux AT suumitsu DOT eu>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=svgcleaner
pkgver=0.9.0
pkgrel=1
pkgdesc="An application that cleans svg images from unnecessary data in batch mode."
arch=('i686' 'x86_64')
url="https://github.com/RazrFalcon/SVGCleaner"
license=('GPL2')
makedepends=('gcc-libs' 'cargo')
source=("$pkgname-$pkgver.tar.gz::https://github.com/RazrFalcon/SVGCleaner/archive/v${pkgver}.tar.gz")
sha256sums=('04190e3269f64499c2383d5d31ec06790d3ac83a835cb7764176c658622f9252')

build() {
  cd "${srcdir}/svgcleaner-${pkgver}/src/"
  cargo clean
  cargo build --release
}

package() {
  cd "${srcdir}/svgcleaner-${pkgver}/target/release"
  install -Dm755 "svgcleaner" "${pkgdir}/usr/bin/svgcleaner"
}
