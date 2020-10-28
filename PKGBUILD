# Maintainer: Adam Havelka <me@uxes.cz>

pkgname=jcloisterzone5
pkgver=5.0.17
pkgrel=1
pkgdesc='A Java version of the Carcassonne board game.'
arch=('any')
url="http://jcloisterzone.com/en/"
license=('AGPL')
depends=('java-runtime>=11' 'nodejs>=12.13.0')
conflicts=('jcloisterzone')
source=("https://github.com/farin/JCloisterZone-Client/releases/download/v${pkgver}/jcloisterzone-${pkgver}.deb")
sha256sums=('2ffea9eff59df23e414181d5dc9224a173e9c753d237544616fb7cd54d7ce3f1')
options=('!strip')

package() {
  bsdtar -xv -C "${pkgdir}" -f "${srcdir}/data.tar.xz"
}
