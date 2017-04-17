# Maintainer: Jorge Araya Navarro <elcorreo@deshackra.com>
# Contributor: Cristian Porras <porrascristian@gmail.com>
# Contributor: Matthew Bentley <matthew@mtbentley.us>

pkgname=godot-pulse
pkgver=2.1.3
pkgrel=1
pkgdesc="An advanced, feature packed, multi-platform 2D and 3D game engine, with pulseaudio"
url="http://www.godotengine.org"
license=('MIT')
arch=('i686' 'x86_64')
makedepends=('scons' 'clang')
depends=('libxcursor' 'glu' 'libxinerama' 'freetype2' 'pulseaudio' 'zlib')
conflicts=("godot-git" "godot")
_arch=''
if test "$CARCH" == x86_64; then
    _arch=('64')
else
  _arch=('32')
fi

source=(
  "https://github.com/godotengine/godot/archive/${pkgver}-stable.tar.gz"
  godot.desktop
  icon.png
)
sha256sums=('1fde980d6239647c514413f38fe440d4ad339cea5c060671f6485e27744c8df9'
            'd2f5ae30b8c0c3fd8a20a451d34e9e9d0ba1b60a39b1f68484a9a74227c83822'
            'b6bb8e42625414303cf7608f08fe63bd3267486bf7a96586ebab05ade5189785')

build() {
  cd "${srcdir}"/${pkgname%-*}-${pkgver}-stable

  sed -n '/\/* Copyright/,/IN THE SOFTWARE./p' main/main.cpp | sed 's/\/\*//' | sed 's/\*\///' > LICENSE

  scons platform=x11 \
        tools=yes \
        target=release_debug \
        use_llvm=yes \
        openssl=yes \
        colored=yes \
        pulseaudio=yes bits=${_arch} -j $((`nproc`+1))
}

package() {

  cd "${srcdir}"

  install -Dm644 godot.desktop "${pkgdir}"/usr/share/applications/godot.desktop
  install -Dm644 icon.png "${pkgdir}"/usr/share/pixmaps/godot.png
    
  cd "${srcdir}"/${pkgname%-*}-${pkgver}-stable

  install -D -m755 bin/godot.x11.opt.tools.${_arch}.llvm "${pkgdir}"/usr/bin/godot
  install -D -m644 LICENSE "${pkgdir}"/usr/share/licenses/godot/LICENSE
}
