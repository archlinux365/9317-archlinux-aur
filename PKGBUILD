# Maintainer: Jens Staal <staal1978@gmail.com>
pkgname=qspec-git
pkgver=v0.2.r115.gaaae422
pkgrel=1
pkgdesc="A GUI testing library for Qt desktop applications"
arch=('x86_64')
url="http://ugene.unipro.ru/"
license=('GPL')
depends=('qt5-base' 'libxtst')
source=('qspec::git+https://github.com/ugeneunipro/QSpec.git')
sha256sums=('SKIP')

build() {
  cd "${srcdir}"/qspec
  #make sure that the wanted branch is active
  git checkout master
  qmake CONFIG+=x64 PREFIX=/usr -r
  make
}

pkgver() {
  cd "${srcdir}"/qspec
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

package() {
  cd "${srcdir}"/qspec
  make INSTALL_ROOT="$pkgdir" install
}

post_install() {
  update-desktop-database -q
}
post_remove() {
  update-desktop-database -q
}
 
