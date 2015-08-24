# Maintainer: Felix Yan <felixonmars@archlinux.org>

pkgname=shadowvpn-git
_pkgname=ShadowVPN
pkgver=0.2.0.7.g84135b1
pkgrel=1
pkgdesc="A fast, safe VPN based on libsodium"
arch=('i686' 'x86_64')
url="https://github.com/clowwindy/${_pkgname}"
license=('MIT')
depends=('sh' 'libsodium')
provides=("shadowvpn")
conflicts=("shadowvpn")
makedepends=('git')
options=('!emptydirs')
backup=('etc/shadowvpn/client.conf'
        'etc/shadowvpn/client_down.sh'
        'etc/shadowvpn/client_up.sh'
        'etc/shadowvpn/server.conf'
        'etc/shadowvpn/server_down.sh'
        'etc/shadowvpn/server_up.sh'
        'lib/systemd/system/shadowvpn@.service')
source=("git+https://github.com/rains31/${_pkgname}.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/${_pkgname}"
  git describe --tags | sed 's/^v//;s/-/./g'
}

prepare() {
  cd ${_pkgname}
  rm -rf libsodium

  sed -e 's|SUBDIRS = ../libsodium||' \
      -e 's|AM_CFLAGS = .*libsodium.*$|AM_CFLAGS = -lsodium|' \
      -e 's|libshadowvpn_la_LIBADD = ../libsodium/src/libsodium/libsodium.la||' \
      -i src/Makefile.am
  
  sed -e 's|AC_CONFIG_SUBDIRS([libsodium])||' \
      -i configure.ac 
}

build() {
  cd ${_pkgname}
  git submodule update --init libsodium
  ./autogen.sh
  ./configure --sysconfdir=/etc --disable-static --prefix=/usr
  make
}

package() {
  cd ${_pkgname}
  make DESTDIR="$pkgdir" install
  install -Dm644 samples/shadowvpn@.service "$pkgdir"/lib/systemd/system/shadowvpn@.service
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$_pkgname/COPYING
}
