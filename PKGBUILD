# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=iredis-bin
pkgver=1.9.1
pkgrel=1
pkgdesc="A Terminal Client for Redis with AutoCompletion and Syntax Highlighting"
arch=('x86_64')
url='https://iredis.io'
license=("custom:${pkgname}")
provides=('iredis')
depends=('bash' 'python')
noextract=("${pkgname}-${pkgver}.tar.gz")
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/laixintao/iredis/releases/download/v${pkgver}/iredis.tar.gz"
        'LICENSE::https://raw.githubusercontent.com/laixintao/iredis/master/LICENSE')
sha256sums=('ae551c7bb00acd6501463d7fd8d84eac90ca2b6cf85ad76471039660e648c09f'
            'fb40cd56a42a6a3854ac72e2217889bd29c61d9488c96c41115c2419707c3d83')

package() {
  mkdir -p ${pkgdir}/usr/lib/iredis
  mkdir -p ${pkgdir}/usr/bin
  tar xvf ${pkgname}-${pkgver}.tar.gz -C ${pkgdir}/usr/lib/iredis
  chown -R root:root ${pkgdir}/usr/lib/iredis
  chmod 755 ${pkgdir}/usr/lib/iredis/iredis
  ln -s /usr/lib/iredis/iredis ${pkgdir}/usr/bin
  install -Dm644 LICENSE ${pkgdir}/usr/share/licenses/iredis-bin/LICENSE
}
