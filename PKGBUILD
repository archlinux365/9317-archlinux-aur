# Maintainer: Julian Hornich <julianhornich@googlemail.com>

pkgname=kerncraft-git
pkgrel=5
pkgver=199
pkgdesc="Loop Kernel Analysis and Performance Modeling Toolkit"
arch=('i686' 'x86_64')
url="https://github.com/RRZE-HPC/kerncraft"
license=('GPLv3')
# iaca does currently not build from AUR. You might want to install it by hand and uncomment it here
depends=('python2>=2.7' 'python2-yaml' 'likwid' 'iaca' )
makedepends=('git')
optdepends=('intel-compiler-base' 'gcc' 'python2-matplotlib')
source=('git+https://github.com/RRZE-HPC/kerncraft.git')
sha256sums=('SKIP')
provides=('kerncraft')

pkgver() {
  cd ${srcdir}/kerncraft
  echo "r"$(git rev-list --count master)
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd ${srcdir}/kerncraft

  # install package
  python2 setup.py install --root="${pkgdir}"

  # examples
  mkdir -p ${pkgdir}/usr/share/${pkgname}
  cp -a ${srcdir}/kerncraft/examples ${pkgdir}/usr/share/${pkgname}/
  chmod -R 644 ${pkgdir}/usr/share/${pkgname}

  # license
  install -Dm644 ${srcdir}/kerncraft/LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
