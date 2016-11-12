# Maintainer: Mario Cianciolo <mr.udda at gmail dot com>
# Co-maintainer: Michael Kogan <michael.kogan at gmx dot net>

# This file is automatically generated from multiload-ng source.

pkgname='awn-applet-multiload-ng-gtk2-git'
pkgdesc='Modern graphical system monitor, Avant Window Navigator applet'
pkgver=r873.061ad33
pkgrel=1

makedepends=('intltool' 'git')
depends=('gtk2>=2.20.0' 'cairo' 'avant-window-navigator>=0.3.9' 'glibmm>=2.16.0' 'gtkmm>=2.20')

conflicts=('awn-applet-multiload-ng-gtk2' 'awn-applet-multiload-ng-gtk3' 'awn-applet-multiload-ng-gtk3-git')

source=("git+https://github.com/udda/multiload-ng.git")
md5sums=('SKIP')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng"
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=2.0 --with-awn --enable-experimental --without-indicator --without-lxpanel --without-mate --without-standalone --without-systray --without-xfce4
    make
} 

package() {
    cd "multiload-ng"
    make -C "awn" DESTDIR="$pkgdir" install
}

pkgver() {
    cd "multiload-ng"
    printf -- "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
