# Maintainer: Mario Cianciolo <mr.udda at gmail dot com>
# Co-maintainer: Michael Kogan <michael.kogan at gmx dot net>

# This file is automatically generated from multiload-ng source.

pkgname='xfce4-multiload-ng-plugin-gtk2-git'
pkgdesc='Modern graphical system monitor, XFCE4 panel plugin'
pkgver=r907.66045e6
pkgrel=1

makedepends=('intltool' 'git')
depends=('gtk2>=2.20.0' 'cairo' 'libxfce4util>=4.6.0' 'xfce4-panel>=4.6.0')

conflicts=('xfce4-multiload-ng-plugin-gtk2' 'xfce4-multiload-ng-plugin-gtk3' 'xfce4-multiload-ng-plugin-gtk3-git')

replaces=('xfce4-multiload-ng-plugin-git')

source=("git+https://github.com/udda/multiload-ng.git")
md5sums=('SKIP')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng"
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=2.0 --without-awn --without-indicator --without-lxpanel --without-mate --without-standalone --without-systray --with-xfce4
    make
} 

package() {
    cd "multiload-ng"
    make DESTDIR="$pkgdir" install
}

pkgver() {
    cd "multiload-ng"
    printf -- "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
