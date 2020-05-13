# Maintainer: Baltazár Radics <baltazar.radics@gmail.com>

_target=xtensa-esp32-elf
pkgname=$_target-gcc-bootstrap
pkgver=10.1.0
_islver=0.22
_overlay_commit=fe9a594
pkgrel=1
#_snapshot=8-20180427
pkgdesc='The GNU Compiler Collection - cross compiler bootstrap package for xtensa esp32 (bare-metal) target'
arch=(x86_64)
url='https://gcc.gnu.org/'
license=(GPL LGPL FDL)
depends=($_target-binutils zlib libmpc)
makedepends=(gmp mpfr)
provides=($_target-gcc)
conflicts=($_target-gcc)
options=(!emptydirs !strip)
source=(https://ftp.gnu.org/gnu/gcc/gcc-$pkgver/gcc-$pkgver.tar.xz{,.sig}
        #ftp://gcc.gnu.org/pub/gcc/snapshots/$_snapshot/gcc-$_snapshot.tar.xz
        http://isl.gforge.inria.fr/isl-$_islver.tar.bz2
        xtensa-overlays-$_overlay_commit.tar.gz::https://codeload.github.com/espressif/xtensa-overlays/tar.gz/$_overlay_commit)
sha256sums=('b6898a23844b656f1b68691c5c012036c2e694ac4b53a8918d4712ad876e7ea2'
            'SKIP'
            'b21d354acd613a91cb88328753ec3aaeb174d6af042d89c5fcf3bbcced370751'
            '025a16d88ae7b17c013ed23beb02b8545b44673d2b8ecca748e63a79d5c1070d')
validpgpkeys=(33C235A34C46AA3FFB293709A328C3A2C3C45C06) # Jakub Jelinek <jakub@redhat.com>

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
	sed -i "/ac_cpp=/s/\$CPPFLAGS/\$CPPFLAGS -O2/" {libiberty,gcc}/configure
	cp -r ../xtensa-overlays-$_overlay_commit/xtensa_esp32/gcc/* .

	mkdir "$srcdir"/build-gcc
}

build() {
	cd "$srcdir"/build-gcc
	export CFLAGS_FOR_TARGET='-g -Os -ffunction-sections -fdata-sections -mlongcalls'
	export CXXFLAGS_FOR_TARGET='-g -Os -ffunction-sections -fdata-sections -mlongcalls'
	"$srcdir"/$_basedir/configure \
		--libexecdir=/usr/lib \
		--prefix=/usr \
		--target=$_target \
		--with-gmp \
		--with-gnu-as \
		--with-gnu-ld \
		--with-headers=/usr/$_target/include \
		--with-host-libstdcxx='-static-libgcc -Wl,-Bstatic,-lstdc++,-Bdynamic -lm' \
		--with-isl \
		--with-libelf \
		--with-mpc \
		--with-mpfr \
		--with-native-system-header-dir=/include \
		--with-newlib \
		--with-python-dir=share/gcc-$_target \
		--with-sysroot=/usr/$_target \
		--with-system-zlib \
		--without-headers \
		--without-libffi \
		--disable-__cxa_atexit \
		--disable-decimal-float \
		--disable-libgomp \
		--disable-libmpx \
		--disable-libmudflap \
		--disable-libquadmath \
		--disable-libquadmath-support \
		--disable-libssp \
		--disable-libstdcxx-pch \
		--disable-libstdcxx-verbose \
		--disable-nls \
		--disable-shared \
		--disable-threads \
		--disable-tls \
		--enable-gnu-indirect-function \
		--enable-languages=c \
		--enable-lto \
		--enable-target-optspace
	make INHIBIT_LIBC_CFLAGS='-DUSE_TM_CLONE_REGISTRY=0'
}

package() {
	cd "$srcdir"/build-gcc
	make DESTDIR="$pkgdir" install -j1

	# strip host binaries
	find "$pkgdir"/usr/bin/ "$pkgdir"/usr/lib/gcc/$_target/$pkgver -type f -and \( -executable \) -exec strip '{}' \;

	# Remove files that conflict with host gcc package
	rm -r "$pkgdir"/usr/share/man/man7
	rm -r "$pkgdir"/usr/share/info
	rm "$pkgdir"/usr/lib/libcc1.*
}

# vim: ts=2 sw=0 noet
