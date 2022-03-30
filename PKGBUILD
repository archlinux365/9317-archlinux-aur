# Contributor: Vojtech Horky <vojta . horky at-symbol seznam . cz>
# Contributor: Daniel Hillenbrand < codeworkx at bbqlinux dot org >
# Maintainer: Liao Junxuan <mikeljx at 126 dot com>

pkgname=mipsel-elf-binutils
_pkgname=binutils
_target="mipsel-elf"
pkgver=2.38
pkgrel=1
pkgdesc="A collection of binary tools for baremetal MIPS."
url="http://www.gnu.org/software/binutils/"
arch=('x86_64')
license=('GPL')
checkdepends=(dejagnu debuginfod bc)
depends=()
source=("https://ftp.gnu.org/gnu/binutils/${_pkgname}-${pkgver}.tar.xz")
sha256sums=('e316477a914f567eccc34d5d29785b8b0f5a10208d36bbacedcc39048ecfe024')
_sysroot="/usr/lib/${_target}"

prepare() {
	cd ""$srcdir""/${_pkgname}-${pkgver}
	
	# Hack - see native package for details
	sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" libiberty/configure
}

build() {

	cd ""$srcdir""/${_pkgname}-${pkgver}
	
    mkdir -p binutils-build && cd binutils-build

	../configure \
		--prefix=/usr \
        --infodir=/usr/share/info/${_target} \
		--target="${_target}" --build="$CHOST" --host="$CHOST" \
		--disable-werror \
		--disable-nls \
		--with-gcc --with-gnu-as --with-gnu-ld \
		--without-included-gettext
		
	make all
}

check() {
	cd ""$srcdir""/${_pkgname}-${pkgver}
    cd binutils-build
    
    # From riscv32-elf-binutils
    # unset LDFLAGS as testsuite makes assumptions about which ones are active
    # do not abort on errors - manually check log files
    make LDFLAGS="" -k check || true
}

package() {
	cd ""$srcdir""/${_pkgname}-${pkgver}
    cd binutils-build
	
	make DESTDIR="""$pkgdir""" install
    rm "$pkgdir"/usr/lib/bfd-plugins/libdep.so
}
