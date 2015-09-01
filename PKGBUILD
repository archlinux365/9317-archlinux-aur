# Maintainer: Karol "Kenji Takahashi" Woźniak <kenji.sx>

pkgname=copyq-plugin-itemweb
_realname=CopyQ
pkgver=2.4.9
pkgrel=1
pkgdesc="Clipboard manager with searchable and editable history. Itemweb plugin."
url="https://github.com/hluk/CopyQ"
depends=('qtwebkit' 'copyq')
makedepends=('cmake')
license=('GPL3')
arch=('i686' 'x86_64')
source=("https://github.com/hluk/$_realname/archive/v${pkgver}.tar.gz")
md5sums=('1e5dd7422c7f31ca85008c3c2bfd7a0d')

build() {
    mkdir "${srcdir}/build"
    cd "${srcdir}/build"
    cmake -DCMAKE_INSTALL_PREFIX=/usr \
        -DQT_QMAKE_EXECUTABLE=qmake-qt4 \
        "${srcdir}/${_realname}-${pkgver}"
    make itemweb
}

package() {
    cd "${srcdir}/build"
    install -Dm755 plugins/libitemweb.so "${pkgdir}/usr/lib/copyq/plugins/libitemweb.so"
}

# vim:set ts=4 sw=4 et:
