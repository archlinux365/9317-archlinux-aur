# $Id$
# Maintainer: Eric Bélanger <eric@archlinux.org>

_pkgname=gpac
pkgname=$_pkgname-git
pkgver=0.5.2.r1180.gad26ca8
pkgrel=1
epoch=1
pkgdesc="A multimedia framework based on the MPEG-4 Systems standard (git version)"
arch=('i686' 'x86_64')
url="http://gpac.sourceforge.net"
license=('LGPL')
depends=('ffmpeg' 'glu' 'libxv')
makedepends=('git' 'jack' 'a52dec' 'freetype2' 'faad2' 'libmad' 'mesa' 'sdl2')
optdepends=('jack: for jack support'
	    'a52dec: for A52 support'
            'faad2: for AAC support'
	    'libmad: for mp3 support'
	    'sdl2: for sdl support')
options=('staticlibs' '!makeflags')
source=(git://github.com/gpac/gpac.git)
sha1sums=('SKIP')

pkgver() {
  cd "$_pkgname"
  ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g;s/^v//g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

build() {
  cd ${_pkgname}
  ./configure --prefix=/usr --mandir=/usr/share/man --X11-path=/usr --use-js=no
  make
}

package() {
  cd ${_pkgname}
  make DESTDIR="${pkgdir}" install install-lib
}
