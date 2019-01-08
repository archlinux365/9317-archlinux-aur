# Maintainer: Daniel Milde <daniel@milde.cz>
# Based on https://github.com/aerospike/aerospike-client-c

pkgname=aerospike-client-c-libevent
pkgver=4.4.0
pkgrel=1
pkgdesc="The Aerospike C client provides a C interface for interacting with the Aerospike Database."
arch=('any')
url="https://github.com/aerospike/aerospike-client-c"
license=('apache')
depends=('libevent' 'python2')
makedepends=('git')
provides=('aerospike-client-c')
conflicts=('aerospike-client-c-libev' 'aerospike-client-c-libuv')
_gitroot="https://github.com/aerospike/aerospike-client-c.git"
_gitname="aerospike-client-c"

build() {
  cd ${srcdir}/

  if [[ -d ${srcdir}/${_gitname} ]] ; then
    rm -rf "${srcdir}/${_gitname}"
  fi

  git clone --recursive --branch ${pkgver} ${_gitroot}

  cd ${srcdir}/${_gitname}/

  make EVENT_LIB=libevent
}

package() {

  mkdir -p -m 755 "${pkgdir}/usr/include"
  mkdir -p -m 755 "${pkgdir}/usr/lib/"
  mkdir -p -m 755 "${pkgdir}/opt/aerospike/client/sys/udf/lua/"
  mkdir -p -m 755 "${pkgdir}/opt/aerospike/client/usr/udf/lua/"

  cd ${srcdir}/${_gitname}/

  cp -r target/Linux-x86_64/include/aerospike/ "${pkgdir}/usr/include/"
  cp -r target/Linux-x86_64/include/citrusleaf/ "${pkgdir}/usr/include/"

  install -Dm644 target/Linux-x86_64/lib/libaerospike.a "${pkgdir}/usr/lib/"
}
