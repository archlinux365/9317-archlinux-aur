# Maintainer: FuzzyCheese
pkgname=wfview-git
pkgver=r699.2878223
pkgrel=1
pkgdesc="Interface for Icom transceivers"
arch=('i686' 'x86_64')
url="https://wfview.org/"
license=('GPL3')
depends=('qt5-serialport' 'qt5-multimedia' 'qcustomplot')
makedepends=('git')
provides=('wfview')
source=('git+https://gitlab.com/eliggett/wfview.git')
md5sums=(SKIP)

pkgver() {
  cd "wfview"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

prepare(){
  sed -i '/^linux:QMAKE_POST_LINK += echo; echo; echo "Run install.sh as root from the build directory to install."; echo; echo;$/s/^/#/' ${srcdir}/wfview/wfview.pro
}

build() {
  cd "${srcdir}"
  mkdir -p build
  cd build
  qmake ../wfview/wfview.pro
  make 
}


package() {
  install -D "${srcdir}/build/wfview" "$pkgdir/usr/bin/wfview"
  install -D "${srcdir}/build/wfview.desktop" "$pkgdir/usr/share/applications/wfview.desktop"
  install -D "${srcdir}/build/wfview.png" "$pkgdir/usr/share/pixmaps/wfview.png"
  mkdir -p "$pkgdir/usr/share/wfview/stylesheets/qdarkstyle"
  cp -rv "${srcdir}/build/qdarkstyle" -t "$pkgdir/usr/share/wfview/stylesheets"
}
