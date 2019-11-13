# Maintainer: Philip Goto <philip.goto@gmail.com>

pkgname=shortwave-git
pkgver=0.0.1.r0.gcd80fc2
pkgrel=1
pkgdesc="Find and listen to internet radio stations"
arch=(i686 x86_64 armv6h armv7h)
url="https://gitlab.gnome.org/World/Shortwave"
license=(GPL3)
depends=(gstreamer
         libhandy)
makedepends=(appstream-glib
             git
             gobject-introspection
             gst-plugins-base-libs
             libdazzle
             libhandy
             meson
             rust)
provides=(shortwave gradio)
conflicts=(shortwave gradio)
source=("git+https://gitlab.gnome.org/World/Shortwave.git")
sha256sums=('SKIP')

pkgver() {
    cd Shortwave
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  arch-meson Shortwave build
  ninja -C build
}

check() {
  ninja -C build test
}

package() {
  DESTDIR="$pkgdir/" ninja -C build install
}
