# Maintainer: zer0def <zer0def@github>
pkgname=cloud-hypervisor-bin
pkgver=17.0
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
  f262081e1100ca3663fb490ff5450fb8398c5bfff27d677278766a96eaa13d0224f41a711e276380e4adcdcc6f014bed3db7ccf285ff832df95c4d5e1379f2a3
  40b8cc480682bc3013b05fc29633ee5dabeb2f00381027f8c11f333bebdde6d0d1e4385f5660a730ddcfe127fe03fdda842f3b67f4480e69436326a88c000ec7
  df18aff72b1838506b22371e764e8a10921c3a631fc3e9a61b34c468e74066a20a037885518a480a054aca1e26c4f051ff5706d895d6d7d508014f23df589013
)
b2sums=(
  0326106051e80a729feec0114f8f818693eeac2d0a820a0fc9586335652db6feea13208f0dd425d18813336897f2bf7c1c160c4a714eb73f75f8514d0824ffb1
  8d05a1c266c613a741cf4a8bf732761ffe407e7bf5eb8361e51d54f264df8361a1ad56cbae325a2245b2cfb3b6dfdc2d2b15cf4b2ffaf8ca652c7beb74a7192a
  22f1a9ddf393188b6c815a22eb12cf2d59adbd17fee01d60ce2e14e8512c74315f937bc0cdc3f4c9f9d3873b3947519dbe5e29fec0ea2325dd1c111d000d4e37
)

package() {
  install -Dm755 -t "${pkgdir}/usr/bin" \
    "${srcdir}/ch-remote" \
    "${srcdir}/cloud-hypervisor" \
    "${srcdir}/cloud-hypervisor-static"
}
