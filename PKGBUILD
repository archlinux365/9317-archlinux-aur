# Maintainer: Fabio Loli <loli_fabio@protonmail.com> -> https://github.com/FabioLolix

pkgname=textilosaurus
pkgver=2018.02.05
pkgrel=1
pkgdesc="Simple cross-platform text editor based on Qt and Scintilla"
arch=('x86_64')
url="https://github.com/martinrotter/textilosaurus"
license=(GPL3)
depends=('qt5-base' 'qt5-svg')
makedepends=('qt5-tools')
optdepends=()
provides=('textilosaurus')
conflicts=('textilosaurus' 'textilosaurus-git')
source=("https://github.com/martinrotter/textilosaurus/archive/${pkgver}.tar.gz")
md5sums=('93c0138b5d5faf474bfa0c3730cab102')

prepare() {
  cd ${srcdir}/${pkgname}-${pkgver}
  install -d build
}

build() {
  cd ${srcdir}/${pkgname}-${pkgver}/build
  qmake ../textilosaurus.pro -r CONFIG+=release PREFIX=/usr
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}/build
  make install INSTALL_ROOT=${pkgdir}/
}
