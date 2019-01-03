# Maintainer: Stephan Springer <buzo+arch@Lini.de>
# Contributor: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Ronald van Haren <ronald.archlinux.org>

pkgname=qwt-qt4
_pkgname=qwt
pkgver=6.1.4
pkgrel=1
pkgdesc='Qt Widgets for Technical Applications - Qt4 version'
arch=('i686' 'x86_64')
url='http://qwt.sourceforge.net/'
depends=('gcc-libs' 'glibc' 'qt4')
license=('custom')
source=("https://downloads.sourceforge.net/$_pkgname/$_pkgname-$pkgver.tar.bz2")
sha256sums=('1529215329e51fc562e0009505a838f427919a18b362afff441f035b2d9b5bd9')

prepare() {
    cd "$_pkgname-$pkgver"

    sed -e '/^\s*QWT_INSTALL_PREFIX/ s|=.*|= /usr|' \
        -e '/^QWT_INSTALL_DOCS/ s|^|#|' \
        -e '/^QWT_INSTALL_HEADERS/ s|include|&/qwt-qt4|' \
        -e '/^QWT_INSTALL_PLUGINS/ s|plugins/designer|lib/qt4/&|' \
        -e '/^QWT_INSTALL_FEATURES/ s|features|share/qt4/mkspecs/&|' \
        -i qwtconfig.pri

    sed -i '/^\s*\(LIBRARY_NAME\|LIB_NAME\)/ s/$/-qt4/' qwtfunctions.pri
}

build() {
    cd "$_pkgname-$pkgver"
    qmake-qt4 qwt.pro
    make
}

package() {
    cd "$_pkgname-$pkgver"
    make INSTALL_ROOT="$pkgdir" install
    install -Dm644 COPYING -t "$pkgdir/usr/share/licenses/$pkgname"
}
