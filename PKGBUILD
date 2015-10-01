# Maintainer: Orlando Arias <orlandoarias at gmail <dot> com>

_target=msp430-elf
pkgname="${_target}-gdb"
pkgver=7.10
pkgrel=2
pkgdesc="The GNU Debugger for ${_target}."
arch=('x86_64' 'x86')
url="https://www.gnu.org/software/gdb/download/"
license=('GPL')
groups=('devel')
depends=("python2")
options=('strip')
source=("http://ftp.gnu.org/gnu/gdb/gdb-${pkgver}.tar.xz"
        fix-dwarf2read.patch)
sha256sums=('7ebdaa44f9786ce0c142da4e36797d2020c55fa091905ac5af1846b5756208a8'
            '889e4db508dfb572e5530c44b8a1bbccd59857d30729201cf0cd3b778c5140a5')

prepare() {
	cd "$srcdir/gdb-$pkgver"
	[[ -d gdb-build ]] && rm -rf gdb-build
	mkdir gdb-build
	
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
