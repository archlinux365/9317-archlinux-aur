# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Steffen Vogel <post@steffenvogel.de>

pkgname='cunicu-bin'
pkgver=0.2.2
pkgrel=1
pkgdesc='A zeroconf peer-to-peer mesh VPN using Wireguard® and Interactive Connectivity Establishment (ICE)'
url='https://cunicu.li'
arch=('aarch64' 'armv7h' 'i686' 'x86_64')
license=('Apache-2.0')
provides=('cunicu')
conflicts=('cunicu')
optdepends=('bash-completion: for shell completions' 'wireguard-tools: for controlling WireGuard interfaces')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/stv0g/cunicu/releases/download/v0.2.2/cunicu_0.2.2_linux_arm64.tar.gz")
sha256sums_aarch64=('744083059f0a994d6a86ffd5142489163e1ea82dacfc4f2ba82af53c528bbf7a')

source_armv7h=("${pkgname}_${pkgver}_armv7h.tar.gz::https://github.com/stv0g/cunicu/releases/download/v0.2.2/cunicu_0.2.2_linux_armv7.tar.gz")
sha256sums_armv7h=('681cae8ae3da56aaff233dcb6a33252c57fa8d63cc9f3a033e0470b63f2eaef2')

source_i686=("${pkgname}_${pkgver}_i686.tar.gz::https://github.com/stv0g/cunicu/releases/download/v0.2.2/cunicu_0.2.2_linux_386.tar.gz")
sha256sums_i686=('3b6bd15981c95297f75264895ea4c6039f30ef90b879434c4ea5dc79235d3fe0')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/stv0g/cunicu/releases/download/v0.2.2/cunicu_0.2.2_linux_amd64.tar.gz")
sha256sums_x86_64=('ccb322dc7461a1613af0429fa465e039094c3206305ed0e2654785c7d413e54c')

package() {
  # bin
  install -Dm755 "./cunicu" "${pkgdir}/usr/bin/cunicu"

  # config
  install -Dm644 "./etc/cunicu.yaml" "${pkgdir}/etc/cunicu.example.yaml"
  install -Dm644 "./etc/systemd/cunicu.service" "${pkgdir}/usr/lib/systemd/cunicu.service"

  # license
  install -Dm644 "./LICENSE" "${pkgdir}/usr/share/licenses/cunicu/LICENSE"

  # manpages
  install -Dm644 ./man/*.1 "${pkgdir}/usr/share/man/man1"

  # completions
  mkdir -p "${pkgdir}/usr/share/bash-completion/completions/"
  mkdir -p "${pkgdir}/usr/share/zsh/site-functions/"
  mkdir -p "${pkgdir}/usr/share/fish/vendor_completions.d/"
  install -Dm644 "./completions/cunicu.bash" "${pkgdir}/usr/share/bash-completion/completions/cunicu"
  install -Dm644 "./completions/cunicu.zsh" "${pkgdir}/usr/share/zsh/site-functions/_cunicu"
  install -Dm644 "./completions/cunicu.fish" "${pkgdir}/usr/share/fish/vendor_completions.d/cunicu.fish"
}
