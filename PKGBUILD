# Maintainer: Nils Brause <nilschrbrause@gmail.com>
pkgname=sway-wlroots-git
pkgver=1.0.alpha.1.r144.g75674295
pkgrel=1
pkgdesc='i3 compatible window manager for Wayland'
arch=('x86_64')
url='http://swaywm.org'
license=('MIT')
depends=('json-c' 'pcre' 'wlroots-git' 'wayland' 'wayland-protocols'
         'libxkbcommon' 'cairo' 'pango' 'gdk-pixbuf2' 'pixman' 'libcap'
         'libinput' 'pam' 'xorg-server-xwayland')
makedepends=('git' 'meson' 'ninja' 'asciidoc')
provides=('sway')
conflicts=('sway' 'sway-git')
install=sway-wlroots-git.install
source=('git+https://github.com/swaywm/sway.git'
        'swaybar-fix.patch')
sha1sums=('SKIP'
          '0641e1030cc36e2768dee03f27f0c5016a29768c')

pkgver() {
  cd "$srcdir/sway"
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/sway"
  patch -Np1 -i "$srcdir/swaybar-fix.patch"
}

build() {
	cd "$srcdir/sway"
  rm -rf "$srcdir/build"
  meson --prefix /usr "$srcdir/build"
  ninja -C "$srcdir/build"
}

package() {
	cd "$srcdir/build"
  DESTDIR="$pkgdir" ninja install
}
