# Maintainer:   Νικόλαος Κυριάκος Φυτίλης <n-fit@live.com>
# Contributor:  eadrom <eadrom@archlinux.info>
# Contributor:  Martin Wimpress <code@flexion.org>

_ver=1.17
_pkgbase=eom
pkgname="${_pkgbase}-dev"
pkgver=${_ver}.1
pkgrel=1
pkgdesc="An image viewing and cataloging program for MATE"
url="http://mate-desktop.org"
arch=('i686' 'x86_64')
provides=("${_pkgbase}" "${_pkgbase}-gtk3")
conflicts=("${_pkgbase}" "${_pkgbase}-gtk3")
license=('GPL')
depends=('dbus-glib' 'desktop-file-utils' 'glib2' 'gobject-introspection-runtime'
         'gtk3' 'gtk-update-icon-cache' 'exempi' 'lcms2' 'libexif' 'libjpeg-turbo'
         'librsvg' 'mate-desktop-dev' 'pygtk' 'python2-gobject2'
         'startup-notification' 'zlib')
makedepends=('gobject-introspection' 'mate-common-dev' 'yelp-tools' 'gtk3' 'mate-desktop-dev')
optdepends=('yelp: for reading MATE help documents')
groups=('mate-extra')
source=("http://pub.mate-desktop.org/releases/${_ver}/${_pkgbase}-${pkgver}.tar.xz")
sha1sums=('9e90cc9a1ad416f2d7cb9972f32527c5990e7392')

prepare() {
    cd "${srcdir}"
    mv "${_pkgbase}-${pkgver}" "${_pkgbase}-gtk3"
}

build() {
    cd "${srcdir}/${_pkgbase}-gtk3"
    ./configure \
        --prefix=/usr \
        --localstatedir=/var \
        --with-gtk=3.0 \
        --with-librsvg \
        --disable-python
    make
}

package() {
    pkgdesc+=' (GTK3 version)'
    cd "${srcdir}/${_pkgbase}-gtk3"
    make DESTDIR="${pkgdir}" install
}
