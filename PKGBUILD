# Maintainer: Varakh <varakh@varakh.de>

pkgname=spotifyd-git
pkgver=0.2.1
pkgrel=1
arch=('x86_64' 'armv7h' 'aarch64')
depends=('flac' 'libogg' 'libsndfile' 'libvorbis')
makedepends=('git' 'cargo')
conflicts=('spotifyd-bin' 'spotifyd-pulseaudio-git')
pkgdesc="A spotify playing daemon"
url="https://github.com/Spotifyd/spotifyd"
source=("spotifyd::git+https://github.com/Spotifyd/spotifyd")
sha256sums=('SKIP')

pkgver() {
  cd $srcdir/spotifyd;
  git describe --tags --match 'v*' | sed 's/^v//;s/-/./g'
}

build() {
  cd $srcdir/spotifyd;
  cargo build --release
}

package() {
  install -D -m 755 "$srcdir/spotifyd/target/release/spotifyd" "${pkgdir}/usr/bin/spotifyd"
  install -D -m 644 "$srcdir/spotifyd/contrib/spotifyd.service" "${pkgdir}/usr/lib/systemd/user/spotifyd.service"
}
