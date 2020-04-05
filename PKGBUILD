# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Robosky <fangyuhao0612@gmail.com>

pkgname=mcmojave-circle-icon-theme-git
_gitname=McMojave-circle
pkgver=80.6696191
pkgrel=1
pkgdesc="MacOSX Mojave like circle icon theme for linux desktops"
arch=('any')
depends=('gtk-update-icon-cache')
makedepends=('git')
optdepends=('mojave-gtk-theme-git: Recommended GTK theme.')
license=('GPL-3.0')
url="https://github.com/vinceliuice/${_gitname}"
source=("git+${url}")
md5sums=('SKIP')
options=('!strip')

pkgver() {
    cd "${srcdir}/${_gitname}"
    echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package() {
    cd "${srcdir}/${_gitname}"
    install -dm755 "${pkgdir}/usr/share/icons"
    ./install.sh  \
    	--all \
    	--dest "${pkgdir}/usr/share/icons"
}
