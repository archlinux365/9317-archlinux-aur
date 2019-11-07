# Original Maintainer: James Duley <jagduley gmail>
# Previous Maintainer: 2bluesc <2bluesc gmail.com>
# Previous Maintainer: Vadzim Dambrouski <pftbest gmail.com>
# Maintainer: Lorenzo Cappelletti <lorenzo.cappelletti gmail.com>
gccver=83
pkgname=gcc-arm-none-eabi-bin-$gccver
pkgver=8_2019_q3_update
pkgrel=1
pkgdesc="GNU Tools ARM Embedded Processors (binary distribution, includes newlib, does NOT include GDB)"
arch=('x86_64')
depends=('glibc')
optdepends=(
	  'arm-none-eabi-gdb: GNU Debugger for ARM EABI'
    )
provides=("gcc-arm-none-eabi" "gcc-arm-none-eabi-$gccver"
	  "arm-none-eabi-gcc" "arm-none-eabi-gcc-$gccver"
	  "arm-none-eabi-binutils" "arm-none-eabi-binutils-$gccver"
	  "arm-none-eabi-newlib" "arm-none-eabi-newlib-$gccver"
    )
url="https://developer.arm.com/open-source/gnu-toolchain/gnu-rm"
source=("https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu-rm/8-2019q3/RC1.1/gcc-arm-none-eabi-8-2019-q3-update-linux.tar.bz2")
license=('custom')
options=(!strip staticlibs)
sha256sums=('b50b02b0a16e5aad8620e9d7c31110ef285c1dde28980b1a9448b764d77d8f92')
md5sums=('6341f11972dac8de185646d0fbd73bfc')

package() {
  mkdir -p $pkgdir/opt
  cd $srcdir/
  cp -a gcc-*/ $pkgdir/opt
  rm -f $pkgdir/opt/gcc-*/bin/arm-none-eabi-gdb*
}
