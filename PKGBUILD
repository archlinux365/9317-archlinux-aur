# Maintainer: HanFox <han@hanfox.co.uk>
# Based on the 'community/openttd' PKGBUILD by: Vesa Kaihlavirta <vegai@iki.fi>

pkgname=openttd-jgrpp
pkgver=0.24.0
pkgrel=1
pkgdesc="OpenTTD with JGR's patch pack."
arch=('i686' 'x86_64')
url='http://www.tt-forums.net/viewtopic.php?f=33&t=73469'
license=('GPL')
depends=('libpng' 'sdl' 'icu' 'fontconfig' 'lzo' 'hicolor-icon-theme' 'desktop-file-utils' 'tar')
source=("https://github.com/JGRennison/OpenTTD-patches/archive/jgrpp-${pkgver}.tar.gz")
sha256sums=('b4c7e333992d1a60a0d551e686134a4e3de1326417b0d5dbdaceb1f6aecf86e9')

_dirname=OpenTTD-patches-jgrpp

build() {
  cd ${_dirname}-${pkgver} 
  
 ./configure \
    --prefix-dir=/usr \
    --binary-name=${pkgname} \
    --binary-dir=bin \
    --data-dir=share/${pkgname} \
    --install-dir=${pkgdir} \
    --doc-dir=share/doc/${pkgname} \
    --menu-name="OpenTTD (JGR Patch Pack)" \
    --personal-dir=.${pkgname}

  make
}

package() {
  cd ${_dirname}-${pkgver}
  
  mkdir -p ${pkgdir}/usr/share/${pkgname}/{data,game}

  make install
} 
