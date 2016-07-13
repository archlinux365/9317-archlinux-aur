# Maintainer:  eadrom <eadrom@archlinux.info>
# Contributor:  Martin Wimpress <code@flexion.org>

_ver=1.15
_pkgbase=pluma
pkgname="${_pkgbase}-1.15-gtk3"
pkgver=${_ver}.0
pkgrel=1
pkgdesc="A powerful text editor for MATE (GTK2 version)"
url="http://mate-desktop.org"
arch=('i686' 'x86_64')
provides=("${_pkgbase}" "${_pkgbase}-gtk3")
conflicts=("${_pkgbase}-gtk3")
license=('GPL')
depends=('desktop-file-utils' 'enchant' 'glib2' 'gtk3' 'gtksourceview2' 'iso-codes'
         'libsm' 'mate-desktop>=1.15' 'gtksourceview3' 'python2-gobject' 'zenity')
makedepends=('mate-common>=1.15' 'yelp-tools' 'gtksourceview3' 'mate-desktop>=1.15')
optdepends=('yelp: for reading MATE help documents')
groups=('mate-extra')
source=("http://pub.mate-desktop.org/releases/${_ver}/${_pkgbase}-${pkgver}.tar.xz")
sha1sums=('f31eb5cb1ac0a2a24aa5a3f0c5948da319d75328')

prepare() {
    cd "${srcdir}"
    mv "${pkgname}-${pkgver}" "${_pkgbase}-gtk3"
    cd "${srcdir}/${_pkgbase}-gtk3"
    sed -i 's/python/python2/' plugins/externaltools/data/switch-c.tool.in
}

build() {
    cd "${srcdir}/${_pkgbase}-gtk3"
    PYTHON=/usr/bin/python2 ./configure \
        --prefix=/usr \
        --libexecdir=/usr/lib/${_pkgbase} \
        --with-gtk=3.0 \
        --enable-gtk-doc=no \
        --disable-python
    make
}

package() {
    pkgdesc+=' (GTK3 version)'
    cd "${srcdir}/${_pkgbase}-gtk3"
    make DESTDIR="${pkgdir}" install
}
