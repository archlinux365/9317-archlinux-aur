# Maintainer: Dan Johansen <strit@manjaro.org>
# Contributor: Shaber

pkgname=coregarage
pkgver=4.0.0
pkgrel=1
pkgdesc="A settings manager for the CoreApps family."
arch=('x86_64' 'aarch64')
url="https://gitlab.com/cubocore/$pkgname"
license=('GPL3')
depends=('qt5-base' 'libcprime>=2.7.1' 'libcsys>=2.7.1' 'libarchive-qt')
groups=('coreapps')
source=("https://gitlab.com/cubocore/$pkgname/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
md5sums=('e32176383442324512fd682cb11e47a4')

prepare() {
  mkdir -p build
}

build() {
  cd ${pkgname}-v${pkgver}

  qmake-qt5 ${pkgname}.pro
  make
}

package() {
  cd ${pkgname}-v${pkgver}
  make INSTALL_ROOT=${pkgdir} install
} 
