# Maintainer: ivanich
pkgname=kodi-addon-inputstream-ffmpegdirect
pkgver=1.21.3
pkgrel=1
pkgdesc="Inputstream ffmpegdirect kodi plugin"
_koditarget=Matrix
_gitname=inputstream.ffmpegdirect
_kodiver=19.0
arch=('armv6h' 'armv7h' 'aarch64' 'i686' 'x86_64')
url="https://github.com/xbmc/${_gitname}"
license=('GPL')
groups=('kodi')
makedepends=('cmake' 'git' 'autoconf' 'automake' 'patch' 'nasm')
provides=('kodi-addon-inputstream-ffmpegdirect')
depends=('kodi')
source=("https://github.com/xbmc/${_gitname}/archive/${pkgver}-${_koditarget}.tar.gz"
        "https://github.com/xbmc/xbmc/archive/${_kodiver}-${_koditarget}.tar.gz"
)

sha256sums=('f871010d3f62c4f5c1a294c898802a0ef8456e3e9eb96f7cd69be07916981a6b'
            'f7ef8a6f45862ae3b7ebfce4950d74f534be3cb4a0e67ce640963746b3f668f2')

prepare() {
        cd xbmc-${_kodiver}-${_koditarget}
}

build() {
        mkdir -p "${_gitname}-${pkgver}-${_koditarget}/build"
        cd "${_gitname}-${pkgver}-${_koditarget}/build"

        cmake \
                -DCMAKE_INSTALL_PREFIX=/usr \
                -DCMAKE_INSTALL_LIBDIR=/usr/lib/kodi \
                -DCMAKE_BUILD_TYPE=Release \
                -DBUILD_SHARED_LIBS=1 \
                -DADDONS_TO_BUILD=${_gitname} \
                -DADDONS_SRC_PREFIX=../.. \
                ../../xbmc-${_kodiver}-${_koditarget}/cmake/addons
        make
}

package() {
        cd "${_gitname}-${pkgver}-${_koditarget}/build"
        install -d "${pkgdir}/usr"
        mv .install/lib "${pkgdir}/usr/"
        mv .install/share "${pkgdir}/usr/"
}
