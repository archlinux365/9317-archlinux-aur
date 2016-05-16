# Contributor: Alexander 'hatred' Drozdov <adrozdoff@gmail.com>
# Contributor: toha257 <toha257@gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Kevin Mihelich <kevin@archlinuxarm.org>
# Maintainer: Tavian Barnes <tavianator@tavianator.com>

_target="arm-linux-gnueabihf"
pkgname=${_target}-binutils
pkgver=2.26
pkgrel=4
_commit=43e2c3de
pkgdesc="A set of programs to assemble and manipulate binary and object files (${_target})"
arch=('i686' 'x86_64')
url="http://www.gnu.org/software/binutils/"
license=('GPL')
depends=('glibc>=2.23' 'zlib')
options=('staticlibs' '!distcc' '!ccache')
source=(#git://sourceware.org/git/binutils-gdb.git#commit=${_commit}
        http://ftp.gnu.org/gnu/binutils/binutils-${pkgver}.tar.bz2
        binutils-${_commit}.patch)
md5sums=(#'SKIP'
         '64146a0faa3b411ba774f47d41de239f'
         '0820efe4f2087f5f557602a32f561dcd')

prepare() {
  cd binutils-${pkgver}

  patch -p1 -i ${srcdir}/binutils-${_commit}.patch

  # hack! - libiberty configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  mkdir ${srcdir}/binutils-build
}

build() {
  cd binutils-build

  ../binutils-${pkgver}/configure --prefix=/usr \
      --program-prefix=${_target}- \
      --with-lib-path=/usr/lib/binutils/${_target} \
      --with-local-prefix=/usr/lib/${_target} \
      --with-sysroot=/usr/${_target} \
      --target=${_target} --host=${CHOST} --build=${CHOST} \
      --disable-nls \
      --enable-threads --enable-shared --with-pic \
      --enable-ld=default --enable-gold --enable-plugins \
      --enable-deterministic-archives \
      --disable-werror --disable-gdb --disable-sim

  make configure-host

  make tooldir=/usr
}

check() {
  cd binutils-build
  
  # unset LDFLAGS as testsuite makes assumptions about which ones are active
  # ignore failures in gold testsuite...
  make -k LDFLAGS="" check || true
}

package() {
  cd binutils-build
  make prefix=${pkgdir}/usr tooldir=${pkgdir}/usr install

  # Remove unwanted files
  rm -rf ${pkgdir}/usr/share
  rm -f ${pkgdir}/usr/bin/{ar,as,ld,nm,objdump,ranlib,readelf,strip,objcopy}
}
