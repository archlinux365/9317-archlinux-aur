# Contributor: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=openlayers
pkgver=6.1.1
pkgrel=1
pkgdesc='high-performance, feature-packed JavaScript library for displaying map data'
arch=('any')
url='http://openlayers.org/'
license=('BSD')
source=("${pkgname}-${pkgver}.zip::https://github.com/openlayers/openlayers/releases/download/v${pkgver}/v${pkgver}-dist.zip")
sha256sums=('9513cf83d5a2c6093e8c4321fc50ef03cb16fb7c455858924059f5924b0fa20c')


package() {
  install -d "${pkgdir}/usr/share/javascript/${pkgname}"
  cp -a "v${pkgver}-dist/*" "${pkgdir}/usr/share/javascript/${pkgname}"
}
