# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>

pkgname=pomerium-cli-bin
pkgver=0.17.2
pkgrel=1
pkgdesc='CLI component for Pomerium'
arch=('x86_64' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/pomerium/cli"
license=('Apache')
provides=('pomerium-cli')
conflicts=('pomerium-cli')
source_x86_64=("${pkgname}-${pkgver}-x86_64.tar.gz::$url/releases/download/v${pkgver}/pomerium-cli-linux-amd64.tar.gz")
source_armv6h=("${pkgname}-${pkgver}-armv6h.tar.gz::$url/releases/download/v${pkgver}/pomerium-cli-linux-armv6.tar.gz")
source_armv7h=("${pkgname}-${pkgver}-armv7h.tar.gz::$url/releases/download/v${pkgver}/pomerium-cli-linux-armv7.tar.gz")
source_aarch64=("${pkgname}-${pkgver}-aarch64.tar.gz::$url/releases/download/v${pkgver}/pomerium-cli-linux-arm64.tar.gz")
sha256sums_x86_64=('11d7dde39c2f60283e538f3a384af2b8700ac2e1c602c0ce049e69c19202fc2e')
sha256sums_armv6h=('459acc1e944e439a3f970e4c0c354146bbaf8d490641c7d98d796a0966e78370')
sha256sums_armv7h=('8f94a36b7fa58aa75f3c407bdb3d0e92010ce9216b4ca06547d0c796b41523b1')
sha256sums_aarch64=('ca662124edfe9212ce673246daa084e16c25621326fa96953c1bf2aacec42476')

package() {
	install -D pomerium-cli -t "${pkgdir}/usr/bin"
}
