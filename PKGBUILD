# Maintainer: Jesus Alonso <doragasu at hotmail dot com>
# NOTE: As I want these packages for Genesis/Megadrive development, they do
# only support the m68000 CPU. If you want to support other m68k variants,
# either modify _target_cpu to suit your needs, or go wild, remove the
# --with-cpu switches and change --disable-multilib with --enable-multilib.
# Be warned that multilib packages will take a lot more time to build, and
# will also require more disk space.

_target=m68k-elf
_target_cpu=m68000
pkgname=${_target}-gdb
pkgver=8.1
pkgrel=1
pkgdesc="The GNU Project Debugger (${_target})"
arch=('i686' 'x86_64')
license=('GPL')
url="https://www.gnu.org/software/gdb/"
depends=("${_target}-binutils>=2.29-1" "${_target}-gcc" 'zlib' 'guile2.0')
source=("http://ftp.gnu.org/gnu/gdb/gdb-${pkgver}.tar.xz")
        
sha256sums=('af61a0263858e69c5dce51eab26662ff3d2ad9aa68da9583e8143b5426be4b34')

prepare() {
  cd ${srcdir}/gdb-${pkgver}

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

  mkdir ${srcdir}/gdb-build
}

build() {
  cd ${srcdir}/gdb-build

  ../gdb-${pkgver}/configure --prefix=/usr \
    --target=${_target} \
	--disable-multilib \
	--with-cpu=${_target_cpu} \
    --with-guile="guile-2.0"

  make
}

package() {
  cd ${srcdir}/gdb-build

  make DESTDIR=${pkgdir} install

  # Remove unwanted files
  rm -rf ${pkgdir}/usr/share
  rm -rf ${pkgdir}/usr/include
}

