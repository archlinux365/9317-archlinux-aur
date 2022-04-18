# Maintainer: Fabian Maurer <dark.shadow4@web.de>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: josephgbr <rafael.f.f1@gmail.com>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>
# Contributor: Gerardo Exequiel Pozzi <vmlinuz386@yahoo.com.ar>
# Contributor: Tod Jackson <tod.jackson@gmail.com>

pkgname=lib32-libbsd
pkgver=0.11.6
pkgrel=1
pkgdesc='Provides useful functions commonly found on BSD systems like strlcpy()'
arch=('x86_64')
url='http://libbsd.freedesktop.org'
license=('custom')
depends=('lib32-glibc' 'libbsd' 'lib32-libmd')
makedepends=('gcc-multilib' 'lib32-gcc-libs')
source=("https://libbsd.freedesktop.org/releases/libbsd-${pkgver}.tar.xz")
sha256sums=('19b38f3172eaf693e6e1c68714636190c7e48851e45224d720b3b5bc0499b5df')

build() {
  cd libbsd-${pkgver}

  export CC='gcc -m32'
  export CXX='g++ -m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'

  ./configure \
    --prefix='/usr' \
    --libdir='/usr/lib32'
  make
}

package() {
  cd libbsd-${pkgver}

  make DESTDIR="${pkgdir}" install
  rm -rf "${pkgdir}"/usr/{include,share/man}

  install -dm 755 "${pkgdir}"/usr/share/licenses
  ln -s libbsd "${pkgdir}"/usr/share/licenses/lib32-libbsd
}

# vim:set ts=2 sw=2 et:
