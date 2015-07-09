# Maintainer: Miguel Revilla <yo@miguelrevilla.com>
# Contributor: josephgbr <rafael.f.f1@gmail.com>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=libtiff3
pkgver=3.9.7
pkgrel=1
pkgdesc="Library for manipulation of TIFF images, legacy version, links to libtiff.so.3"
arch=('any')
url="http://www.remotesensing.org/libtiff/"
license=('custom')
depends=('libtiff4')
optdepends=('freeglut: for using tiffgt')
options=('!libtool')

package() {
  cd "${pkgdir}"
  mkdir usr
  mkdir usr/lib
  cd usr/lib
  ln -s libtiff.so.${pkgver} libtiff.so.3
  ln -s libtiffxx.so.${pkgver} libtiffxx.so.3
  cd ..
  mkdir share
  mkdir share/licenses
  cd share/licenses
  ln -s libtiff4 libtiff3
}
