# Maintainer: Guoyi（"malacology"）<guoyizhang@malacology.net>
# Contributor: Guoyi（"malacology"）<guoyizhang@malacology.net>
# Contributor: Roberto Rossini ("robymetallo") <roberto.rossini.9533@student.uu.se>

pkgname=gblocks-bin
_pkgname=Gblocks
pkgver=0.91b
pkgrel=1
pkgdesc="A program written in ANSI C language that eliminates poorly aligned\
 positions and divergent regions of an alignment of DNA or protein sequences"

url='http://molevol.cmima.csic.es/castresana/Gblocks.html'
arch=('x86_64')

license=('unknown')
depends=('glibc')

source=("http://molevol.cmima.csic.es/castresana/Gblocks/Gblocks_Linux64_${pkgver}.tar.Z")
sha256sums=('563658f03cc5e76234a8aa705bdc149398defec813d3a0c172b5f94c06c880dc')

package() {
  cd ${_pkgname}_${pkgver}
  install -Dm755 ${_pkgname}_$pkgver/$_pkgname "${pkgdir}/usr/bin/${_pkgname}"
}
