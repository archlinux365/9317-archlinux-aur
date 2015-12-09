# Maintainer: Orlando Arias <orlandoarias at gmail <dot> com>

_target=msp430-elf
pkgname="${_target}-gdb"
pkgver=7.10.1
pkgrel=1
pkgdesc="The GNU Debugger for the ${_target} target."
arch=('x86_64' 'x86')
url="https://www.gnu.org/software/gdb/download/"
license=('GPL')
groups=('devel')
depends=("python2")
source=("http://ftp.gnu.org/gnu/gdb/gdb-${pkgver}.tar.xz"
        fix-dwarf2read.patch)
sha256sums=('25c72f3d41c7c8554d61cacbeacd5f40993276d2ccdec43279ac546e3993d6d5'
            '94dbe29525a65b0427548551f2a8c17fd1bfb58dcfeac0a57e14b7b1ab2cccb5')

prepare() {
  cd "$srcdir/gdb-$pkgver"
  [[ -d gdb-build ]] && rm -rf gdb-build
  mkdir gdb-build
  
  # temporary fix for
  # https://sourceware.org/bugzilla/show_bug.cgi?id=19033
  patch -p1 < ../fix-dwarf2read.patch
  # fix libiberty
  # sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure

}

build() {
  unset LDFLAGS	
  export CFLAGS="-O2 -pipe"
  export CXXFLAGS="-O2 -pipe"
  export CPPFLAGS="-O2 -pipe"
  
  cd "$srcdir/gdb-$pkgver/gdb-build"

  # build gdb
  ../configure \
    --prefix=/usr \
    --without-guile \
    --target=${_target} \
    --host=${CHOST} \
    --build=${CHOST} \
    --with-sysroot=/usr/${_target} \
    --disable-nls \
    --with-python=/usr/bin/python2 \
    --with-system-readline \
    --disable-werror \
    --disable-tui

  make
}


package() {
  cd "$srcdir/gdb-$pkgver/gdb-build"
  make DESTDIR="$pkgdir" install
  
  # fix conflicts
  # rm -f ${pkgdir}/usr/lib/libiberty.a
  rm -r ${pkgdir}/usr/share/info
  # rm -r ${pkgdir}/usr/{info,man}
  
  rm -r ${pkgdir}/usr/share/man
  rm -r ${pkgdir}/usr/share/gdb/
  rm -r ${pkgdir}/usr/include/gdb
}

# vim:set ts=2 sw=2 et:
