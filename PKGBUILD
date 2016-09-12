# Maintainer: Orlando Arias <orlandoarias at gmail <dot> com>

_target="msp430-elf"
pkgname=${_target}-gcc-stage1
pkgver=6.2.0
_islver=0.17
pkgrel=2
pkgdesc="The GNU Compiler Collection bootstrap for the ${_target} target."
arch=(i686 x86_64)
license=('GPL' 'LGPL')
url="http://gcc.gnu.org"
depends=("${_target}-binutils>=2.25" 'libmpc' 'elfutils')
options=('staticlibs' '!buildflags' '!libtool' '!emptydirs' 'zipman' 'docs' '!strip')
source=(ftp://gcc.gnu.org/pub/gcc/releases/gcc-${pkgver}/gcc-${pkgver}.tar.bz2
        http://isl.gforge.inria.fr/isl-${_islver}.tar.bz2
        fix-insn-delay_cycles_32x.patch)
sha256sums=('9944589fc722d3e66308c0ce5257788ebd7872982a718aa2516123940671b7c5'
            '439b322f313aef562302ac162caccb0b90daedf88d49d62e00a5db6b9d83d6bb'
            '0cd87771d1fd8ec5d0c413ae8c18b9b2599f2c66a0fa8b5fd4aa2f01ac1b5f86')

prepare() {
  # add isl into tree
  cd "${srcdir}/gcc-${pkgver}"
  [[ -L isl ]] && rm -f isl
  ln -s ../isl-${_islver} isl

  # fix for:
  # https://gcc.gnu.org/bugzilla/show_bug.cgi?id=77570
  patch -p1 < ../fix-insn-delay_cycles_32x.patch

  # clean build directory
  [[ -d gcc-build ]] && rm -rf gcc-build
  mkdir gcc-build
}

build() {
  cd "${srcdir}/gcc-${pkgver}"

  export CFLAGS="-O2 -pipe"
  export CXXFLAGS="-O2 -pipe"

  export CFLAGS_FOR_TARGET="-Os -pipe"
  export CXXFLAGS_FOR_TARGET="-Os -pipe"

  echo ${pkgver} > gcc/BASE-VER

  cd gcc-build

  [ $NOEXTRACT -eq 1 ] || ../configure \
    --prefix=/usr \
    --program-prefix=${_target}- \
    --target=${_target} \
    --host=$CHOST \
    --build=$CHOST \
    --disable-shared \
    --disable-nls \
    --disable-threads \
    --enable-languages=c \
    --enable-multilib \
    --without-headers \
    --with-newlib \
    --with-local-prefix=/usr/${_target} \
    --with-sysroot=/usr/${_target} \
    --with-as=/usr/bin/${_target}-as \
    --with-ld=/usr/bin/${_target}-ld \
    --disable-libgomp

  make all-gcc
}

package() {
  cd "${srcdir}/gcc-${pkgver}"/gcc-build

  export CFLAGS="-O2 -pipe"
  export CXXFLAGS="-O2 -pipe"

  export CFLAGS_FOR_TARGET="-O2 -pipe"
  export CXXFLAGS_FOR_TARGET="-O2 -pipe"

  make DESTDIR="$pkgdir" install-gcc

  rm -rf "$pkgdir"/usr/share/man/man7/
  rm -rf "$pkgdir/usr/share/info"

  cp -r "$pkgdir"/usr/libexec/* "$pkgdir/usr/lib/"
  rm -rf "$pkgdir/usr/libexec"

  # strip it manually
  strip "$pkgdir"/usr/bin/* 2>/dev/null || true
  find "$pkgdir"/usr/lib -type f -exec /usr/bin/${_target}-strip \
    --strip-unneeded {} \; 2>/dev/null || true
}

# vim:set ts=2 sw=2 et:
