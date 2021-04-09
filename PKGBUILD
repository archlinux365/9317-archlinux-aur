# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=sword-svn
pkgver=1.9.0.svnversion.3852
pkgrel=1
epoch=2
pkgdesc="Libraries for Bible programs - svn-version"
arch=('i686' 'x86_64')
url="http://www.crosswire.org/sword/"
license=('GPL')
depends=('curl' 'clucene' 'xapian-core')
makedepends=('subversion')
provides=('sword=1.8.1')
conflicts=('sword')
source=('sword::svn+https://www.crosswire.org/svn/sword/trunk/')
sha256sums=('SKIP')

pkgver() {
  cd "${pkgname%-svn}"
  local ver="$(svnversion)"
  printf "%s.%s" $(awk '/AC_INIT/ {print $2}' configure.ac | tr -d ,) "${ver//[[:alpha:]]}"
}

build() {
  cd "${pkgname%-svn}"
  ./autogen.sh
  CXXFLAGS+=' -DU_USING_ICU_NAMESPACE=1'
  ./configure --prefix=/usr --libdir=/usr/lib --sysconfdir=/etc 
  make
}

package() {
  cd "${pkgname%-svn}"
  make DESTDIR="$pkgdir/" install
  make DESTDIR="$pkgdir/" install_config
}
