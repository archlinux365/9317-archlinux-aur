# Maintainer: Kaizhao Zhang <zhangkaizhao@gmail.com>

_name=XSStrike

pkgname=xsstrike
pkgver=3.1.1
pkgrel=1
pkgdesc="Advanced XSS Detection Suite"
arch=('any')
url="https://somdev.me/XSStrike/"
license=('GPL3')
depends=('python>=3.4' 'python-tld' 'python-fuzzywuzzy' 'python-requests' 'python-selenium')
options=(!emptydirs)
source=("https://github.com/s0md3v/XSStrike/archive/${pkgver}.tar.gz")
sha256sums=('aed86d3d1e71e245978a5bd5d1bb8e4fe78ef41d8cbd9c113126fbf7e32f12ca')

prepare() {
  rm -rf "${pkgdir}/usr/lib/${pkgname}"
}

package() {
  cd "${srcdir}"

  install -d "${pkgdir}/usr/bin"
  install -d "${pkgdir}/usr/lib/${pkgname}"

  cp -r "${srcdir}"/"${_name}"-"${pkgver}"/{core,db,modes,xsstrike.py} "${pkgdir}/usr/lib/${pkgname}/"
  chmod +x "${pkgdir}/usr/lib/${pkgname}/xsstrike.py"
  ln -s "/usr/lib/${pkgname}/xsstrike.py" "${pkgdir}/usr/bin/xsstrike"

  cd "${srcdir}/${_name}-${pkgver}"
  install -Dm644 README.md "${pkgdir}/usr/share/doc/${pkgname}/README.md"
  install -Dm644 CHANGELOG.md "${pkgdir}/usr/share/doc/${pkgname}/CHANGELOG.md"
  install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
