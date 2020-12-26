# Maintainer: Michael Kogan <michael.kogan at gmx dot net>
# Co-maintainer: Mario Cianciolo <mr.udda at gmail dot com>

# This file is automatically generated from multiload-ng source.

pkgname='xfce4-multiload-ng-plugin-gtk3'
pkgdesc='Modern graphical system monitor, XFCE4 panel plugin'
pkgver=1.5.2
pkgrel=4

makedepends=('intltool')
depends=('gtk3' 'cairo' 'libxfce4util>=4.12.0' 'xfce4-panel>=4.12.0' 'multiload-ng-common')

conflicts=('xfce4-multiload-ng-plugin-gtk2' 'xfce4-multiload-ng-plugin-gtk2-git' 'xfce4-multiload-ng-plugin-gtk3-git')

source=("https://github.com/udda/multiload-ng/archive/v$pkgver.tar.gz" "build-fix.patch")
md5sums=('bdb9344d696324bd4db04a8bce6d7ec0'
         '898eb6c7df5df2ef641cd83836627559')

arch=('i686' 'x86_64')
url='https://udda.github.io/multiload-ng/'
license=('GPL2')

build() {
    cd "multiload-ng-$pkgver"
    patch -p1 -i $srcdir/build-fix.patch
    ./autogen.sh
    ./configure --prefix=/usr --with-gtk=3.0 --disable-deprecations --without-awn --without-indicator --without-lxpanel --without-mate --without-standalone --without-systray --with-xfce4
    make
} 

package() {
    cd "multiload-ng-$pkgver"
    make DESTDIR="$pkgdir" install
    rm -r "$pkgdir/usr/share/locale"
}
