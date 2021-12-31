# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=video-trimmer
pkgver=0.7.0
pkgrel=1
pkgdesc="Trim videos quickly"
arch=('x86_64')
url="https://apps.gnome.org/app/org.gnome.gitlab.YaLTeR.VideoTrimmer"
license=('GPL3')
depends=('ffmpeg' 'gtk4' 'gst-plugins-good' 'libadwaita')
makedepends=('blueprint-compiler' 'cargo' 'git' 'gobject-introspection' 'meson')
checkdepends=('appstream-glib')
source=("https://gitlab.gnome.org/YaLTeR/video-trimmer/-/archive/v$pkgver/$pkgname-v$pkgver.tar.gz")
sha256sums=('e9c6c3990f70962937ba57558162ca5b795ef3c828c51a0be59e4cf2a09aa156')

prepare() {
  cd "$pkgname-v$pkgver"
  export RUSTUP_TOOLCHAIN=stable
  cargo fetch --target "$CARCH-unknown-linux-gnu"
}

build() {
  export RUSTUP_TOOLCHAIN=stable
  arch-meson "$pkgname-v$pkgver" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install -C build --destdir "$pkgdir"
}
