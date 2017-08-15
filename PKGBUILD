pkgname=gtk3-optional-csd
pkgver=3.22.18
pkgrel=2

pkgdesc='gobject-based gui toolkit with optionally enabled csd'
url='http://www.gtk.org/'
arch=('i686' 'x86_64')
license=('LGPL')

depends=('atk' 'cairo' 'libxcursor' 'libxinerama' 'libxrandr' 'libxi'
         'libepoxy' 'gdk-pixbuf2' 'dconf' 'libxcomposite' 'libxdamage' 'pango'
         'shared-mime-info' 'at-spi2-atk' 'wayland' 'libxkbcommon'
         'adwaita-icon-theme' 'json-glib' 'librsvg' 'wayland-protocols'
         'desktop-file-utils' 'mesa' 'cantarell-fonts')
makedepends=('gobject-introspection' 'libcanberra' 'gtk-doc' 'git' 'colord'
             'rest' 'libcups' 'glib2-docs' 'sassc')

provides=("gtk3=$pkgver" 'gtk3-print-backends' 'gtk-update-icon-cache')
conflicts=('gtk3' 'gtk3-print-backends' 'gtk-update-icon-cache')

source=("https://download.gnome.org/sources/gtk+/${pkgver:0:4}/gtk+-$pkgver.tar.xz"
        'https://github.com/GNOME/gtk/commit/340c520bd04e0000f731573f020.patch'
        'gtk3-make-csd-optional.patch'
        'gtk-query-immodules-3.0.hook'
        'gtk-update-icon-cache.hook'
        'gtk-update-icon-cache.script')

sha256sums=('b64b1c2ec20adf128ac08ee704d1f4e7b0a8d3df097d51f62edb271c7bb1bf69'
            'e0948d01bd9867589a7aee52d133ff4a6709db3cf0e66991a312d4d0afc8e6b6'
            '77f9c7b9260af85b4185bfaef8e556cc1b16db4cc7a7942fc54d5114d338ebcf'
            'de46e5514ff39a7a65e01e485e874775ab1c0ad20b8e94ada43f4a6af1370845'
            '496064a9dd6214bd58f689dd817dbdc4d7f17d42a8c9940a87018c3f829ce308'
            'f1d3a0dbfd82f7339301abecdbe5f024337919b48bd0e09296bb0e79863b2541')

install='gtk3.install'

prepare() {
    cd gtk+-"$pkgver"
    # https://bugs.archlinux.org/task/55114
    patch -Np1 -i "$srcdir"/340c520bd04e0000f731573f020.patch
    patch -Np1 -i "$srcdir"/gtk3-make-csd-optional.patch
}

build() {
    cd gtk+-"$pkgver"
    CXX=/bin/false ./configure --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --enable-x11-backend \
        --enable-wayland-backend \
        --enable-broadway-backend \
        --disable-schemas-compile \
        --enable-gtk-doc

    # XXX https://bugzilla.gnome.org/show_bug.cgi?id=655517
    sed -i -e 's/ -shared / -Wl,-O1,--as-needed\0/g' libtool

    make
}

package() {
    cd gtk+-"$pkgver"
    make DESTDIR="$pkgdir" install
}
