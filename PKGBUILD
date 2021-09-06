# Maintainer: Behnam Momeni <sbmomeni [at the] gmail [dot] com>
# Contributor: Daniel Isenmann <daniel@archlinux.org>

pkgname=lib32-babl
_pkgbase=babl
pkgver=0.1.88
_commit=d4984bc2f2db34091151512697ab0bd3a7b91663  # tags/BABL_0_1_88
pkgrel=1
pkgdesc="Dynamic, any to any, pixel format conversion library (32-bit)"
arch=(x86_64)
url="https://gegl.org/babl/"
license=('LGPL3')
depends=("babl=$pkgver" 'lib32-glibc' 'lib32-lcms2')
makedepends=(meson gobject-introspection)
source=("https://gitlab.gnome.org/GNOME/$_pkgbase/-/archive/$_commit/$_pkgbase-$_commit.tar.gz"
        "git-version.h"
        "x86-linux-gnu"
        "pkgconf32")
sha512sums=('586fd1937aad6f3ee00dcb28cfebd4555f20f88879b911d7fa1e577b8c5a8aa658f1479d72e92c3a1ea7709c385f64b7bba72cd827fa97307be2d35130e017fa'
            '0a455f8f694bd7aab276e7c18d553de44d8b8a6849cf3b3b386696bc89de79e1490bdb6ce5a629c79faa219b6c3e95d33e785653437b08d3c326985d7118f972'
            'c90a2e8d8753d4474afbaa5f1def579b4fe9580904b25125e2f942fa722a6ed54340e467d2ddf60ab9d3aeeeb93f5f740502cafe9a1f52d55da3bd78baa3b5c5'
            'f21dd90f4f9caf67854f68baddbfbfecda295cb53f0444a1c0bfb98246390ae5d48ba5a0892fecf8a7faa937ef88884743a8e4282ca98d54c0da80c5457ef066')

prepare() {
  cp "git-version.h" "${_pkgbase}-$_commit/babl/"
}

build() {
  mkdir -p "build"
  arch-meson "${_pkgbase}-$_commit" "build" --cross-file x86-linux-gnu --libdir=/usr/lib32
  ninja -C "build"
}

package() {
  DESTDIR="$pkgdir" ninja -C "build" install
  rm -r "$pkgdir/usr/include"
}

