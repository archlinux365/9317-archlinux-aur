#Maintainer: Josh Münte
#Auto generated. Do not edit.
_pkgname='knockson'
pkgname="${_pkgname}-bin"
pkgver=0.7.0
pkgrel=1
pkgdesc='simple multi-threaded port scanner written in rust'
arch=('x86_64')
url='https://github.com/joshmuente/knockson'
_url_source='https://github.com/joshmuente/knockson'
license=('MIT')
depends=()
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("${_url_source}/releases/download/v${pkgver}/${_pkgname}_v${pkgver}_${arch}-unknown-linux-musl.tar.xz")
sha256sums=('Not Found')

package () {
  install -Dm 775 "${_pkgname}" "${pkgdir}/usr/bin/${_pkgname}"
}