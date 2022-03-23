# Contributor: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=aisleriot-git
pkgver=3.22.21.r8.gde390345
pkgrel=1
pkgdesc="A collection of patience games written in guile scheme"
url="https://wiki.gnome.org/Apps/Aisleriot"
arch=('x86_64')
license=('GPL')
depends=('guile' 'gtk3' 'qt5-svg')
provides=('aisleriot')
conflicts=('aisleriot')
makedepends=('appdata-tools' 'gnome-common' 'git' 'meson')
optdepends=('pysolfc: for PySol card sets'
            'pysolfc-cardsets: for PySol card sets'
	   'libkdegames: for KDE cardsets ')
options=('!makeflags' '!strip' '!emptydirs')
source=("git+https://gitlab.gnome.org/GNOME/aisleriot.git" meson_fix.patch)
sha256sums=('SKIP'
            '14e1fde5c00eb285917c22099ae3552b2ae145acd3fdb7049ff78bce53d0c8d4')

pkgver() {
  cd ${pkgname%-git}
  git describe --tags | sed 's/-/.r/' | tr - .
}

prepare() {
  cd ${pkgname%-git}
  git apply "$srcdir"/meson_fix.patch
}

build() {
  cd ${pkgname%-git}
  [[ -d builddir ]] || mkdir builddir
  meson . builddir --prefix=/usr \
	--libexecdir=/usr/lib \
	-D theme_kde=false \
	-D guile=3.0 \
	--buildtype=plain
  ninja -C builddir
}

package() {
  cd ${pkgname%-git}
  DESTDIR="$pkgdir" ninja -C builddir install
}
