# Maintainer: Lucas Pape <development@lucaspape.de>

_npmname=monitoring.js
_npmver=1.0.5
pkgname=monitoring.js
pkgver=1.0.5
pkgrel=2
pkgdesc="Run commands on local/remote servers and send messages when they fail"
arch=('i686' 'x86_64')
depends=('nodejs' 'openssh')
makedepends=('npm')
url="https://github.com/lucaspape/monitoring.js"
license=('GPL3')
source=("${pkgname}-${pkgver}.tgz::https://registry.npmjs.org/monitoring.js/-/monitoring.js-${pkgver}.tgz")
sha512sums=('SKIP')

package() {
  cd ${srcdir}
  local _npmdir="${pkgdir}/usr/lib/node_modules/"
  mkdir -p ${_npmdir}
  cd ${_npmdir}
  npm install -g --prefix "${pkgdir}/usr" ${_npmname}@${_npmver}

  mkdir "${pkgdir}/usr/bin/"
  mkdir -p "${pkgdir}/etc/monitoring.js/"
  mkdir -p "${pkgdir}/etc/systemd/system/"

  cp "${srcdir}/package/scripts/monitoring.js" "${pkgdir}/usr/bin/"
  cp "${srcdir}/package/scripts/monitoring.js-setup" "${pkgdir}/usr/bin/"
  cp "${srcdir}/package/scripts/monitoring-js.service" "${pkgdir}/etc/systemd/system/"

  chmod -R +x ${pkgdir}/usr/bin/
  chmod -R 755 ${pkgdir}/usr/lib/node_modules/
}
