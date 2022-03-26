# Original Maintainer: James Duley <jagduley gmail>
# Previous Maintainer: 2bluesc <2bluesc gmail.com>
# Maintainer: Vadzim Dambrouski <pftbest gmail.com>
pkgname=gcc-arm-none-eabi-bin
pkgver=11.2_2022.02
pkgrel=1
pkgdesc="GNU Tools ARM Embedded Processors (binary distribution, includes newlib, does NOT include GDB)"
arch=('aarch64' 'x86_64')
depends=('glibc')
optdepends=(
      'arm-none-eabi-gdb: GNU Debugger for ARM EABI'
    )
provides=('gcc-arm-none-eabi'
      'arm-none-eabi-gcc'
      'arm-none-eabi-binutils'
      'arm-none-eabi-newlib'
    )
conflicts=('gcc-arm-none-eabi'
      'arm-none-eabi-gcc'
      'arm-none-eabi-binutils'
      'arm-none-eabi-newlib'
    )
url='https://developer.arm.com/tools-and-software/open-source-software/developer-tools/gnu-toolchain/downloads'
source_x86_64=('https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu/11.2-2022.02/binrel/gcc-arm-11.2-2022.02-x86_64-arm-none-eabi.tar.xz')
source_aarch64=('https://armkeil.blob.core.windows.net/developer/Files/downloads/gnu/11.2-2022.02/binrel/gcc-arm-11.2-2022.02-aarch64-arm-none-eabi.tar.xz')
license=('custom')
options=(!strip staticlibs)
sha256sums_x86_64=('8c5acd5ae567c0100245b0556941c237369f210bceb196edfe5a2e7532c60326')
sha256sums_aarch64=('ef1d82e5894e3908cb7ed49c5485b5b95deefa32872f79c2b5f6f5447cabf55f')
package() {
  cd $srcdir/gcc-*/

  mkdir -p $pkgdir/usr
  mkdir -p $pkgdir/usr/lib/gcc
  mkdir -p $pkgdir/usr/libexec/gcc
  mkdir -p $pkgdir/usr/share/doc/gcc-arm-none-eabi
  mkdir -p $pkgdir/usr/share/man

  cp -a arm-none-eabi $pkgdir/usr
  cp -a bin $pkgdir/usr
  cp -a lib/gcc/arm-none-eabi $pkgdir/usr/lib/gcc
  cp -a libexec/gcc/arm-none-eabi $pkgdir/usr/libexec/gcc
  cp -a share/* $pkgdir/usr/share/doc/gcc-arm-none-eabi
  cp -a share/man/man1 $pkgdir/usr/share/man

  rm -f $pkgdir/usr/bin/arm-none-eabi-gdb*
  rm -f $pkgdir/usr/share/man/man1/arm-none-eabi-gdb*
}

