# Maintainer: Wellington <wellingtonwallace@gmail.com>
pkgname=pulseeffects
pkgver=4.1.3
pkgrel=1
pkgdesc="Audio Effects for Pulseaudio Applications"
arch=(any)
url="https://github.com/wwmm/pulseeffects"
license=('GPL3')
depends=(gtk3 gtkmm3 glibmm libpulse gstreamer gst-plugins-good gst-plugins-bad
        lilv boost-libs libsigc++)
optdepends=('calf: limiter, compressor exciter, bass enhancer and others'
            'zam-plugins: maximizer'
            'rubberband: pitch shifting'
            'mda.lv2: loudness')
makedepends=('meson' 'boost')
options=(!emptydirs)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/wwmm/pulseeffects/archive/v$pkgver.tar.gz")
sha256sums=('bd4dddc7f96626cbdec0f5fd45c4b235a9f082009d6f9ebccff8309faeb2ab9d')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  # Remove any potential residual build files
  rm -rf _build
  meson _build --prefix=/usr --buildtype=release
}

package() {
  cd "$srcdir/$pkgname-$pkgver/_build"
  env DESTDIR="$pkgdir" ninja install
}

# vim:set ts=2 sw=2 et:
