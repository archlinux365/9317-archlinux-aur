# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>
# Maintainer: Eli Schwartz <eschwartz@archlinux.org>
# Contributor: Christer Solskogen <christer.solskogen@gmail.com>
# Build order: aarch64-binutils -> aarch64-linux-api-headers -> aarch64-gcc-bootstrap -> aarch64-glibc -> aarch64-gcc -> aarch64-glibc (again)

_arch=aarch64
_target=$_arch-unknown-linux-gnu
pkgname=$_arch-gcc
pkgver=11.1.0
_islver=0.24
pkgrel=0
#_snapshot=8-20190111
pkgdesc='The GNU Compiler Collection - cross compiler for ARM64 target'
arch=(x86_64)
url='https://gcc.gnu.org/'
license=(GPL LGPL FDL)
depends=(libmpc zstd )
makedepends=($_arch-binutils $_arch-glibc)
replaces=($_arch-gcc-bootstrap)
options=(!emptydirs !strip staticlibs)
source=(https://ftp.gnu.org/gnu/gcc/gcc-$pkgver/gcc-$pkgver.tar.xz{,.sig}
        #https://gcc.gnu.org/pub/gcc/snapshots/$_snapshot/gcc-$_snapshot.tar.xz
        http://isl.gforge.inria.fr/isl-$_islver.tar.bz2)

sha256sums=('4c4a6fb8a8396059241c2e674b85b351c26a5d678274007f076957afa1cc9ddf'
            'SKIP'
            'fcf78dd9656c10eb8cf9fbd5f59a0b6b01386205fe1934b3b287a0a1898145c0')

validpgpkeys=(F3691687D867B81B51CE07D9BBE43771487328A9  # bpiotrowski@archlinux.org
              86CFFCA918CF3AF47147588051E8B148A9999C34  # evangelos@foutrelis.com
              13975A70E63C361C73AE69EF6EEB81F8981C74C7  # richard.guenther@gmail.com
              D3A93CAD751C2AF4F8C7AD516C35B99309B5FA62) # Jakub Jelinek <jakub@redhat.com>

if [ -n "$_snapshot" ]; then
  _basedir=gcc-$_snapshot
else
  _basedir=gcc-$pkgver
fi

prepare() {
  cd $_basedir

  # link isl for in-tree builds
  ln -sf ../isl-$_islver isl

  rm -rf "$srcdir"/gcc-build
  mkdir "$srcdir"/gcc-build
}

build() {
  cd gcc-build

  CFLAGS=${CFLAGS/-Werror=format-security/}
  CXXFLAGS=${CXXFLAGS/-Werror=format-security/}

  "$srcdir"/$_basedir/configure \
      --prefix=/usr \
      --with-sysroot=/usr/$_target/sys-root \
      --libexecdir=/usr/lib \
      --target=$_target \
      --disable-nls --enable-default-pie \
      --enable-languages=c,c++,fortran \
      --with-system-zlib --enable-__cxa_atexit \
      --enable-linker-build-id --enable-plugin \
      --with-linker-hash-style=gnu --enable-gnu-indirect-function \
      --disable-multilib --disable-werror \
      --enable-checking=release --disable-static \
      --with-arch=armv8-a \
      --enable-fix-cortex-a53-835769 --enable-fix-cortex-a53-843419 \
      --enable-host-shared --disable-libssp --disable-libstdcxx-pch \

  make
}

package() {
  cd gcc-build

  make install DESTDIR="$pkgdir"
  ln -s $_target-gcc "$pkgdir"/usr/bin/$_target-cc
  # Remove files that conflict with host gcc package
  rm -r "$pkgdir"/usr/{include,lib/libcc*,share}
}
