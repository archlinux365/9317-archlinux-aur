# Maintainer: zoe <chp321 at gmail dot com>

pkgname=sportstracker-bin
_pkgname=sportstracker
_PkgName=SportsTracker
pkgver=7.3.0
pkgrel=1
pkgdesc="Application for people which want to record their sporting activities ; stand-alone version with its own java"
url="http://www.saring.de/sportstracker/"
arch=('x86_64')
license=('GPL')
makedepends=('tar')
provides=(sportstracker)
conflicts=(sportstracker)
source=("http://netix.dl.sourceforge.net/project/${_pkgname}/${_PkgName}/${_PkgName}%20${pkgver}/Ubuntu-64bit/${_pkgname}-${pkgver}.deb")
md5sums=('19ef0ba87e3473fb13c6df8d25093faf')

package() {
  cd $srcdir
  ar x "${_pkgname}-${pkgver}.deb"
  tar xvf data.tar.xz
  cp -rp opt $pkgdir
  mkdir -p $pkgdir/usr/share/applications
  cd $pkgdir
  mv opt/${_PkgName}/${_PkgName}.desktop usr/share/applications/
}
