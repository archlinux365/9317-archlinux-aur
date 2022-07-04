# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: Jason Wood <jwood@startmail.com>

pkgname=headlines
pkgver=0.7.1
pkgrel=1
pkgdesc="GTK4 Reddit client"
arch=('x86_64')
url="https://gitlab.com/caveman250/headlines"
license=('GPL3')
depends=(
	'libgtkmm-4.0.so'
	'cairo'
	'libmicrohttpd.so'
	'libcurl.so'
	'openssl'
	'libjsoncpp.so'
	'libxml2.so'
	'ffmpeg'
	'gstreamer'
	'gst-plugins-base'
	'gst-plugins-good'
	'gst-plugins-bad'
	'gst-libav'
	'youtube-dl'
	'websocketpp'
	'libadwaita'
	'xdg-utils'
	'libsecret-1.so')
makedepends=('cmake' 'boost')
replaces=('gtkeddit')
source=("$pkgname-$pkgver.tar.bz2::$url/-/archive/$pkgver/Headlines-$pkgver.tar.bz2")
sha256sums=('3e9b76a14898ec0fcdf68b61d52977ca2a8ee051939f8329f01d35437de394ce')

prepare() {
	cd "Headlines-$pkgver"
	sed -i '/CXX_FLAGS_RELEASE/s/O3/O2/' CMakeLists.txt
}

build() {
	cmake \
		-B build \
		-S "Headlines-$pkgver" \
		-DCMAKE_BUILD_TYPE=Release \
		-DDIST_BUILD=ON \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-Wno-dev
	make -C build
}

package() {
	make -C build install DESTDIR="$pkgdir/"
}
