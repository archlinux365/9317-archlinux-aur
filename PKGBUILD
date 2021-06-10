# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor-bin
pkgver=16.0
pkgrel=1
pkgdesc="A Rust-VMM based cloud hypervisor from Intel (binary source)"
url="https://github.com/cloud-hypervisor/cloud-hypervisor"
arch=('x86_64')
license=('Apache:2.0')
optdepends=(
  'qemu-headless'  # for /usr/lib/qemu/virtiofsd
)
provides=('cloud-hypervisor')
conflicts=('cloud-hypervisor')
source=(
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/ch-remote"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor"
  "https://github.com/cloud-hypervisor/cloud-hypervisor/releases/download/v${pkgver}/cloud-hypervisor-static"
)
sha512sums=(
  a1bea25c55e25e0d1d4a79bdc571bd05810ea4fb633173205a32767d7f61608c2c79a1a2260a87e825cd79f3f3c60574fcbc4eeec99daa73378f80581b47f51e
  ec79f5a3d9dc5105275fd4c7f6ea173268403c096d1d08ae5e307bc48e779f5f66b592e296873eac81ecf0058ff3f4ae64dc628a53dfc4d9d2964aceb8a8b4c7
  6afc5255371aac63ed9eeeffbaf8b4a7985604912d096063665dbeaeaf935543ea3f7878799dcbc066ec32d4fcf68902790678dbd0f5d1d5d37f59eb062f910b
)
b2sums=(
  7f19e21f9316aa0f92ffa9e7cfd75c7e98b8055a00a233b05fe5010198992ad8052796e17608009564297071f12b3f5804c20950f1d8a93134c9bf06626273dc
  8ba3d5223b907ddac805c6a32fd4fb8d0867887cd1f14d07d7e2d9be6e01bb1adafff48994716be40fd6ee55f7af38ad4c20eb69490051aefd413c11e2cbd1bb
  7cdc2126fb2852f18356b1bd04e846a40185f644954b823a5850016c7592af91c224944f1da9fc2c3e61358ac3485b965a82423591862b3cef51d767db35d0b4
)

package() {
  install -Dm755 -t "${pkgdir}/usr/bin" \
    "${srcdir}/ch-remote" \
    "${srcdir}/cloud-hypervisor" \
    "${srcdir}/cloud-hypervisor-static"
}
