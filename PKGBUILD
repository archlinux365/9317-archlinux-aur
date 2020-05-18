# Maintainer: Jochen Jägers (JochenJ) <aur@diezonks.de>
# Contributor: boteium <me@hamal.in>

pkgname=websocketpp-git-dev
_gitname=websocketpp
pkgver=0.8.3.1726.52eb086
pkgrel=2
pkgdesc='C++/Boost Asio based websocket client/server library, Develop branch'
url='http://www.zaphoyd.com/websocketpp/'
arch=('any')
license=('BSD')
optdepends=(
  'openssl: TLS socket component support'
  'asio: alternative asio transport support'
  'boost: non C++11 environments support'
  'boost-libs: non C++11 environments support'
)
makedepends=('git' 'cmake' 'boost' 'boost-libs' 'scons' 'gawk')
provides=('websocketpp')
conflicts=('websocketpp')
source=(${pkgname}::git+https://github.com/zaphoyd/${_gitname}#branch=develop 893.patch 895.patch)
sha512sums=('SKIP'
	    '2d1e212f2c13358d478997d7573c257f1bfc3c2aa5f52f9cf5a451d718c657e9e3f169433f5e1ef11333398348210385cfb26810e037f45f2be5753ad155095a'
	    'fa35e00e80c0c9129161df700b0be3a82bf924e074db5ccad45fe3f6a106f7d4dc03acaa6ce37185caad0aece3846e2a07b6f3c58158652277d0c081103f1bbc' )

pkgver() {
  cd ${pkgname}
  printf "%s.%s.%s.%s.%s" \
    "$(gawk 'match($0, /WEBSOCKETPP_MAJOR_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(gawk 'match($0, /WEBSOCKETPP_MINOR_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(gawk 'match($0, /WEBSOCKETPP_PATCH_VERSION ([0-9]*)/, a) {print a[1]}'  CMakeLists.txt)" \
    "$(git rev-list --count HEAD)" \
    "$(git rev-parse --short HEAD)"
}

prepare() {
  cd ${pkgname}
  patch --forward --strip=1 --input="${srcdir}/893.patch"
  patch --forward --strip=1 --input="${srcdir}/895.patch"
}	

build() {
  cd ${pkgname}
  WSPP_ENABLE_CPP11=1 \
    BOOST_LIBS=/usr/lib \
    BOOST_INCLUDES=/usr/include/boost \
    scons "${MAKEFLAGS}"
  (cd build
    cmake -DCMAKE_INSTALL_PREFIX=/usr ..
  )
}

check() {
  cd ${pkgname}
  WSPP_ENABLE_CPP11=1 \
    BOOST_LIBS=/usr/lib \
    BOOST_INCLUDES=/usr/include/boost \
    scons test
}

package() {
  cd ${pkgname}
  make -C build DESTDIR="${pkgdir}" install
  install -Dm 644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  install -Dm 644 readme.md "${pkgdir}/usr/share/doc/${pkgname}/README"
}
