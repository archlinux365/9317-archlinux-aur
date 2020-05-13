# Maintainer: oi_wtf <brainpower at mailbox dot org>

pkgname=ashuffle
pkgver=3.2.0
pkgrel=1
pkgdesc="Automatic library-wide shuffle for mpd."
url="https://github.com/joshkunz/ashuffle"
arch=(x86_64 i686 armv6h armv7h aarch64)
license=(MIT)

depends=("libmpdclient")
makedepends=("meson" "cmake")

source=(
  "https://github.com/joshkunz/ashuffle/archive/v${pkgver}/ashuffle-${pkgver}.tar.gz"
  "git+https://github.com/abseil/abseil-cpp.git#commit=b69c7d880caddfc25bf348dbcfe9d45fdd8bc6e6"
  "git+https://github.com/google/googletest.git#commit=703bd9caab50b139428cea1aaff9974ebee5742e"
)
sha256sums=(
  "e46d923c684e7c7170d90a47221d0de28939c21e85d7e3a1d3915da6551b8486"
  'SKIP' 'SKIP'
)


prepare() {
  cd "ashuffle-${pkgver}"
  rmdir "subprojects/absl" "subprojects/googletest"

  ln -s "${srcdir}/abseil-cpp" "subprojects/absl"
  ln -s "${srcdir}/googletest" "subprojects/googletest"
}

build() {
  cd "ashuffle-${pkgver}"

  arch-meson -Dtests=enabled builddir

  ninja -C builddir
}

check() {
  cd "ashuffle-${pkgver}"

  ninja -C builddir test
}

package() {
  cd "ashuffle-${pkgver}"

  DESTDIR="${pkgdir}" ninja -C builddir install

  # clean up weird static libs installed
  # this is a meson bug:
  # https://github.com/mesonbuild/meson/issues/2550
  rm -f "${pkgdir}/usr/lib/"*.a
  rmdir "${pkgdir}/usr/lib"

  install -Dm644 "LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
