#!/bin/bash
# Maintainer: Florian Bruhin (The Compiler) <archlinux.org@the-compiler.org>
# Contributor: Yannik Stein <yannik.stein [at] gmail.com>
# Contributor: Roberto Calabrese <robertocalabrese75 [at] gmail.com>

pkgname='libgcj'
pkgver=15_4.9.2_22
pkgrel=1
pkgdesc="Dynamically load and interpret java class files. Built from binary \
executables available in Debian repositories."
url=http://gcc.gnu.org/java/
arch=(i686 x86_64)
license=(GPL)
conflicts=(gcc-gcj)
depends=(zlib)

source_i686=(http://ftp.debian.org/debian/pool/main/g/gcc-4.9/$pkgname${pkgver%_*}-${pkgver##*_}_i386.deb)
source_x86_64=(http://ftp.debian.org/debian/pool/main/g/gcc-4.9/$pkgname${pkgver%_*}-${pkgver##*_}_amd64.deb)
sha1sums_i686=('1f1aafaa926acd095c57b312939c86ece9e1059b')
sha1sums_x86_64=('0df38b32f702ab1ca735d109c9a9c2d082e5d574')

prepare() {
  tar xf data.tar.*
}

package() {
  find -type f -name 'libgcj.so*' \
    -execdir install -Dm755 {} "$pkgdir/usr/lib/{}" \;
}

# vim:set ts=2 sw=2 et:
