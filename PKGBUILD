# Maintainer: Mathias Nedrebø <mathias.nedrebo@zivid.com>

pkgname=zivid-genicam
pkgver='2.0.0_beta_1+6b13d5ad_356'
pkgrel=1
pkgdesc='Defining the Future of 3D Machine Vision'
arch=('x86_64')
license=('custom')
url=https://www.zivid.com

depends=(zivid)
conflicts=()
provides=()

groups=(zivid-all)

source=(https://www.zivid.com/hubfs/softwarefiles/releases/2.0.0-beta-1+6b13d5ad-356/u18/zivid-genicam_2.0.0-beta-1+6b13d5ad-356_amd64.deb)
sha256sums=(b86cb6d0d8eda5a687ad96c22e6693285ba188f719ac7bd4afc8ec1fee13e499)

options=(!strip)

package() {
    bsdtar -xf data.tar.*z -C "${pkgdir}"
}
