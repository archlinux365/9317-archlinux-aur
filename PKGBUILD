# Maintainer: Philipp Wolfer <ph.wolfer@gmail.com>
_pkgname=gifski
pkgname=${_pkgname}-git
pkgver=0.6.0.r0.g068928f
pkgrel=1
pkgdesc="GIF encoder based on libimagequant (pngquant, gifquant?). Squeezes maximum possible quality from the awful GIF format"
arch=('i686' 'x86_64')
url="https://gif.ski/"
license=('AGPL3')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")
depends=(ffmpeg)
makedepends=(git rust clang)
source=(${_pkgname}::git+https://github.com/ImageOptim/${_pkgname}.git)
sha256sums=('SKIP')

build() {
  cd "${srcdir}/${_pkgname}"
  cargo build --release --features=video,openmp
}

package() {
  cd "${srcdir}/${_pkgname}"
  install -Dm755 target/release/gifski "$pkgdir/usr/bin/gifski"
}

pkgver() {
  cd "${srcdir}/${_pkgname}"
  git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
