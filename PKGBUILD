# This file was generated by GoReleaser. DO NOT EDIT.
# Maintainer: Chmouel Boudjnah <chmouel@chmouel.com>

pkgname='gosmee-bin'
pkgver=0.0.4
pkgrel=1
pkgdesc='Gosmee - smee.io forwarder in go'
url='https://github.com/chmouel/gosmee'
arch=('aarch64' 'x86_64')
license=('Apache 2.0')
provides=('gosmee')
conflicts=('gosmee')

source_aarch64=("${pkgname}_${pkgver}_aarch64.tar.gz::https://github.com/chmouel/gosmee/releases/download/0.0.4/gosmee_0.0.4_Linux_arm64.tar.gz")
sha256sums_aarch64=('bc1ec71c0ee1026aba080864e609e9feefd84a11ac69a2b4a49adc7073d81e91')

source_x86_64=("${pkgname}_${pkgver}_x86_64.tar.gz::https://github.com/chmouel/gosmee/releases/download/0.0.4/gosmee_0.0.4_Linux_x86_64.tar.gz")
sha256sums_x86_64=('852ddce188caa7e74ab7ec9c20ceb97ee5620aa0658b6b35ba00dc373fcbb080')

package() {
  install -Dm755 "./gosmee" "${pkgdir}/usr/bin/gosmee"
}
