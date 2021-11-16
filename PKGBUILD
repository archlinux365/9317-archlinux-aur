# Maintainer: HurricanePootis <hurricanepootis@protonmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: SpepS <dreamspepser at yahoo dot it>

_pkgbasename=sdl-compat_image
pkgname=lib32-$_pkgbasename
pkgver=1.2.12
pkgrel=1
pkgdesc="A simple library to load images of various formats as SDL surfaces (32-bit)"
url="https://www.libsdl.org/projects/SDL_image/"
arch=('i686')
license=(custom)
depends=('lib32-sdl' lib32-libpng 'lib32-libjpeg-turbo' lib32-libtiff lib32-zlib "$_pkgbasename")
provides=('libSDL_image-1.2.so' 'lib32-sdl_image')
conflicts=('lib32-sdl_image')
source=(https://www.libsdl.org/projects/SDL_image/release/SDL_image-${pkgver}.tar.gz)
sha256sums=('0b90722984561004de84847744d566809dbb9daf732a9e503b91a1b5a84e5699')

build() {
  export CC='gcc -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  cd SDL_image-$pkgver
  ./configure --prefix=/usr --disable-static --libdir=/usr/lib32
  make
}

package() {
  cd SDL_image-$pkgver
  make DESTDIR="$pkgdir" install
  install -Dt "$pkgdir/usr/share/licenses/$pkgname" -m644 COPYING
  rm -rf "$pkgdir/usr/include"
}
