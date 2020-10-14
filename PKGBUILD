# Maintainer: Vasiliy Bukharev <bvp-yar@ya.ru>

pkgname=consul-bin
pkgver=1.8.4
pkgrel=2
pkgdesc='A tool for service discovery, monitoring and configuration.'
#arch=('i686')
#arch=('x86_64')
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://www.consul.io"
license=('MPL')
depends=('glibc')
provides=('consul=1.8.4')
source=('consul.service')
source_i686=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_386.zip")
source_x86_64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_amd64.zip")
source_arm=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armelv5.zip")
source_armv6h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_armv7h=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_armhfv6.zip")
source_aarch64=("https://releases.hashicorp.com/consul/${pkgver}/consul_${pkgver}_linux_arm64.zip")

sha256sums=('cace20b6db0643a4d10f6f14ab7ba23d047376aae48460b48fd265cb3eebc13c')
sha256sums_i686=('be7ccfcaceaa8517919eae58a4f4d215fdbe7ccf1314544aa8e7177e087dc7a7')
sha256sums_x86_64=('0d74525ee101254f1cca436356e8aee51247d460b56fc2b4f7faef8a6853141f')
sha256sums_arm=('32b8aebe32879eac6073d3b228ef28a5c49d1bb03d50acfcb5efb00c2674b37e')
sha256sums_armv6h=('0c115f472582d5bd3adcca060dbf27ad5e34c35d82632ff5d55cf552f25bbd7a')
sha256sums_armv7h=('0c115f472582d5bd3adcca060dbf27ad5e34c35d82632ff5d55cf552f25bbd7a')
sha256sums_aarch64=('e0a6ef017ba04ec8654991ebac0654a2a142d8a15ace259be8397e05da078b82')
options=('!strip')

package() {
  install -Dm755 consul "$pkgdir"/usr/bin/consul
  install -Dm644 consul.service "$pkgdir"/usr/lib/systemd/system/consul.service
  install -d "$pkgdir"/etc/consul.d
}
