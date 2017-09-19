# $Id$
# Maintainer: Christian Hesse <mail@eworm.de>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Eivind Uggedal <eivind@uggedal.com>

pkgname=mpv-smb
_pkgname=mpv
epoch=1
pkgver=0.27.0
pkgrel=1
_waf_version=1.8.12
pkgdesc='a free, open source, and cross-platform media player (SMB support)'
arch=('i686' 'x86_64')
license=('GPL')
url='http://mpv.io'
depends=(
  'ffmpeg' 'lcms2' 'libcdio-paranoia' 'libgl' 'libxss'
  'libxinerama' 'libxv' 'libxkbcommon' 'libva' 'wayland' 'libcaca'
  'desktop-file-utils' 'hicolor-icon-theme' 'xdg-utils' 'lua52' 'libdvdnav'
  'libxrandr' 'jack' 'rubberband' 'uchardet' 'libarchive' 'smbclient'
)
makedepends=('mesa' 'python-docutils' 'ladspa')
optdepends=('youtube-dl: for video-sharing websites playback')
provides=(mpv)
conflicts=(mpv)
options=('!emptydirs')
source=("$_pkgname-$pkgver.tar.gz::https://github.com/mpv-player/$_pkgname/archive/v$pkgver.tar.gz"
  '0001-opengl-backend-support-multiple-backends.patch'
  "http://www.freehackers.org/~tnagy/release/waf-${_waf_version}")
sha256sums=('341d8bf18b75c1f78d5b681480b5b7f5c8b87d97a0d4f53a5648ede9c219a49c'
  '609e0530f1b0cdb910dcffb5f62bf55936540e24105ce1b2daf1bd6291a7d58a'
  '01bf2beab2106d1558800c8709bc2c8e496d3da4a2ca343fe091f22fca60c98b')

prepare() {
  cd ${_pkgname}-${pkgver}

  # --opengl-backend: support multiple backends (#4384) (FS#53962)
  patch -Np1 < "${srcdir}"/0001-opengl-backend-support-multiple-backends.patch

  install -m755 "${srcdir}"/waf-${_waf_version} waf
}

build() {
  cd ${_pkgname}-${pkgver}

  ./waf configure --prefix=/usr \
    --confdir=/etc/mpv \
    --enable-cdda \
    --enable-dvb \
    --enable-dvdnav \
    --enable-encoding \
    --enable-libarchive \
    --enable-libmpv-shared \
    --enable-libsmbclient \
    --enable-zsh-comp

  ./waf build
}

package() {
  cd ${_pkgname}-${pkgver}

  ./waf install --destdir="$pkgdir"

  install -m644 DOCS/{encoding.rst,tech-overview.txt} \
    "$pkgdir"/usr/share/doc/mpv
}
