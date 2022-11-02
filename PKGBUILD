_pkgname=openssl
_pkgver=3.0
pkgname="${_pkgname}-${_pkgver}-bin"
pkgver=3.0.7
pkgrel=1
pkgdesc="Toolkit for the Transport Layer Security (TLS) and Secure Sockets Layer (SSL) protocols.  Can be installed alongside OpenSSL 1."
arch=('i686' 'x86_64')
url="https://www.openssl.org/"
license=('apache')
depends=('glibc' 'perl')
provides=('openssl-3.0' 'openssl3-git' 'openssl-git')
conflicts=('openssl-3.0' 'openssl3-git' 'openssl-git')
makedepends=('git')
optdepends=('ca-certificates')
options=('staticlibs')
source=(
  # https://packages.debian.org/sid/libssl3
  "http://ftp.debian.org/debian/pool/main/o/openssl/libssl3_${pkgver}-${pkgrel}_amd64.deb"
)
sha256sums=(
  '83b44b9624711f954d91a4b0414b2f8d46fbc00a222e4c20614c16337a872762'
)

prepare() {
  cd "${srcdir}"
  tar xf "${srcdir}/data.tar.xz"
}

package() {
  install -d "${pkgdir}/usr/lib"

  cp -r "${srcdir}/usr/lib/x86_64-linux-gnu" "${pkgdir}/usr/lib/openssl-${_pkgver}"
  mv "${pkgdir}/usr/lib/openssl-${_pkgver}/libcrypto.so.3" "${pkgdir}/usr/lib/"
  mv "${pkgdir}/usr/lib/openssl-${_pkgver}/libssl.so.3" "${pkgdir}/usr/lib/"
  ln -sf ../libcrypto.so.3 "${pkgdir}/usr/lib/openssl-${_pkgver}/libcrypto.so"
  ln -sf ../libssl.so.3 "${pkgdir}/usr/lib/openssl-${_pkgver}/libssl.so"
}
