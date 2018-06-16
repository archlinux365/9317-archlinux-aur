# Maintainer: Rafał Kozdrój <kozeid2@gmail.com>
# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: dorphell <dorphell@archlinux.org>

_pkgname=sdl
pkgname=$_pkgname-hg
pkgver=1.2.15.r11979.d684a767e240
pkgrel=1
pkgdesc="A library for portable low-level access to a video framebuffer, audio output, mouse, and keyboard"
arch=('i686' 'x86_64')
url="https://www.libsdl.org"
license=('LGPL')
depends=('glibc' 'libxext' 'libxrender' 'libx11')
makedepends=('alsa-lib' 'mesa' 'libpulse' 'glu' 'mercurial')
optdepends=('alsa-lib: ALSA audio driver'
            'libpulse: PulseAudio audio driver')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
options=('staticlibs')
source=("hg+https://hg.libsdl.org/SDL#branch=SDL-1.2")
md5sums=('SKIP')

pkgver() {
  cd "SDL/"
  printf "%s.r%s.%s" \
    "$(hg log -r . -T "{latesttag}" | sed 's/release-//')" \
    "$(hg identify -n | sed 's/+//')" \
    "$(hg identify -i | sed 's/+//')"
}

prepare() {
  cd "SDL/"
  # https://bugzilla.libsdl.org/show_bug.cgi?id=1430
  hg backout --no-commit 5620:ad4ed9f0336f
}

build() {
  cd "SDL/"
  ./autogen.sh
  ./configure --prefix=/usr --disable-nasm --enable-alsa \
              --with-x --disable-rpath --disable-static
  make
}

package() {
  cd "SDL/"
  make DESTDIR="$pkgdir/" install
}
