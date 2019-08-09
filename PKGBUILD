# Maintainer: Andrew Sun <adsun701 at gmail dot com>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Kritoke <typeolinux@yahoo.com>

pkgbase=gconfmm
pkgname=('gconfmm' 'gconfmm-docs')
pkgver=2.28.3
pkgrel=6
arch=('x86_64')
url="http://gconfmm.sourceforge.net/"
license=('LGPL')
makedepends=('pkgconfig' 'gtkmm' 'glibmm-docs' 'gconf' 'glibmm')
source=(https://download.gnome.org/sources/${pkgname}/2.28/${pkgname}-${pkgver}.tar.xz)
sha256sums=('d7bd2d29c1a87b85329547fb29a0eca52d944e60699982152775002e24c09228')

build() {
  cd "${srcdir}/${pkgbase}-${pkgver}"
  CXXFLAGS+=' -std=c++11'
  ./configure --prefix=/usr --sysconfdir=/etc \
      --localstatedir=/var
  make
}

package_gconfmm() {
  pkgdesc="C++ bindings for GConf"
  depends=('gconf' 'glibmm')

  cd "${srcdir}/${pkgbase}-${pkgver}"
  sed -i -e 's/^doc_subdirs/#doc_subdirs/' Makefile
  make DESTDIR="${pkgdir}" install
}

package_gconfmm-docs() {
  pkgdesc="Developer documentation for gconfmm"

  cd "${srcdir}/${pkgbase}-${pkgver}/docs"
  make DESTDIR="${pkgdir}" install
}
