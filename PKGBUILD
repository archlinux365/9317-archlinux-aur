# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Vojtěch Aschenbrenner <v@asch.cz>

pkgname=tpacpi-bat
pkgver=3.1
pkgrel=1
pkgdesc="A Perl script with ACPI calls for recent ThinkPads (such as T420 and W520) whose battery thresholds are not supported by tp_smapi"
url="https://github.com/teleshoes/tpacpi-bat"
arch=('x86_64' 'i686')
license=('GPL3')
depends=('perl' 'acpi_call')
conflicts=('tpacpi-bat-git')
source=(https://github.com/teleshoes/${pkgname}/archive/v${pkgver}.tar.gz)
sha512sums=('cdc9e0c0ded96281678199783b4c48ff85a497c90b244a7ce2276b54d7ae4bfa7eb430214bcdb6fabd7478796507b0fbe7fed4b1ab4bc4cdd7bd5ae25f943a77')

package() {
  cd ${srcdir}/${pkgname}-${pkgver}
  install -Dm755 ${pkgname} ${pkgdir}/usr/bin/${pkgname}
  install -Dm644 ${pkgname%-*}.service $pkgdir/usr/lib/systemd/system/${pkgname}.service
}
