# Maintainer: Sefa Eyeoglu <contact@scrumplex.net>
# Contributor: Jonathan Steel <jsteel at archlinux.org>
# Contributor: Benjamin Klettbach <b.klettbach@gmail.com>

_pkgname=obs-studio
pkgname=obs-studio-ftl
pkgver=27.1.3
pkgrel=1
pkgdesc="Free, open source software for live streaming and recording (with FTL protocol support)"
arch=('x86_64')
url="https://obsproject.com"
license=('GPL2')
depends=('ffmpeg' 'jansson' 'libxinerama' 'libxkbcommon-x11' 'mbedtls'
         'qt5-svg' 'curl' 'jack' 'gtk-update-icon-cache' 'pipewire' 'libxcomposite' 'ftl-sdk')
makedepends=('cmake' 'libfdk-aac' 'x264' 'swig' 'python' 'luajit' 'sndio')
optdepends=('libfdk-aac: FDK AAC codec support'
            'libva-intel-driver: hardware encoding'
            'libva-mesa-driver: hardware encoding'
            'luajit: scripting support'
            'python: scripting support'
            'sndio: Sndio input client'
            'v4l2loopback-dkms: virtual camera support')
provides=($_pkgname)
conflicts=($_pkgname)
source=($_pkgname-$pkgver.tar.gz::https://github.com/jp9000/obs-studio/archive/$pkgver.tar.gz
	fix_python_binary_loading.patch)
md5sums=('fc9df69561e3f1b140f7234b440a02bf'
         '051b90f05e26bff99236b8fb1ad377d1')

prepare() {
  cd $_pkgname-$pkgver
  patch -Np1 < "$srcdir"/fix_python_binary_loading.patch
}

build() {
  cd $_pkgname-$pkgver

  mkdir -p build; cd build

  cmake -DCMAKE_INSTALL_PREFIX="/usr" \
    -DBUILD_BROWSER=OFF \
    -DBUILD_VST=OFF \
    -DDISABLE_VLC=ON \
    -DOBS_VERSION_OVERRIDE="$pkgver-$pkgrel" ..

  make
}

package() {
  cd $_pkgname-$pkgver/build

  make install DESTDIR="$pkgdir"
}
