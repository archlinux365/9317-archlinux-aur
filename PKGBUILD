# Maintainer: Mario Cianciolo <mr.udda at gmail dot com>
# Co-maintainer: Michael Kogan <michael.kogan at gmx dot net>

# This file is automatically generated from multiload-ng source.

pkgname='multiload-ng-standalone-gtk3-git'
pkgdesc='Modern graphical system monitor, standalone version'
pkgver=r926.246cb4c
pkgrel=1

makedepends=('intltool' 'git')
depends=('gtk3' 'cairo')

conflicts=('multiload-ng-standalone-gtk2' 'multiload-ng-standalone-gtk3' 'multiload-ng-standalone-gtk2-git')

source=("git+https://github.com/udda/multiload-ng.git")
md5sums=('SKIP')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng"
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=3.0 --disable-deprecations --without-awn --without-indicator --without-lxpanel --without-mate --with-standalone --without-systray --without-xfce4
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
