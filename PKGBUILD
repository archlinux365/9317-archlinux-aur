#Maintainer : Grigory Mishchenko <grishkokot[at]gmail[dot]com>

pkgname=kindness-stable-git
pkgver=0.1.31.g149960c
pkgrel=1
pkgdesc='Some cool stuff for awesome wm'
arch=('i686' 'x86_64')
license=('GPL2')
url='https://github.com/kindlycat/kindness.git'
depends=('awesome')
conflicts=('kindness-git')

source=($pkgname::git+http://github.com/kindlycat/kindness.git#branch=stable)
md5sums=('SKIP')

_gitname="kindness"

pkgver() {
    cd "${pkgname}"
    git describe --always | sed 's|-|.|g' | sed 's/v//g'
}

package() {
    cd "${pkgname}"

    # Install library
    install -d "${pkgdir}/usr/share/awesome/lib/${_gitname}"
    install -m644 *.lua "${pkgdir}/usr/share/awesome/lib/${_gitname}"

    # Install widgets
    install -d "${pkgdir}/usr/share/awesome/lib/${_gitname}/widget"
    install -m644 widget/*.lua "${pkgdir}/usr/share/awesome/lib/${_gitname}/widget"

    # Install layouts
    install -d "${pkgdir}/usr/share/awesome/lib/${_gitname}/layout"
    install -m644 layout/*.lua "${pkgdir}/usr/share/awesome/lib/${_gitname}/layout"
}
