# Maintainer: Brandon Clifford <brandon099 at gmail dot com>
_pkgname=siji
pkgname=${_pkgname}-git
pkgver=r18.ea240bd
pkgrel=1
pkgdesc='Iconic bitmap font based on stlarch with additional glyphs'
arch=('any')
url='https://github.com/stark/siji'
depends=('fontconfig' 'xorg-font-utils')
optdepends=('xorg-xfd: use view.sh script to view glyphs')
makedepends=('git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_pkgname}::git+https://github.com/stark/siji")
install=$pkgname.install
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/${_pkgname}"
  install -D -m644 pcf/siji.pcf "${pkgdir}/usr/share/fonts/misc/siji.pcf"
  install -D -m755 view.sh "${pkgdir}/usr/share/${_pkgname}/view.sh"
}
