# Maintainer: Mario Cianciolo <mr.udda at gmail dot com>
# Co-maintainer: Michael Kogan <michael.kogan at gmx dot net>

# This file is automatically generated from multiload-ng source.

pkgname='multiload-ng-systray-gtk2'
pkgdesc='Modern graphical system monitor, system tray version'
pkgver=1.5.1
pkgrel=1

makedepends=('intltool')
depends=('gtk2>=2.20.0' 'cairo')

conflicts=('multiload-ng-systray-gtk3' 'multiload-ng-systray-gtk2-git' 'multiload-ng-systray-gtk3-git')

source=("https://github.com/udda/multiload-ng/archive/v$pkgver.tar.gz")
md5sums=('9e58191382aa39a05a040ef7be794ab6')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng-$pkgver"
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=2.0 --without-awn --without-indicator --without-lxpanel --without-mate --without-standalone --with-systray --without-xfce4
    make
} 

package() {
    cd "multiload-ng-$pkgver"
    make DESTDIR="$pkgdir" install
}
