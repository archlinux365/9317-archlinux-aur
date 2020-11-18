# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=orchestrator-bin
pkgver=3.2.3
pkgrel=1
pkgdesc='MySQL high availability and replication management tool, runs as a service and provides command line access, HTTP API and Web interface'
arch=('i686' 'x86_64')
url='https://github.com/openark/orchestrator'
license=('Apache')
options=('!emptydirs')
depends=('bash')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/openark/orchestrator/releases/download/v${pkgver}/orchestrator-${pkgver}-linux-amd64.tar.gz")
noextract=("${pkgname}-${pkgver}.tar.gz::")
sha256sums=('73867476805d7cb972d27acdf4f94fa74ddd5cec700ed39bc7dbc932916bb6b5')

package() {
  tar xf "${srcdir}"/*.tar.gz -C "${pkgdir}"
  mkdir -p "${pkgdir}/opt"
  mkdir -p "${pkgdir}/usr/bin"
  mv "${pkgdir}/usr/local/orchestrator" "${pkgdir}/opt/"
  ln -s /opt/orchestrator/orchestrator "${pkgdir}/usr/bin/orchestrator"
  install -d "${pkgdir}/usr/lib/systemd/system"
  mv "${pkgdir}/etc/systemd/system/orchestrator.service" "${pkgdir}/usr/lib/systemd/system"
  rm -rf "${pkgdir}/etc/"
}
# vim:set ts=2 sw=2 et:
