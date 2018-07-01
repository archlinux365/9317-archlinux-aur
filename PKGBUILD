# Maintainer: Shatur <genaloner@gmail.com>

pkgname=crow-translate-git
pkgver=1.0.0.r0.gda2d689
pkgrel=1
pkgdesc="A simple and lightweight translator that allows to translate and say selected text using the Google Translate API and much more"
arch=('x86_64')
url="https://github.com/Shatur95/crow-translate"
license=('GPL3')
depends=('qt5-base' 'qt5-multimedia' 'gst-plugins-good' 'openssl')
makedepends=('qt5-tools' 'git')
provides=("${pkgname%-git}")
conflicts=("${pkgname%-git}")
source=("git+https://github.com/Shatur95/crow-translate")
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-git}"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

# Clone submodules
prepare() {
  cd "${pkgname%-git}"
  
  git submodule init
  git submodule update
}

build() {
  cd "${pkgname%-git}"
  
  qmake
  make
}

package() {
  cd "${pkgname%-git}"
  
  make INSTALL_ROOT="$pkgdir/" install
} 
