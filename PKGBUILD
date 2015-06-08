# Maintainer: Ryo Munakata <afpacket@gmail.com>
pkgname=glmark2-git
pkgver=r823.e1969fb
pkgrel=1
pkgdesc="OpenGL (ES) 2.0 benchmark (X11, Wayland, DRM)"
arch=('i686' 'x86_64')
url="https://launchpad.net/glmark2"
license=('GPL3')
depends=('libjpeg-turbo' 'libpng12' 'libx11' 'libxcb' 'libgl' 'wayland')
makedepends=('git' 'python2')
conflicts=('glmark2')
provides=('glmark2')
source=("$pkgname"::'git://github.com/glmark2/glmark2.git')
md5sums=('SKIP')

# GLMARK2 features
GM2_FLAVORS="x11-gl,x11-glesv2,wayland-gl,wayland-glesv2,drm-gl,drm-glesv2"

pkgver() {
    cd "${srcdir}/${pkgname}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${pkgname}"
    python2 ./waf configure \
        --prefix=/usr \
        --with-flavors=${GM2_FLAVORS}
    python2 ./waf -j4
}

package() {
    cd "${srcdir}/${pkgname}"
    DESTDIR="${pkgdir}" python2 ./waf install
}
