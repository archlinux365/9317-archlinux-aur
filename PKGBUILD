# Maintainer: Anatoly Rugalev <anatoly.rugalev gmail com>

pkgname=kubernetes-helmfile-bin
pkgver=0.144.0
pkgrel=2
pkgdesc="Deploy Kubernetes Helm Charts"
url="https://github.com/roboll/helmfile"
license=('MIT')
arch=('x86_64' 'aarch64' 'i486' 'i686')
depends=('helm')

source_x86_64=("helmfile_linux_${pkgver}_x86_64::https://github.com/roboll/helmfile/releases/download/v${pkgver}/helmfile_linux_amd64")
source_i486=("helmfile_linux_${pkgver}_i486::https://github.com/roboll/helmfile/releases/download/v${pkgver}/helmfile_linux_386")
source_i686=("helmfile_linux_${pkgver}_i686::https://github.com/roboll/helmfile/releases/download/v${pkgver}/helmfile_linux_386")
source_aarch64=("helmfile_linux_${pkgver}_aarch64::https://github.com/roboll/helmfile/releases/download/v${pkgver}/helmfile_linux_arm64")

package() {
  cd "${srcdir}"
  install -d "${pkgdir}/usr/bin"
  install -m755 helmfile_linux_${pkgver}_${CARCH} "${pkgdir}/usr/bin/helmfile"
}

sha256sums_x86_64=('dcf865a715028d3a61e2fec09f2a0beaeb7ff10cde32e096bf94aeb9a6eb4f02')
sha256sums_aarch64=('8461bbb13ba23f4333dc99d96bf7a24c283cd7683e746acf639d80bbd828926a')
sha256sums_i486=('7c75e13b062ebbe1ea09120f5ca03556895482ea92c545c13148407005eb1a66')
sha256sums_i686=('7c75e13b062ebbe1ea09120f5ca03556895482ea92c545c13148407005eb1a66')
