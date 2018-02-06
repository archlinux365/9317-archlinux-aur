# Maintainer: Raphael Scholer <rascholer@gmail.com>
_pkgname=elementary-xfce
pkgname=${_pkgname}-icons-git
pkgver=0.10.r1.ge9100ac5
pkgrel=1
pkgdesc='Elementary icon-theme with improved Xfce support'
arch=('any')
url="https://github.com/shimmerproject/${_pkgname}"
license=('GPL2')
makedepends=('git')
depends=('adwaita-icon-theme')
conflicts=("${_pkgname}-icons")
provides=("${_pkgname}-icons")
options=(!strip)
source=("git+${url}")
sha256sums=('SKIP')

pkgver() {
  cd "${_pkgname}"
  git describe --long --tags | sed "s/^${_pkgname}.//;s/\([^-]*-g\)/r\1/;s/-/./g"
}

package() {
  install -m 755 -d "${pkgdir}/usr/share/icons"

  cd "${_pkgname}"
  cp -r elementary-xfce{,-dark{,er,est}} "${pkgdir}/usr/share/icons/"

  # Remove unneeded files
  cd "${pkgdir}/usr/share/icons"
  rm elementary-xfce{,-dark{,er,est}}/{AUTHORS,CONTRIBUTORS,LICENSE}
}
# vim:set ts=2 sw=2 et:
