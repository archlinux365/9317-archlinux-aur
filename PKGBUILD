# Maintainer: Uffe Jakobsen <uffe@uffe.org>

pkgname=tapclean-cvs
pkgver=20170721
pkgrel=1
pkgdesc="Commodore tape preservation and restoration tool"
arch=('i686' 'x86_64')
url="https://sourceforge.net/projects/tapclean"
license=('GPL2')
_pkgname=tapclean
_pkgver="src"
depends=()
conflict=("tapclean")
source=("${_pkgname}-${_pkgver}.tgz::http://tapclean.cvs.sourceforge.net/viewvc/tapclean/${_pkgname}/?view=tar")

md5sums=('SKIP') 


pkgver() {
  cd "${srcdir}/${_pkgname}"
  #printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  date +%Y%m%d
}

build() {
  cd "${srcdir}/${_pkgname}/src"
  make CFLAGS+=
}

package() {
  cd "${srcdir}/${_pkgname}/src"
  install -D --mode=0755 tapclean "${pkgdir}/usr/bin/tapclean"
}
