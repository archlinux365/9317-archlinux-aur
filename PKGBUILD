# Maintainer: Kuba Serafinowski <zizzfizzix(at)gmail(dot)com>

##############################################################
#### The section below can be adjusted to suit your needs ####
##############################################################

# What type of build do you want?
# See http://techbase.kde.org/Development/CMake/Addons_for_KDE#Buildtypes to check what is supported.
# Default is RelWithDebInfo to help with debugging.

_buildtype="RelWithDebInfo"

##############################################################

pkgname=tomahawk
pkgver=0.3.1
pkgrel=2
pkgdesc="A Music Player App written in C++/Qt"
arch=('i686' 'x86_64')
url="http://tomahawk-player.org/"
license=('GPL3')
depends=('phonon' 'taglib' 'boost' 'clucene' 'libechonest' 'jreen' 'qtweetlib' 'quazip' 'attica')
makedepends=('git' 'cmake')
optdepends=('tomahawk-spotify-git: spotify resolver')
provides=('tomahawk')
conflicts=('tomahawk-git')
options=(!strip)
source=(http://download.tomahawk-player.org/${pkgname}-${pkgver}.tar.bz2)
md5sums=('0988ac16290b2908c2df83146dd538ea')
install=tomahawk.install

# Clean options array to strip pkg if release buildtype is chosen
if [[ ${_buildtype} == "Release" ]] || [[ ${_buildtype} == "release" ]]; then
  options=()
fi

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  msg "Starting build..."

  if [[ -e ${srcdir}/${pkgname}-${pkgver}-build ]]; then rm -rf ${srcdir}/${pkgname}-${pkgver}-build; fi
  mkdir ${srcdir}/${pkgname}-${pkgver}-build
  cd ${srcdir}/${pkgname}-${pkgver}-build

  cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=${_buildtype} ../${pkgname}-${pkgver}
  make
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}-build
  make DESTDIR=${pkgdir} install
}
