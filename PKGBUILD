# Maintainer: stiglers-eponym
pkgname=beamerpresenter
pkgver=r6.17b4346
pkgrel=1
pkgdesc="Simple dual screen pdf presentation software"
arch=('x86_64')
url="https://github.com/stiglers-eponym/BeamerPresenter"
license=('custom:unlicense')
depends=('poppler-qt5' 'qt5-multimedia')
makedepends=('git')
source=('git://github.com/stiglers-eponym/BeamerPresenter.git')
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/BeamerPresenter"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "${srcdir}/BeamerPresenter"
  qmake && make
}

package() {
  cd "${srcdir}/BeamerPresenter"
  install -Dm644 UNLICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm755 beamerpresenter "$pkgdir/usr/bin/beamerpresenter"
}
