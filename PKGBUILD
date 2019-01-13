# Maintainer: Philip Goto <philip.goto@gmail.com>
# Contributor: Balló György <ballogyor+arch at gmail dot com>
# Contributor: Tom Richards <tom@tomrichards.net>
# Contributor: TingPing <tingping@tingping.se>

pkgname=gnome-games-git
pkgver=3.31.4.r12.g63006052
pkgrel=1
pkgdesc='Simple game launcher for GNOME'
arch=('x86_64')
license=('GPL3')
url='https://wiki.gnome.org/Apps/Games'
depends=('grilo' 'libhandy' 'libmanette' 'retro-gtk' 'tracker')
makedepends=('libhandy' 'meson' 'vala')
conflicts=(gnome-games)
provides=(gnome-games)
source=("git+https://gitlab.gnome.org/GNOME/gnome-games.git")
sha256sums=(SKIP)

pkgver() {
    cd gnome-games
    git describe --long --tags | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    arch-meson gnome-games build
    ninja -C build
}

package() {
    DESTDIR="$pkgdir" ninja -C build install
}
