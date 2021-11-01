# Maintainer: Christer Solskogen <christer.solskogen@gmail.com>
# Build order: armv7l-binutils -> armv7l-linux-api-headers -> armv7l-gcc-bootstrap -> armv7l-glibc -> armv7l-gcc -> armv7l-glibc (again)

_arch=armv7l
_target=$_arch-unknown-linux-gnueabihf
pkgname=$_arch-gcc-bootstrap
pkgver=11.2.0
_islver=0.24
pkgrel=0
pkgdesc='The GNU Compiler Collection - cross compiler for armv7l'
arch=(x86_64)
url='https://gcc.gnu.org/'
license=(GPL LGPL FDL)
depends=(libmpc zstd)
makedepends=($_arch-binutils)
provides=($_arch-gcc)
conflicts=($_arch-gcc)
options=(!emptydirs !strip staticlibs)
source=(https://ftp.gnu.org/gnu/gcc/gcc-$pkgver/gcc-$pkgver.tar.xz{,.sig}
        #https://gcc.gnu.org/pub/gcc/snapshots/$_snapshot/gcc-$_snapshot.tar.xz
        "https://libisl.sourceforge.io/isl-${_islver}.tar.xz"
)

sha256sums=('d08edc536b54c372a1010ff6619dd274c0f1603aa49212ba20f7aa2cda36fa8b'
            'SKIP'
            '043105cc544f416b48736fff8caf077fb0663a717d06b1113f16e391ac99ebad')

validpgpkeys=('F3691687D867B81B51CE07D9BBE43771487328A9'  # bpiotrowski@archlinux.org
              '86CFFCA918CF3AF47147588051E8B148A9999C34'  # evangelos@foutrelis.com
              '13975A70E63C361C73AE69EF6EEB81F8981C74C7'  # richard.guenther@gmail.com
              'D3A93CAD751C2AF4F8C7AD516C35B99309B5FA62') # Jakub Jelinek <jakub@redhat.com>



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
      --enable-languages=c,c++ \
      --with-system-zlib --enable-__cxa_atexit \
      --enable-linker-build-id \
      --enable-plugin \
      --with-linker-hash-style=gnu --enable-gnu-indirect-function \
      --disable-multilib --disable-werror \
      --enable-checking=release --enable-host-shared \
      --with-arch=armv7-a --with-float=hard --with-fpu=vfpv3-d16 \
      --disable-threads --without-headers --with-glibc-version=2.34 \
      --disable-shared --with-newlib

  make all-gcc all-target-libgcc
}

package() {
  cd gcc-build

  make install-strip-gcc install-strip-target-libgcc DESTDIR="$pkgdir"
  ln -s $_target-gcc "$pkgdir"/usr/bin/$_target-cc
  # Remove files that conflict with host gcc package
  rm -r "$pkgdir"/usr/{include,share}

}
