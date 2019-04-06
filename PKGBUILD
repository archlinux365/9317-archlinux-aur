# Maintainer: Lone_Wolf <lonewolf@xs4all.nl>
# Contributor: yurikoles <root@yurikoles.com>
# Contributor: bearoso <bearoso@gmail.com>
# Contributor: Luchesar V. ILIEV <luchesar%2eiliev%40gmail%2ecom>
# Contributor: Anders Bergh <anders@archlinuxppc.org>
# Contributor: Armin K. <krejzi at email dot com>
# Contributor: Christian Babeux <christian.babeux@0x80.ca>
# Contributor: Jan "heftig" Steffens <jan.steffens@gmail.com>
# Contributor: Evangelos Foutras <evangelos@foutrelis.com>
# Contributor: Hesiod (https://github.com/hesiod)
# Contributor: Roberto Alsina <ralsina@kde.org>
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Tomas Lindquist Olsen <tomas@famolsen.dk>
# Contributor: Tomas Wilhelmsson <tomas.wilhelmsson@gmail.com>

pkgname=compiler-rt-lw-git
pkgver=9.0.0_r313655.2ea8dbf5642
pkgrel=1
pkgdesc="Compiler runtime libraries for clang"
arch=('x86_64')
url="https://compiler-rt.llvm.org/"
license=('custom:University of Illinois/NCSA Open Source License')
depends=('gcc-libs')
makedepends=('git' 'llvm-lw-git' 'llvm-libs-lw-git' 'cmake' 'ninja' 'python')
# Build 32-bit compiler-rt libraries on x86_64 (FS#41911)
makedepends_x86_64=('lib32-gcc-libs')
options=('staticlibs')
source=(llvm-project::git+https://github.com/llvm/llvm-project.git)
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/llvm-project/llvm"

    # This will almost match the output of `llvm-config --version` when the
    # LLVM_APPEND_VC_REV cmake flag is turned on. The only difference is
    # dash being replaced with underscore because of Pacman requirements.
    local _pkgver=$(awk -F 'MAJOR |MINOR |PATCH |)' \
            'BEGIN { ORS="." ; i=0 } \
             /set\(LLVM_VERSION_/ { print $2 ; i++ ; if (i==2) ORS="" } \
             END { print "\n" }' \
             CMakeLists.txt)_r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
    echo "${_pkgver}"
}

prepare() {
  cd "$srcdir/llvm-project/compiler-rt"
  mkdir build
}

build() {
  cd "$srcdir/llvm-project/compiler-rt/build"

  cmake .. -G Ninja \
    -DCMAKE_BUILD_TYPE=Release \
    -DCMAKE_INSTALL_PREFIX=/usr
  ninja
}

package() {
  provides=(compiler-rt-lw-git compiler-rt-git)
  cd "$srcdir/llvm-project/compiler-rt/build"

  DESTDIR="$pkgdir" ninja install
  install -Dm644 ../LICENSE.TXT "$pkgdir/usr/share/licenses/$pkgname/LICENSE"

  mkdir -p "$pkgdir"/usr/lib/clang/$pkgver/{lib,share}
  mv "$pkgdir"/usr/lib/{linux,clang/$pkgver/lib/}
  mv "$pkgdir"/usr/{share/*.txt,lib/clang/$pkgver/share/}
}

# vim:set ts=2 sw=2 et:
