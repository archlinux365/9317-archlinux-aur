# Maintainer: Anatol Pomozov <anatol.pomozov@gmail.com>

_target=aarch64-linux-gnu
pkgname=$_target-gcc-stage1
pkgver=5.2.0
_islver=0.14.1
pkgrel=1
#_snapshot=5-20150616
pkgdesc='The GNU Compiler Collection - cross compiler for ARM64 target'
arch=(i686 x86_64)
url='http://gcc.gnu.org/'
license=(GPL LGPL FDL)
depends=($_target-binutils libmpc zlib)
makedepends=(gmp mpfr)
options=(!emptydirs !strip)
source=(ftp://gcc.gnu.org/pub/gcc/releases/gcc-$pkgver/gcc-$pkgver.tar.bz2
        #ftp://gcc.gnu.org/pub/gcc/snapshots/$_snapshot/gcc-$_snapshot.tar.bz2
        http://isl.gforge.inria.fr/isl-$_islver.tar.bz2)
sha256sums=('5f835b04b5f7dd4f4d2dc96190ec1621b8d89f2dc6f638f9f8bc1b1014ba8cad'
            '1f20561843eb9f6ae2076800bc45f3680ff7696520257cd5734ccfb843464cae')

if [ -n "$_snapshot" ]; then
  _basedir=gcc-$_snapshot
else
  _basedir=gcc-$pkgver
fi

prepare() {
  cd $_basedir

  # link isl for in-tree builds
  ln -sf ../isl-$_islver isl

  echo $pkgver > gcc/BASE-VER

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" "$srcdir"/$_basedir/{libiberty,gcc}/configure

  rm -rf $srcdir/gcc-build
  mkdir $srcdir/gcc-build
}

build() {
  cd gcc-build

  export CFLAGS_FOR_TARGET='-O2 -pipe'

  # unfortunately CXXFLAGS_FOR_TARGET is not honored https://gcc.gnu.org/bugzilla/show_bug.cgi?id=53579
  #export CXXFLAGS_FOR_TARGET='-O2 -pipe'
  export CXXFLAGS='-O2 -pipe'

  $srcdir/$_basedir/configure \
    --prefix=/usr \
    --libexecdir=/usr/lib \
    --target=$_target \
    --disable-shared \
    --disable-nls \
    --disable-threads \
    --enable-languages=c \
    --enable-multilib \
    --disable-libssp \
    --disable-libquadmath \
    --with-system-zlib \
    --with-sysroot=/usr/$_target \
    --with-build-sysroot=/usr/$_target \
    --with-as=/usr/bin/$_target-as \
    --with-ld=/usr/bin/$_target-ld \
    --disable-libgomp \
    --enable-__cxa_atexit \
    --enable-addons \
    --with-libelf \
    --with-gmp \
    --with-mpfr \
    --with-mpc \
    --with-isl \
    --enable-gnu-indirect-function \
    --without-headers \
    --with-newlib

  make all-gcc all-target-libgcc
}

package() {
  cd gcc-build

  make DESTDIR="$pkgdir" install-gcc install-target-libgcc

  # strip target binaries
  find "$pkgdir"/usr/lib/gcc/$_target/ -type f -and \( -name \*.a -or -name \*.o \) -exec $_target-objcopy -R .comment -R .note -R .debug_info -R .debug_aranges -R .debug_pubnames -R .debug_pubtypes -R .debug_abbrev -R .debug_line -R .debug_str -R .debug_ranges -R .debug_loc '{}' \;

  # strip host binaries
  find "$pkgdir"/usr/bin/ "$pkgdir"/usr/lib/gcc/$_target/ -type f -and \( -executable \) -exec strip '{}' \;

  # Remove files that conflict with host gcc package
  rm -r "$pkgdir"/usr/share/man/man7
  rm -r "$pkgdir"/usr/share/info
}
