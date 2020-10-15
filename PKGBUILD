# Maintainer: Jean-Francois Chevrette <jfchevrette@gmail.com>

pkgname=ocm-cli-bin
pkgver=0.1.44
pkgrel=1
pkgdesc="This project contains the ocm command line tool that simplifies the use of the OCM API available at api.openshift.com."
url="https://github.com/openshift-online/ocm-cli"
license=('Apache')
arch=('x86_64')
depends=()
conflicts=()
source=("https://github.com/openshift-online/ocm-cli/releases/download/v${pkgver}/ocm-linux-amd64")
sha256sums=('64a963d5a195a2e51ed24eeb006b799e84faedd8be49a101e276853203fb684f')

prepare() {
  rm -f "${srcdir}ocm-linux-amd64"
}

package() {
  install -Dm755 "${srcdir}/ocm-linux-amd64" "${pkgdir}/usr/bin/ocm"
}
