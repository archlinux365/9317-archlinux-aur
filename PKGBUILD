# Maintainer: Finlay Maroney <finman292004@protonmail.com>

_target=i686-elf
pkgname=$_target-binutils
pkgver=2.32
pkgrel=2
pkgdesc='A set of programs to assemble and manipulate binary and object files for the i686-elf target'
arch=(i686 x86_64)
url='http://www.gnu.org/software/binutils/'
license=(GPL)
depends=(zlib)
options=(!emptydirs !docs)
source=("http://mirrors.kernel.org/gnu/binutils/binutils-$pkgver.tar.xz"
        "libiberty-ignore-cflags.patch")
sha256sums=('0ab6c55dd86a92ed561972ba15b9b70a8b9f75557f896446c82e8b36e473ee04'
            '8b2aea00e98f7c311b1d0fb14e4b435a03c65fde32bc992c924edb6fa7b83c9c')
_basedir=binutils-$pkgver

prepare() {
  cd $_basedir

  patch -p1 -i $srcdir/libiberty-ignore-cflags.patch

  mkdir $srcdir/binutils-build
}

build() {
  cd binutils-build

  $srcdir/$_basedir/configure \
    --target=$_target \
    --with-sysroot \
    --prefix=/usr \
    --bindir=/usr/bin \
    --disable-nls \
    --disable-werror

  make
}

check() {
  cd binutils-build
  
  # do not abort on errors - manually check log files
  make -k check
}

package() {
  cd binutils-build

  make DESTDIR="$pkgdir" install

  rm -r ${pkgdir}/usr/share/{info,man}
}
