pkgname=ghdl
_tag=2017-03-01
# The .99 is for pre-release
pkgver=0.33.99.${_tag//-/.}
pkgrel=2
_gccver=6.4.0
_islver=0.16.1
arch=('i686' 'x86_64')
pkgdesc='VHDL simulator'
url='https://github.com/tgingold/ghdl'
license=('GPLv2')
makedepends=('gcc-ada' 'git')
install=ghdl.install
options=(!emptydirs staticlibs)

source=(
  "git+https://github.com/tgingold/ghdl#tag=${_tag}"
  "https://gcc.gnu.org/pub/gcc/releases/gcc-${_gccver}/gcc-${_gccver}.tar.xz"
  "https://gcc.gnu.org/pub/gcc/infrastructure/isl-${_islver}.tar.bz2"
)
md5sums=(
  'SKIP'
  '11ba51a0cfb8471927f387c8895fe232'
  'ac1f25a0677912952718a51f5bc20f32'
)

prepare() {
  cd "${srcdir}/ghdl"
  ./configure --prefix=/usr --with-gcc="${srcdir}/gcc-${_gccver}"
  make copy-sources

  cd "${srcdir}/gcc-${_gccver}"

  # link isl for in-tree build
  ln -s ../isl-${_islver} isl

  # Do not run fixincludes
  sed -i 's@\./fixinc\.sh@-c true@' gcc/Makefile.in

  # Arch Linux installs x86_64 libraries /lib
  [[ $CARCH == "x86_64" ]] && sed -i '/m64=/s/lib64/lib/' gcc/config/i386/t-linux64

  # hack! - some configure tests for header files using "$CPP $CPPFLAGS"
  sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure

  mkdir "${srcdir}/gcc-build"
}

build() {
  cd "${srcdir}/gcc-build"

  # using -pipe causes spurious test-suite failures
  # http://gcc.gnu.org/bugzilla/show_bug.cgi?id=48565
  CFLAGS=${CFLAGS/-pipe/}
  CXXFLAGS=${CXXFLAGS/-pipe/}

  "${srcdir}/gcc-${_gccver}/configure" --prefix=/usr \
    --libdir=/usr/lib \
    --libexecdir=/usr/lib \
    --mandir=/usr/share/man \
    --infodir=/usr/share/info \
    --enable-shared \
    --enable-threads=posix \
    --enable-libmpx \
    --with-system-zlib \
    --with-isl \
    --enable-__cxa_atexit \
    --disable-libunwind-exceptions \
    --enable-clocale=gnu \
    --disable-libstdcxx-pch \
    --disable-libssp \
    --enable-gnu-unique-object \
    --enable-linker-build-id \
    --enable-lto \
    --enable-plugin \
    --enable-install-libiberty \
    --with-linker-hash-style=gnu \
    --enable-gnu-indirect-function \
    --disable-multilib \
    --disable-werror \
    --enable-checking=release \
    --enable-default-pie \
    --enable-default-ssp \
    \
    --enable-languages=vhdl \
    --disable-bootstrap \
    --disable-libgomp \
    --disable-libquadmath

  make

  cd "${srcdir}/ghdl"
  make -j1 \
    GHDL="${srcdir}/gcc-build/gcc/ghdl" \
    ANALYZE_OPTS="--GHDL1=${srcdir}/gcc-build/gcc/ghdl1" \
    STD_GHDL_FLAGS="--GHDL1=${srcdir}/gcc-build/gcc/ghdl1" \
    vhdl.libs.all libs.vhdl.standard libgrt.a
}

package() {
  local _xgcc="${srcdir}/gcc-build/gcc/xgcc"
  local _machine=$(${_xgcc} -dumpmachine)
  local _version=$(${_xgcc} -dumpversion)
  cd "${srcdir}/gcc-build"

  # make a full install ...
  make DESTDIR="${pkgdir}" install

  # and remove files not specific to ghdl
  cd "${pkgdir}"
  rm -rf "usr/"{include,share/{locale,man}}
  find "usr/lib" \
    -maxdepth 1 -mindepth 1 -not -name 'gcc' -not -name 'ghdl' \
    -exec rm -rf {} +
  find "usr/lib/gcc/${_machine}/${_version}" \
    -maxdepth 1 -mindepth 1 -not -name 'ghdl*' \
    -exec rm -rf {} +
  find "usr/bin" "usr/share/info" \
    -maxdepth 1 -mindepth 1 -not -name 'ghdl*' \
    -exec rm -rf {} +

  # install ghdl-lib
  cd "${srcdir}/ghdl"
  make DESTDIR="${pkgdir}" install
}
