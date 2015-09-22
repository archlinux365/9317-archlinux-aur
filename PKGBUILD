# Maintainer: Ossi Saukko <osaukko at gmail dot com>
_name=ocp
pkgname=ocp-git
pkgver=0.1.22.r65.e62ae52
pkgrel=1
pkgdesc="Open Cubic Player (GIT Version)"
arch=('i686' 'x86_64')
url="http://stian.cubic.org/project-ocp.php"
license=('GPL')
depends=('hicolor-icon-theme'
         'libxpm'
         'libxxf86vm')
optdepends=('adplug: for OPL formats support'
            'alsa-lib: for ALSA output'
            'flac: for FLAC audio support'
            'libmad: for MPEG audio support'
            'libsidplay: for SID music support'
            'libvorbis: for Vorbis audio support'
            'sdl: for SDL user interface support')
makedepends=('git')
provides=("${_name}=${pkgver}")
conflicts=("${_name}")
install=$pkgname.install
source=("${_name}::git://git.code.sf.net/p/opencubicplayer/code")
md5sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_name}"
    printf "%s.r%s.%s" "$(grep \^AC_INIT configure.ac|cut -d, -f2|xargs)" \
        "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_name}"
    ./configure --prefix=/usr --sysconfdir=/etc

    cd "${srcdir}/${_name}"
    make
}

package() {
    cd "${srcdir}/${_name}"
    make DESTDIR="${pkgdir}" install
}
