# Maintainer: Nate Simon <aurpkg (at natesimon.net)>

pkgname=xviewer
pkgver=1.2.2
pkgrel=1
pkgdesc="A simple and easy to use image viewer. X-Apps Project."
arch=('i686' 'x86_64')
license=('GPL')
depends=('gtk3' 'glib2' 'gnome-desktop' 'libpeas')
makedepends=('gnome-common' 'libglade' 'gobject-introspection')
optdepends=('xviewer-plugins: Extra plugins')
provides=($_pkgname)
conflicts=('xviewer-git')
url='https://github.com/linuxmint/xviewer'
install=xviewer.install

source=("${pkgname}-${pkgver}.tar.gz::https://github.com/linuxmint/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('d6fa09f6f860291d29c9161ac3acc691')

build() {
    cd ${srcdir}/${pkgname}-${pkgver}
    gnome-autogen.sh --prefix="/usr" \
        --localstatedir="/var" \
         --libexecdir="/usr/lib/${pkgname}"
    make
}

package(){
    cd ${srcdir}/${pkgname}-${pkgver}
    make DESTDIR="$pkgdir/" install
}

