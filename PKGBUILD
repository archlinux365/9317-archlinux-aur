# Maintainer: tytan652 <tytan652@tytanium.xyz>

pkgname=obs-move-transition
pkgver=2.6.2
pkgrel=1
pkgdesc="Plugin for OBS Studio to move sources to a new position during scene transition"
arch=("i686" "x86_64" "aarch64")
url="https://obsproject.com/forum/resources/move-transition.913/"
license=("GPL2")
depends=("obs-studio>=28")
makedepends=("cmake" "git" "libxcomposite" "ffmpeg" "pciutils")
source=("$pkgname::git+https://github.com/exeldro/$pkgname#tag=$pkgver")
sha256sums=("SKIP")

prepare()
{
  cd "$pkgname"
  sed -i "s|-Wswitch|-Wswitch -Wno-error=format-truncation=|" cmake/ObsPluginHelpers.cmake
}

build() {
  cd "$pkgname"
  cmake -B build \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DCMAKE_INSTALL_PREFIX='/usr' \
  -DCMAKE_INSTALL_LIBDIR=lib \
  -DLINUX_PORTABLE=OFF

  make -C build
}

package() {
  cd "$pkgname"
  make -C build DESTDIR="$pkgdir/" install
}
