# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor-bin
pkgver=0.5.0
pkgrel=1
pkgdesc="A Rust-VMM based cloud hypervisor from Intel (binary source)"
url="https://github.com/cloud-hypervisor/cloud-hypervisor"
arch=('x86_64')
license=('Apache:2.0')
depends=('virtiofsd')
makedepends=('rust')
provides=('cloud-hypervisor')
conflicts=('cloud-hypervisor')
source=(
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor"
)
sha512sums=(
  '6eff70da75a8837cddf0fc72477199411b872406a7fe105997330823ec3cf004e082f513a12d40ca41dc862e16b7f8e437c57193e9563eaca528125d0a48386b'
)

package() {
  install -Dm755 {${srcdir},${pkgdir}/usr/bin}/cloud-hypervisor
}
