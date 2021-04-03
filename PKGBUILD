# Maintainer: Molten <craxell.tv@gmail.com>

_pkgname="pyfetch"
pkgname="${_pkgname}-git"
pkgver=1.0.0
pkgrel=3
pkgdesc="A simple and fast alternative to neofetch."
arch=('x86_64')
url="https://kreatea.ml/kreato/pyfetch"
license=('GPL3')
groups=()
depends=('wmctrl' 'otf-font-awesome' 'python' 'python-pip')
makedepends=()
provides=("${_pkgname}")
conflicts=()
backup=("usr/share/${_pkgname}/data")
source=("https://kreatea.ml/kreato/pyfetch/raw/branch/master/pyfetch")
md5sums=('SKIP')

prepare() {
    chmod +x pyfetch
    # install deps
    pip install distro psutil colorama
}

package() {
    # install built binary
    install -Dm 755 "pyfetch" "${pkgdir}/usr/bin/${_pkgname}"
}
