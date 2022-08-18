# Maintainer: HaoCheng <ch1994@outlook.com>
pkgname=transfer-bin
pkgver=0.4.17
pkgrel=2
pkgdesc="集合多个API的大文件传输工具."
arch=("x86_64" "aarch64" "i686" "armv7")
url="https://github.com/Mikubill/transfer"
license=("MIT")
provides=("transfer")
conflicts=("transfer-git")
source=("https://github.com/Mikubill/transfer/blob/v${pkgver}/LICENSE")
source_x86_64=("https://github.com/Mikubill/transfer/releases/download/v${pkgver}/transfer_${pkgver}_linux_amd64.tar.gz")
source_i686=("https://github.com/Mikubill/transfer/releases/download/v${pkgver}/transfer_${pkgver}_linux_386.tar.gz")
source_aarch64=("https://github.com/Mikubill/transfer/releases/download/v${pkgver}/transfer_${pkgver}_linux_arm64.tar.gz")
source_armv7=("https://github.com/Mikubill/transfer/releases/download/v${pkgver}/transfer_${pkgver}_linux_armv6.tar.gz")

sha256sums=('6c5720681d4f1dc2758b50b6c14b8d706349966e5e5b30a657eb37f12117ce64')
sha256sums_x86_64=('6906b41e925a7384b9a2fe11cb8da4757b5517c028a789bbccc0b41229795ffc')
sha256sums_aarch64=('57e49b1556b4a1b69560c7244626f6dffe063f6570b360079cc25e04fd8fdc49')
sha256sums_i686=('72b53a334bc58f482079cb7fed7723d8db398d6eb9f613baab10720b2f0c52df')
sha256sums_armv7=('a212b1385ae16ca48ec935a657dc1dfd00847e4b2d5408038dffd93fe5779146')

package() {
	install -D -m755 -T ${srcdir}/transfer ${pkgdir}/usr/bin/transfer
	install -D -m755 -T ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/transfer-bin/LICENSE
}
