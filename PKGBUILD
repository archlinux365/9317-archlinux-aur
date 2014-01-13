# $Id: PKGBUILD 89660 2013-05-01 21:58:23Z heftig $
# Maintainer: Fantix King <fantix.king@gmail.com>
# Upstream Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Contributor: Allan McRae <allan@archlinux.org>

# toolchain build order: linux-api-headers->glibc->binutils->gcc->binutils->glibc
# NOTE: libtool requires rebuilt with each new gcc version

pkgname='gcc-multilib-x32'
true && pkgname=('gcc-multilib-x32' 'gcc-libs-multilib-x32' 'libx32-gcc-libs' 'gcc-fortran-multilib-x32' 'gcc-objc-multilib-x32' 'gcc-ada-multilib-x32' 'gcc-go-multilib-x32')
pkgver=4.8.0_3
pkgrel=1
_snapshot=4.8-20130425
pkgdesc="The GNU Compiler Collection for multilib with x32 ABI support"
arch=('x86_64')
license=('GPL' 'LGPL' 'FDL' 'custom')
url="http://gcc.gnu.org"
makedepends=('binutils-multilib>=2.23' 'libmpc' 'cloog' 'gcc-ada-multilib' 'doxygen'
             'lib32-glibc>=2.17' 'libx32-glibc>=2.17')
checkdepends=('dejagnu' 'inetutils')
options=('!libtool' '!emptydirs')
source=(ftp://gcc.gnu.org/pub/gcc/snapshots/${_snapshot}/gcc-${_snapshot}.tar.bz2)
        #ftp://gcc.gnu.org/pub/gcc/releases/gcc-${pkgver}/gcc-${pkgver}.tar.bz2
md5sums=('03690556f09991fbecac0467227c5d4e')


if [ -n "${_snapshot}" ]; then
  _basedir=gcc-${_snapshot}
else
  _basedir=gcc-${pkgver%_*}
fi

prepare() {
  cd ${srcdir}/${_basedir}

  # Do not run fixincludes
  sed -i 's@\./fixinc\.sh@-c true@' gcc/Makefile.in

  # Arch Linux installs x86_64 libraries /lib
  [[ $CARCH == "x86_64" ]] && sed -i '/m64=/s/lib64/lib/' gcc/config/i386/t-linux64

  echo ${pkgver%_*} > gcc/BASE-VER

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

  mkdir ${srcdir}/gcc-build
}

build() {
  cd ${srcdir}/gcc-build

  # using -pipe causes spurious test-suite failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=48565
  CFLAGS=${CFLAGS/-pipe/}
  CXXFLAGS=${CXXFLAGS/-pipe/}

  ${srcdir}/${_basedir}/configure --prefix=/usr \
      --libdir=/usr/lib --libexecdir=/usr/lib \
      --mandir=/usr/share/man --infodir=/usr/share/info \
      --with-bugurl=https://bugs.archlinux.org/ \
      --enable-languages=c,c++,ada,fortran,go,lto,objc,obj-c++ \
      --enable-shared --enable-threads=posix \
      --with-system-zlib --enable-__cxa_atexit \
      --disable-libunwind-exceptions --enable-clocale=gnu \
      --disable-libstdcxx-pch \
      --enable-gnu-unique-object --enable-linker-build-id \
      --enable-cloog-backend=isl --disable-cloog-version-check \
      --enable-lto --enable-gold --enable-ld=default \
      --enable-plugin --with-plugin-ld=ld.gold \
      --with-linker-hash-style=gnu --disable-install-libiberty \
      --enable-multilib --with-multilib-list=m32,m64,mx32 \
      --disable-libssp --disable-werror \
      --enable-checking=release
  make
  
  # make documentation
  cd $CHOST/libstdc++-v3
  make doc-man-doxygen
}

check() {
  cd ${srcdir}/gcc-build

  # increase stack size to prevent test failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=31827
  ulimit -s 32768

  # do not abort on error as some are "expected"
  make -k check || true
  ${srcdir}/${_basedir}/contrib/test_summary
}

package_libx32-gcc-libs()
{
  pkgdesc="Runtime libraries shipped by GCC (x32 ABI)"
  depends=('libx32-glibc>=2.17' "gcc-libs>=${pkgver//_/-}")

  cd ${srcdir}/gcc-build
  make -j1 -C $CHOST/x32/libgcc DESTDIR=${pkgdir} install-shared
  for lib in libmudflap libgomp libstdc++-v3/src libitm libsanitizer/asan; do
    make -j1 -C $CHOST/x32/$lib DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES
  done
  
  make -j1 DESTDIR=${pkgdir} install-target-libquadmath
  make -j1 DESTDIR=${pkgdir} install-target-libgfortran
  make -j1 DESTDIR=${pkgdir} install-target-libobjc

  # remove unnecessary files installed by install-target-{libquadmath,libgfortran,libobjc}
  rm ${pkgdir}/usr/libx32/libgfortran.spec

  # remove stuff in gcc-libs-multilib-x32
  rm -r ${pkgdir}/usr/lib{,32}
  rm -r ${pkgdir}/usr/share/info

  # remove static libraries
  find ${pkgdir} -name *.a -delete
  
  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/libx32-gcc-libs/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-libs-multilib-x32()
{
  pkgdesc="Runtime libraries shipped by GCC for multilib with x32 ABI support"
  depends=('glibc>=2.17' "lib32-gcc-libs=${pkgver//_/-}" "libx32-gcc-libs=$pkgver-$pkgrel")
  provides=("gcc-libs=${pkgver//_/-}" "gcc-libs-multilib=${pkgver//_/-}")
  conflicts=('gcc-libs')
  install=gcc-libs.install

  cd ${srcdir}/gcc-build
  make -j1 -C $CHOST/libgcc DESTDIR=${pkgdir} install-shared
  for lib in libmudflap libgomp libstdc++-v3/src libitm libsanitizer/asan; do
    make -j1 -C $CHOST/$lib DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES
  done

  [[ $CARCH == "x86_64" ]] && \
    make -j1 -C $CHOST/libsanitizer/tsan DESTDIR=${pkgdir} install-toolexeclibLTLIBRARIES
  
  make -j1 -C $CHOST/libstdc++-v3/po DESTDIR=${pkgdir} install
  make -j1 -C $CHOST/libgomp DESTDIR=${pkgdir} install-info
  make -j1 -C $CHOST/libitm DESTDIR=${pkgdir} install-info

  make -j1 DESTDIR=${pkgdir} install-target-libquadmath  
  make -j1 DESTDIR=${pkgdir} install-target-libgfortran
  make -j1 DESTDIR=${pkgdir} install-target-libobjc

  # remove unnecessary files installed by install-target-{libquadmath,libgfortran,libobjc}
  rm -r ${pkgdir}/usr/lib/{gcc/,libgfortran.spec}

  # remove stuff in lib32-gcc-libs and libx32-gcc-libs
  rm -r ${pkgdir}/usr/lib{32,x32}

  # remove static libraries
  find ${pkgdir} -name *.a -delete
  
  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-libs-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-multilib-x32()
{
  pkgdesc="The GNU Compiler Collection - C and C++ frontends for multilib with x32 ABI support"
  depends=("gcc-libs-multilib-x32=$pkgver-$pkgrel" 'binutils-multilib>=2.23' 'libmpc' 'cloog')
  groups=('x32-devel')
  provides=("gcc=${pkgver//_/-}" "gcc-multilib=${pkgver//_/-}")
  conflicts=('gcc' 'gcc-x32-seed' 'gcc-multilib')
  install=gcc.install

  cd ${srcdir}/gcc-build
  
  make -j1 DESTDIR=${pkgdir} install

  install -d $pkgdir/usr/share/gdb/auto-load/usr/lib
  mv $pkgdir{,/usr/share/gdb/auto-load}/usr/lib/libstdc++.so.6.0.18-gdb.py

  # unfortunately it is much, much easier to install the lot and clean-up the mess...
  rm $pkgdir/usr/bin/{{$CHOST-,}gfortran,{$CHOST-,}gccgo,gnat*}
  rm $pkgdir/usr/lib{,32,x32}/*.so*
  rm $pkgdir/usr/lib{,32,x32}/lib{atomic,gfortran,go{,begin},objc}.a
  rm $pkgdir/usr/lib/libiberty.a
  rm $pkgdir/usr/lib{,32,x32}/libgfortran.spec
  rm -r $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/{{,32/,x32/}ada{include,lib},finclude,include/objc}
  rm $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/{cc1obj{,plus},f951,gnat1,go1}
  rm $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/{,32/,x32/}{libcaf_single,libgfortranbegin}.a
  rm -r $pkgdir/usr/lib{,32,x32}/go
  rm $pkgdir/usr/share/info/{gccgo,gfortran,gnat*,libgomp,libquadmath,libitm}.info
  rm $pkgdir/usr/share/locale/{de,fr}/LC_MESSAGES/libstdc++.mo
  rm $pkgdir/usr/share/man/man1/{gccgo,gfortran}.1

  # many packages expect this symlinks
  ln -s gcc ${pkgdir}/usr/bin/cc

  # POSIX conformance launcher scripts for c89 and c99
  cat > $pkgdir/usr/bin/c89 <<"EOF"
#!/bin/sh
fl="-std=c89"
for opt; do
  case "$opt" in
    -ansi|-std=c89|-std=iso9899:1990) fl="";;
    -std=*) echo "`basename $0` called with non ANSI/ISO C option $opt" >&2
	    exit 1;;
  esac
done
exec gcc $fl ${1+"$@"}
EOF

  cat > $pkgdir/usr/bin/c99 <<"EOF"
#!/bin/sh
fl="-std=c99"
for opt; do
  case "$opt" in
    -std=c99|-std=iso9899:1999) fl="";;
    -std=*) echo "`basename $0` called with non ISO C99 option $opt" >&2
	    exit 1;;
  esac
done
exec gcc $fl ${1+"$@"}
EOF

  chmod 755 $pkgdir/usr/bin/c{8,9}9

  # install the libstdc++ man pages
  install -dm755 ${pkgdir}/usr/share/man/man3
  install -m644 -t ${pkgdir}/usr/share/man/man3 \
    ${CHOST}/libstdc++-v3/doc/doxygen/man/man3/*.3

  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-fortran-multilib-x32()
{
  pkgdesc="Fortran front-end for GCC for multilib with x32 ABI support"
  depends=("gcc-multilib-x32=$pkgver-$pkgrel")
  provides=("gcc-fortran=${pkgver//_/-}")
  conflicts=('gcc-fortran')
  install=gcc-fortran.install

  cd ${srcdir}/gcc-build
  make -j1 DESTDIR=$pkgdir install-target-libgfortran
  make -j1 -C $CHOST/libgomp DESTDIR=$pkgdir install-nodist_fincludeHEADERS
  make -j1 -C gcc DESTDIR=$pkgdir fortran.install-{common,man,info}
  install -Dm755 gcc/f951 $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/f951

  ln -s gfortran ${pkgdir}/usr/bin/f95

  # remove files included in gcc-libs or gcc
  rm ${pkgdir}/usr/lib{,32,x32}/lib{gfortran,gcc_s}.so*
  rm ${pkgdir}/usr/lib{,32,x32}/libquadmath.{a,so*}
  rm ${pkgdir}/usr/lib/gcc/$CHOST/${pkgver%_*}/{,32/,x32/}{*.o,libgc*}
  rm ${pkgdir}/usr/share/info/libquadmath.info
  rm -r ${pkgdir}/usr/lib/gcc/$CHOST/${pkgver%_*}/include

  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-fortran-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-objc-multilib-x32()
{
  pkgdesc="Objective-C front-end for GCC for multilib with x32 ABI support"
  depends=("gcc-multilib-x32=$pkgver-$pkgrel")
  provides=("gcc-objc=${pkgver//_/-}")
  conflicts=('gcc-objc')

  cd ${srcdir}/gcc-build
  make -j1 DESTDIR=$pkgdir install-target-libobjc
  install -dm755 $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/
  install -m755 gcc/cc1obj{,plus} $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/

  # remove files included in gcc-libs or gcc
  rm ${pkgdir}/usr/lib{,32,x32}/lib{gcc_s,objc}.so*
  rm $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/{,32/,x32/}{*.o,lib*}
  rm $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/include/unwind.h

  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-objc-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-ada-multilib-x32()
{
  pkgdesc="Ada front-end for GCC (GNAT) for multilib with x32 ABI support"
  depends=("gcc-multilib-x32=$pkgver-$pkgrel")
  provides=("gcc-ada=${pkgver//_/-}")
  conflicts=('gcc-ada')
  install=gcc-ada.install

  cd ${srcdir}/gcc-build/gcc
  make -j1 DESTDIR=$pkgdir ada.install-{common,info}
  install -m755 gnat1 $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}

  cd ${srcdir}/gcc-build/$CHOST/32/libada
  make -j1 DESTDIR=${pkgdir} INSTALL="install" \
    INSTALL_DATA="install -m644" install-gnatlib

  cd ${srcdir}/gcc-build/$CHOST/x32/libada
  make -j1 DESTDIR=${pkgdir} INSTALL="install" \
    INSTALL_DATA="install -m644" install-gnatlib

  ln -s gcc ${pkgdir}/usr/bin/gnatgcc
  
  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-ada-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}

package_gcc-go-multilib-x32()
{
  pkgdesc="Go front-end for GCC for multilib with x32 ABI support"
  depends=("gcc-multilib-x32=$pkgver-$pkgrel")
  provides=("gcc-go=${pkgver//_/-}")
  conflicts=('gcc-go')
  install=gcc-go.install

  cd ${srcdir}/gcc-build
  make -j1 DESTDIR=$pkgdir install-target-libgo
  make -j1 -C gcc DESTDIR=$pkgdir go.install-{common,man,info}
  install -Dm755 gcc/go1 $pkgdir/usr/lib/gcc/$CHOST/${pkgver%_*}/go1

  # Install Runtime Library Exception
  install -Dm644 ${srcdir}/${_basedir}/COPYING.RUNTIME \
    ${pkgdir}/usr/share/licenses/gcc-go-multilib-x32/RUNTIME.LIBRARY.EXCEPTION
}
