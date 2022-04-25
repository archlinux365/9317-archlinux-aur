# Maintainer: Felipe Tavares <felipe.oltavares+aur@gmail.com>
# Contributor: Oleg Shparber <trollixx+aur@gmail.com>
# Contributor: Bartłomiej Piotrowski <bpiotrowski@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Sébastien Luttringer
# Contributor: xduugu
# Contributor: Ronald van Haren <ronald.archlinux.org>
# Contributor: Vesa Kaihlavirta
# URL: https://github.com/trollixx/aur-packages
# Upstream: https://projects.archlinux.org/svntogit/community.git/tree/trunk?h=packages/awesome

_pkgname=awesome-telegramfix
pkgname=${_pkgname}-git
pkgver=4.3.1347.ga1f58ab97
pkgrel=1
pkgdesc='Highly configurable framework window manager; fixes telegram dead keys bug'
arch=('i686' 'x86_64')
url='http://awesome.naquadah.org/'
license=('GPL2')
depends=('cairo' 'dbus' 'gdk-pixbuf2' 'libxdg-basedir' 'libxkbcommon-x11'
         'lua' 'lua-lgi' 'pango' 'startup-notification' 'xcb-util-cursor'
         'xcb-util-keysyms' 'xcb-util-wm' 'xcb-util-xrm' 'libxfixes')
makedepends=('asciidoctor' 'cmake' 'docbook-xsl' 'git' 'imagemagick' 'ldoc'
             'xmlto')
optdepends=('rlwrap: readline support for awesome-client'
            'dex: autostart your desktop files'
            'xcb-util-errors: for pretty-printing of X11 errors'
            'librsvg: for displaying SVG files without scaling artifacts'
)
provides=('notification-daemon' 'awesome')
conflicts=('awesome')
backup=('etc/xdg/awesome/rc.lua')
source=("$pkgname::git+https://github.com/felipetavares/awesome.git")
md5sums=('SKIP')
_LUA_VER=5.4

pkgver() {
  cd $pkgname
  git describe | sed 's/^v//;s/-/./g'
}

build() {
  mkdir -p build
  cd build
  cmake ../$pkgname \
    -DCMAKE_BUILD_TYPE=RELEASE \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DSYSCONFDIR=/etc \
    -DLUA_INCLUDE_DIR=/usr/include/lua${_LUA_VER} \
    -DLUA_LIBRARY=/usr/lib/liblua.so.${_LUA_VER} \
    -DLUA_EXECUTABLE=/usr/bin/lua${_LUA_VER}
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  install -Dm644 "$srcdir"/$pkgname/awesome.desktop \
    "$pkgdir/usr/share/xsessions/awesome.desktop"
}
