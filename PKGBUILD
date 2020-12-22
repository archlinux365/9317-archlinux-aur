# Maintainer: Federico Di Pierro <nierro92@gmail.com>

pkgname=clight
_gitname=Clight
pkgver=4.2
pkgrel=1
pkgdesc="A C daemon that turns your webcam into a light sensor. It can also change display gamma temperature, dim your screen and set your dpms."
arch=('i686' 'x86_64')
url="https://github.com/FedeDP/${_gitname}"
license=('GPL')
backup=(etc/default/clight.conf)
depends=('systemd>=221' 'popt' 'libconfig' 'gsl' 'clightd>=5.0' 'libmodule>=5.0.0')
makedepends=('git' 'cmake' 'bash-completion')
optdepends=('geoclue2: to retrieve user location through geoclue2.'
            'upower: to save energy by increasing timeouts between captures while on battery and to autocalibrate keyboard backlight.'
            'bash-completion: to add support for bash automatic completion.')
provides=('clight')
conflicts=('clight-git')
source=("${_gitname}-${pkgver}.tar.gz::${url}/archive/${pkgver}.tar.gz")
install=clight.install
sha256sums=("5abfbbeacc71d5734dbddb0c332b8e4cc224f5e2272c2ff36e352856bcc4dfc2")

prepare() {
    cd "${srcdir}/${_gitname}-${pkgver}"
    mkdir -p build
}

build() {
    cd "${srcdir}/${_gitname}-${pkgver}/build"
    cmake \
        -G "Unix Makefiles" \
        -DCMAKE_INSTALL_PREFIX=/usr \
        -DCMAKE_INSTALL_LIBDIR=lib \
        -DCMAKE_BUILD_TYPE="Release" \
        ..
    make
}

package() {
    cd "${srcdir}/${_gitname}-${pkgver}/build"
    make DESTDIR="$pkgdir" install
}
