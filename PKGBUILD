# Maintainer: oi_wtf <brainpower at mailbox dot org>

pkgname=ashuffle
pkgver=3.10.0
pkgrel=1
pkgdesc="Automatic library-wide shuffle for mpd."
url="https://github.com/joshkunz/ashuffle"
arch=(x86_64 i686 armv6h armv7h aarch64)
license=(MIT)

depends=("libmpdclient")
makedepends=("meson" "abseil-cpp>=20200225.2-2" "gtest>=1.10" "gmock>=1.10")

source=(
  "https://github.com/joshkunz/ashuffle/archive/v${pkgver}/ashuffle-${pkgver}.tar.gz"
)
sha256sums=(
  "27398a174aaa4216b7cbf2fd572a90f5f9b004a37cfe1c153abe32d2cc827771"
)


#prepare() {
#  cd "ashuffle-${pkgver}"
#}

build() {
  cd "ashuffle-${pkgver}"

  arch-meson \
    -Dtests=enabled \
    -Dunsupported_use_system_absl=true \
    -Dunsupported_use_system_gtest=true \
    builddir

  ninja -C builddir
}

check() {
  cd "ashuffle-${pkgver}"

  ninja -C builddir test
}

package() {
  cd "ashuffle-${pkgver}"

  DESTDIR="${pkgdir}" ninja -C builddir install

  install -Dm644 "LICENSE" \
    "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
