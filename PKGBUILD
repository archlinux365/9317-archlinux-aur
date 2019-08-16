# Maintainer: Stefano Marsili <efanomars@gmx.ch>

pkgname=fofimon
pkgver=0.5
pkgrel=1
pkgdesc="Monitor selected folders and files for modifications"
url='https://www.efanomars.com/utilities/fofimon'
arch=('x86_64')
license=('GPL3')

depends=('glibmm')
makedepends=('cmake' 'gcc' 'doxygen' 'graphviz' 'python')
optdepends=()

#provides=("fofimon")
#replaces=("fofimon")
#conflicts=("fofimon")

source=('git+https://gitlab.com/efanomars/fofimon.git#commit=26349f936bf6263b379124fe16a13c247626caad')
sha512sums=('SKIP')

build() {
  cd "${srcdir}/fofimon"

  ./scripts/install_fofimon.py -b=Release  --installdir="/usr" --no-install --no-sudo
}

package() {
  cd "${srcdir}/fofimon"

  ./scripts/priv/dd_install_fofimon.py -b=Release  --installdir="/usr" --destdir="${pkgdir}" --no-configure --no-make --no-sudo
}
