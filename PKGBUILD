# Maintainer: Ondřej Svoboda <ondrej@svobodasoft.cz>
pkgname=osdlyrics-git
provides=(osdlyrics)
conflicts=(osdlyrics osdlyrics-pedrohlc)
pkgver=0.5.5.rc2.r0.g818bac8
pkgrel=1
pkgdesc="Standalone lyrics fetcher/displayer (windowed and OSD mode). Supports MPRIS1/2 players, and MPD."
arch=(i686 x86_64)
url="https://github.com/osdlyrics/osdlyrics"
license=(GPL3)
depends=(dbus-glib desktop-file-utils gtk2 hicolor-icon-theme libnotify
         python-{future,dbus,chardet,gobject,pycurl}
         sqlite)
makedepends=(intltool)
optdepends=('gobject-introspection-runtime: proxy detection in Gnome'
            'kdebindings-python: proxy detection in KDE'
            'python-mpd2: to interface with MPD')
install=$provides.install
source=("${provides}::git+git://github.com/osdlyrics/osdlyrics.git#branch=master")
md5sums=(SKIP)

pkgver() {
    cd "$srcdir/$provides"
	git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build()
{
    cd "$srcdir/$provides"
    ./autogen.sh
    ./configure --prefix=/usr PYTHON=/usr/bin/python
    make
}

package()
{
    cd "$srcdir/$provides"
    make DESTDIR="$pkgdir" install
}
