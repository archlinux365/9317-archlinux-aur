# Contributor: Daichi Shinozaki <dsdseg@gmail.com>
# Contributor: SpepS <dreamspepser at yahoo dot it>
# Contributor: Juergen Hoetzel <juergen@archlinux.org>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=('jed-snapshot' 'rgrep')
_pkgver=0.99.20-161
pkgver=${_pkgver//-/.}
_pkgname=${pkgname/-snapshot/}
pkgrel=1
arch=('i686' 'x86_64')
url="http://www.jedsoft.org/snapshots/"
license=('GPL')
depends=('gpm' 'slang' 'libxft')
makedepends=('libxext' 'libxt')
source=("http://www.jedsoft.org/snapshots/jed-pre${_pkgver}.tar.gz")
sha256sums=('580d5b1e4cf4d6987b5d700146371ba34fcc4a48b43a939bd11e280383af8a7f')

install="$pkgname.install"

prepare() {
  cd ${_pkgname}-pre${_pkgver}
  sed \
    -e "s|\(^all.*\)|\1 xjed rgrep|" \
    -e "s|..DEST.*doc|${pkgdir}/usr/share/doc/${pkgname}|g" \
    -i src/Makefile.in 
}

build() {
  cd ${_pkgname}-pre${_pkgver}
  ./configure --prefix=/usr JED_ROOT=/usr/share/jed
  make
}

package_jed-snapshot() {
  pkgdesc="A freely available text editor - Latest development version"
  provides=('jed')
  conflicts=('jed')
  cd ${_pkgname}-pre${_pkgver}
  make DESTDIR="${pkgdir}" install
}

package_rgrep() {
  pkgdesc="Recursive grep"
  install -Dm755 ${_pkgname}-pre${_pkgver}/src/objs/rgrep "$pkgdir"/usr/bin/rgrep
}
