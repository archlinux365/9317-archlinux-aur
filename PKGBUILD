# Maintainer: Christer Solskogen <christer.solskogen@gmail.com


_target=powerpc-none-eabi
pkgname=$_target-toolchain
pkgver=20171221
pkgrel=2
pkgdesc="A complete gcc/binutils/newlib toolchain for $_target"
depends=('zlib' 'bash' 'libmpc')
url="http://www.gnu.org"
conflicts=('m68k-elf-gcc' 'm68k-elf-binutils' 'm68k-elf-newlib')
arch=('x86_64')
_gcc=gcc-7.2.0
_binutils=binutils-2.29.1
_newlib=newlib-2.5.0.20170922
license=('GPL' 'BSD')
options=('!strip')

source=("http://gnuftp.uib.no/gcc/${_gcc}/${_gcc}.tar.xz"
	"http://gnuftp.uib.no/binutils/${_binutils}.tar.xz"
	"ftp://sourceware.org/pub/newlib/${_newlib}.tar.gz")

sha512sums=('f853cd6530b4055d8d8289da74687cb4c6d5f363598d386332d31852b581bac76c3adb7d61889edec3b779f63d8646f0122840f12965ce4a4389ba535dbbb6e1'
            'd748d22306477d60d921078804d21943248c23fca0707aac9b016a352c01c75ca69e82624ae37fb0bbd03af3b17088a94f60dfe1a86a7ff82e18ece3c24f0fd0'
            '5f29509c53d2858c0067e2fe33565a8b8e9decfc2761b3616729a274e7747c120a0b82b2c50aae291b182178da274a1540e218d23b86debd56256e17f3651d4b')


prepare() {
	cd "${srcdir}/${_gcc}"
	
	#we use libiberty from binutils. Otherwise the compilation will fail.
	rm -rf libiberty

	for i in bfd binutils gas ld libiberty opcodes; do ln -sv ../${_binutils}/$i; done
	for i in newlib libgloss; do ln -sf ../${_newlib}/$i; done

	# hack! - some configure tests for header files using "$CPP $CPPFLAGS"
        sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

	mkdir -p "${srcdir}/obj"
}

build()
{
	cd "${srcdir}/obj"
	"${srcdir}/${_gcc}/configure" --prefix=/usr --libexecdir=/usr/lib --target=${_target} --enable-languages=c,c++ --disable-libstdcxx-pch \
	--with-newlib --with-libgloss --with-system-zlib --disable-nls

	make
}

package()
{
	cd "${srcdir}/obj"
	make DESTDIR="${pkgdir}" install -j2
	rm -rf "${pkgdir}"/usr/share
	rm -rf "${pkgdir}"/usr/include
	rm -rf "${pkgdir}"/usr/lib/libcc1.*
	find "${pkgdir}" -name '*.py' -delete 


	# local variable is scoped to the function, for general tidiness. 
	local regex='ELF ().*(executable|shared object).*'
	# read null-terminated filenames from stdin, and use a while loop to operate on each one
	# for each run of the loop, the filename is stored in the intuitive variable "filename". :) 
	while read -r -d '' filename; do
	# test if the output of `file` matches the regular expression defined earlier
	if [[ $(file -b "$filename") =~ $regex ]]; then
       	 # awesome, it matches! So, do the standard strip routine since this isn't an $_target executable
        	strip --strip-unneeded "$filename"
    	fi
	# this find command uses process substitution to pass the output of find into the `while read` loop
	done < <(find "$pkgdir" -type f -print0)

	find "${pkgdir}/usr/lib/gcc/${_target}" "${pkgdir}/usr/${_target}/lib" -type f -name '*.o' -o -name '*.a' -exec "${pkgdir}"/usr/bin/${_target}-strip -g {} +

	#fix permissions to please namcap
	find "${pkgdir}/usr/${_target}/lib" -name '*.a' -exec chmod 644 {} +

}



