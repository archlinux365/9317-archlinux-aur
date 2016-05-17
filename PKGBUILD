# Maintainer: Samuel Mesa <samuelmesa at linuxmail.org>

pkgname=taudem
_pkgname=TauDEM-QGIS
pkgver=5.1.2
pkgrel=4
pkgdesc="Suite of Digital Elevation Model (DEM) tools for the extraction and analysis of hydrologic information from topography as represented by a DEM"
arch=(i686 x86_64)
url="http://hydrology.uwrl.usu.edu/taudem"
license=('GPL')
depends=()
makedepends=('mpich2' 'cmake')
optdepends=()
provides=()
conflicts=()
replaces=()
options=('!makeflags')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/rozos/${_pkgname}/archive/v${pkgver}-lw.tar.gz")
md5sums=('92bc9db36c9f1f44cc02f7f539969482')

build() {   
  srcdir=${srcdir}/${_pkgname}-${pkgver}-lw/src

  cd ${srcdir}/shape
  make all

  cd ${srcdir}/shapelib
  make all

  cd ${srcdir}
    make all
}

package() {
  cd  ${srcdir}/${_pkgname}-${pkgver}-lw

  install -d ${pkgdir}/usr/local/bin
  install -d ${pkgdir}/usr/lib/python2.7/site-packages

  install -Dm755 aread8 "${pkgdir}/usr/local/bin/aread8"
  install -Dm755 areadinf "${pkgdir}/usr/local/bin/areadinf"
  install -Dm755 d8flowdir "${pkgdir}/usr/local/bin/d8flowdir"
  install -Dm755 d8flowpathextremeup "${pkgdir}/usr/local/bin/d8flowpathextremeup"
  install -Dm755 d8hdisttostrm "${pkgdir}/usr/local/bin/d8hdisttostrm"
  install -Dm755 dinfavalanche "${pkgdir}/usr/local/bin/dinfavalanche"
  install -Dm755 dinfconclimaccum "${pkgdir}/usr/local/bin/dinfconclimaccum"
  install -Dm755 dinfdecayaccum "${pkgdir}/usr/local/bin/dinfdecayaccum"
  install -Dm755 dinfdistdown "${pkgdir}/usr/local/bin/dinfdistdown"
  install -Dm755 dinfdistup "${pkgdir}/usr/local/bin/dinfdistup"
  install -Dm755 dinfflowdir "${pkgdir}/usr/local/bin/dinfflowdir"
  install -Dm755 dinfrevaccum "${pkgdir}/usr/local/bin/dinfrevaccum"
  install -Dm755 dinftranslimaccum "${pkgdir}/usr/local/bin/dinftranslimaccum"
  install -Dm755 dinfupdependence "${pkgdir}/usr/local/bin/dinfupdependence"
  install -Dm755 dropanalysis "${pkgdir}/usr/local/bin/dropanalysis"
  install -Dm755 gridnet "${pkgdir}/usr/local/bin/gridnet"
  install -Dm755 lengtharea "${pkgdir}/usr/local/bin/lengtharea"
  install -Dm755 moveoutletstostrm "${pkgdir}/usr/local/bin/moveoutletstostrm"
  install -Dm755 peukerdouglas "${pkgdir}/usr/local/bin/peukerdouglas"
  install -Dm755 pitremove "${pkgdir}/usr/local/bin/pitremove"
  install -Dm755 slopearea "${pkgdir}/usr/local/bin/slopearea"
  install -Dm755 slopearearatio "${pkgdir}/usr/local/bin/slopearearatio"
  install -Dm755 slopeavedown "${pkgdir}/usr/local/bin/slopeavedown"
  install -Dm755 streamnet "${pkgdir}/usr/local/bin/streamnet"
  install -Dm755 threshold "${pkgdir}/usr/local/bin/threshold"
  install -Dm755 TauDEM.py ${pkgdir}/usr/lib/python2.7/site-packages
}  




