pkgname=mingw-w64-kconfig
pkgver=5.23.0
pkgrel=1
arch=(any)
pkgdesc="Configuration system (mingw-w64)"
license=("LGPL")
depends=(mingw-w64-qt5-base)
groups=(mingw-w64-kf5)
makedepends=(mingw-w64-cmake mingw-w64-extra-cmake-modules mingw-w64-qt5-tools)
options=(staticlibs !strip !buildflags)
optdepends=(wine "kconfig: needed for EXE workaround symlink")
url="https://projects.kde.org/projects/frameworks/kconfig"
source=("http://download.kde.org/stable/frameworks/${pkgver%.*}/kconfig-${pkgver}.tar.xz")
md5sums=('2b822e9e4549fd2deffc23468af461e1')

_architectures="i686-w64-mingw32 x86_64-w64-mingw32"

build() {
	cd kconfig-$pkgver
	for _arch in ${_architectures}; do
    unset LDFLAGS
    mkdir "build-${_arch}" && pushd "build-${_arch}"
    ${_arch}-cmake \
      -DCMAKE_BUILD_TYPE=Release \
      -DKDE_INSTALL_USE_QT_SYS_PATHS=ON \
      -DBUILD_TESTING=OFF \
      ..
    make
    popd
  done
}

package() {
	for _arch in ${_architectures}; do
    cd "${srcdir}/${pkgname#mingw-w64-}-$pkgver/build-${_arch}"
    make DESTDIR="$pkgdir" install
    rm "$pkgdir/usr/${_arch}/bin/k"{read,write}"config5.exe"
    rm "$pkgdir/usr/${_arch}/bin/kconfig_compiler_kf5.exe"
    find "$pkgdir/usr/${_arch}" -name '*.exe' -exec ${_arch}-strip {} \;
    ln -s "/usr/bin/kconfig_compiler" "$pkgdir/usr/${_arch}/bin/kconfig_compiler_kf5.exe"
    find "$pkgdir/usr/${_arch}" -name '*.dll' -exec ${_arch}-strip --strip-unneeded {} \;
    find "$pkgdir/usr/${_arch}" -name '*.a' -o -name '*.dll' | xargs ${_arch}-strip -g
    rm -rf "$pkgdir/usr/${_arch}/share"
  done
}
