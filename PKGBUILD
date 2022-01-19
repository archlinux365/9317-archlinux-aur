# Maintainer  : Chris Billington <chrisjbillington@gmail.com>
pkgname=python-mkl-service-bin
_pkgname=mkl-service
_pkgver=2.4.0
_build=py310h7f8727e_0
pkgver="${_pkgver}.anaconda${_build##*_}"
pkgrel=3
epoch=1
pkgdesc="Python bindings to MKL service functions - prebuilt binaries from Anaconda"
arch=('x86_64')
url="https://github.com/IntelPython/mkl-service"
license=('custom')
provides=('python-mkl-service')
conflicts=('python-mkl-service')
depends=('python' 'intel-mkl')
makedepends=('jq')
source=("https://repo.anaconda.com/pkgs/main/linux-64/${_pkgname}-${_pkgver}-${_build}.tar.bz2")
sha256sums=('6704d413c29ff9976ad9f08373806c21ef2444ce072a67663023a0d87d3de13f')

prepare() {
  # Prefix replacement
  for row in $(jq -c '.paths[] | select(has("prefix_placeholder"))' "info/paths.json"); do
    path=$(echo $row | jq -r '._path')
    prefix=$(echo $row | jq -r '.prefix_placeholder')
    sed -i "s:${prefix}:/usr:g" "${path}"
  done
}

package() {
  mkdir "${pkgdir}/usr"
  cp -drp --no-preserve=ownership "${srcdir}/lib" "${pkgdir}/usr/lib"
  install -D -m 644 "${srcdir}/info/licenses/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
