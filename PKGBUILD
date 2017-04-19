# Maintainer: Caleb Maclennan <caleb@alerque.com>

pkgname=signal-muon-git
pkgver=0.1.0_1_g6e557d0
pkgrel=0.1
license=("MPL-2.0")
pkgdesc="Signal Private Messenger for the Desktop using Muon instead of Chrome"
depends=()
makedepends=("npm")
arch=("i686" "x86_64")
url="https://github.com/diracdeltas/signal-muon"
source=("git://github.com/diracdeltas/${pkgname%-git}.git"
        "signal-muon.desktop")
sha256sums=("SKIP"
            "f799040368973ee28fff00d659fa64ab56638d69795741ba51a90f11f09b5e98")

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/^v//;s/-/_/g'
}

build() {
  cd "${pkgname%-git}"
  git submodule update --recursive
  npm install
}

package() {
  cd "${pkgname%-git}"
}
