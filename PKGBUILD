# Maintainer : Ashwin Vishnu <y4d71nsar@relay.firefox.com>
# Maintainer: Carlos Aznarán <caznaranl@uni.pe>
_base=mamba
pkgname=micro${_base}-bin
pkgver=0.23.2
pkgrel=1
pkgdesc="Tiny version of mamba, the fast conda package installer"
arch=('x86_64')
url="https://github.com/${_base}-org/${_base}"
license=('custom:BSD-3-clause')
source=("${pkgname%-bin}-${pkgver}.tar.bz2::https://api.anaconda.org/download/conda-forge/${pkgname%-bin}/${pkgver}/linux-64/${pkgname%-bin}-${pkgver}-0.tar.bz2")
options=(strip)
depends=(glibc)
provides=("${pkgname%-bin}")
conflicts=("${pkgname%-bin}")
sha512sums=('f2b9f45dd83f0e55019c6715fcac328394205a42fb9b95001e97d8178af55e2375361e0f920e0397bf913939fe75c73f2b0d21d65cc434b82f9e7371dceaa188')

check() {
  export PREFIX="${srcdir}"
  export PATH="${PREFIX}/bin:${PATH}"
  echo "Testing with ${PREFIX}/bin/${pkgname%-bin}"
  bash info/test/run_test.sh
}

package() {
  install -Dm775 "bin/${pkgname%-bin}" "${pkgdir}/usr/bin/${pkgname%-bin}"
  install -Dm 644 info/licenses/LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
}
