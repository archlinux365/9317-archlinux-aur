# Maintainer: TommyTran732 <contact@tommytran.io>
# Contributor: Frederic Bezies <fredbezies@gmail.com>, Cassandra Watergate (saltedcoffii) <cassandrajwatergate@gmail.com>, LSUtigers3131

pkgname=pamac-flatpak-gnome
pkgver=10.4.3
pkgrel=4
_pkgfixver=$pkgver

pkgdesc="A Gtk3 frontend for libalpm (with AUR, Flatpak, AppIndicator support, and GNOME integration)"
arch=('i686' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://gitlab.manjaro.org/applications/pamac"
license=('GPL3')
depends=('libnotify' 'libpamac-flatpak>=10.3.0' 'libhandy' 'git' 'fakeroot' 'pkgconf' 'appstream-glib' 'polkit-gnome')
optdepends=('fwupd: support firmware updates')
makedepends=('gettext' 'itstool' 'vala>=0.45' 'meson' 'gobject-introspection' 'xorgproto' 'asciidoc')
conflicts=('pamac' 'pamac-cli' 'pamac-gtk' 'pamac-qt' 'pamac-classic' 'pamac-aur' 'pamac-aur-git' 'pamac-all' 'pamac-all-git' 'pamac-flatpak' 'pacmac-nosnap' 'gnome-software')
provides=('pamac')
options=(!emptydirs)
install=pamac.install
source=("pamac-$pkgver.tar.gz::$url/-/archive/v$pkgver/pamac-v$pkgver.tar.bz2") 
sha512sums=('011af395092c27c4e73f50b5f43e662b5fb5cd7ae920176c3702479fb05df958fa7ceaf206bfcdad016103d0fc9d6b94e0d94d27701e5afcad2ae92024c90e5c')

prepare() {
  # adjust version string
  sed -i -e "s|\"$_pkgfixver\"|\"$pkgver-$pkgrel\"|g" $srcdir/pamac-v$pkgver/src/version.vala
}

build() {
  arch-meson --buildtype=release -Denable-fake-gnome-software=true $srcdir/pamac-v$pkgver build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  meson install -C build --destdir "$pkgdir"
}