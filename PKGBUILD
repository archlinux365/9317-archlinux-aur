# Maintainer: Benjamin Denhartog <ben@sudoforge.com>
# Contributor: Andreas 'Segaja' Schleifer <archlinux at segaja dot de>

pkgname=terragrunt
pkgver=0.23.35
pkgrel=1
pkgdesc="A thin wrapper for Terraform that provides extra tools for working with multiple Terraform modules"
url="https://github.com/gruntwork-io/terragrunt"
arch=('x86_64')
makedepends=(
  'git'
  'go'
)
depends=('glibc' 'terraform')
license=('MIT')
source=(${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz)
sha256sums=('fadfe566bcf662a9f62ccf44f4e66fbc11b7d05ab6168c7707a9c1e4b243e6ab')

build() {
  cd ${pkgname}-${pkgver}

  export GO11MODULE=on
  export CGO_LDFLAGS="${LDFLAGS}"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS}"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export GOFLAGS="-buildmode=pie -trimpath"

  go build -o "./out/${pkgname}"
}

package() {
  cd ${pkgname}-${pkgver}

  install -D -m 644 LICENSE.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -D -m 755 "./out/${pkgname}" "${pkgdir}/usr/bin/${pkgname}"
}

# vim:set ts=2 sw=2 et:
