# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Patched package maintainer: Saren Arterius <saren@wtako.net>
# Contributor: Ionut Biru <ibiru@archlinux.org>
# Contributor: Flamelab <panosfilip@gmail.com

pkgname=gnome-shell-performance
pkgver=3.32.0+15+gb7d79a5f0
pkgrel=1
pkgdesc="Next generation desktop shell | Attempt to improve the performance by non-upstreamed patches"
url="https://wiki.gnome.org/Projects/GnomeShell"
arch=(x86_64)
license=(GPL2)
depends=(accountsservice gcr gjs gnome-bluetooth upower gnome-session gnome-settings-daemon
         gnome-themes-extra gsettings-desktop-schemas libcanberra-pulse libcroco libgdm libsecret
         mutter nm-connection-editor unzip gstreamer libibus)
makedepends=(gtk-doc gnome-control-center evolution-data-server gobject-introspection git meson
             sassc)
optdepends=('gnome-control-center: System settings'
            'evolution-data-server: Evolution calendar integration')
groups=(gnome)
provides=(gnome-shell gnome-shell=$pkgver)
conflicts=(gnome-shell)
_commit=b7d79a5f063341f1773a9a8a5550a188c04efbda  # master
source=("$pkgname::git+https://gitlab.gnome.org/GNOME/gnome-shell.git#commit=$_commit"
        "git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git"
        hack-detached.diff)
sha256sums=('SKIP'
            'SKIP'
            '939e81f682ebafd60e86d444e49dbab277fba0f00420466b5ff783568b7dc931')
pkgver() {
  cd $pkgname
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $pkgname

  # js/ui: Use captured-event::nonmotion [performance]
  # https://gitlab.gnome.org/GNOME/gnome-shell/merge_requests/276
  # Requires mutter MR283/commit "clutter-actor: Add detail to captured-event signal [performance]"
  if pacman -Q mutter-781835-workaround &> /dev/null; then
    git cherry-pick 297a18f2
    echo "======= mutter-781835-workaround detected, MR276 is applied ======="
    sleep 3
  else
    echo "======= mutter-781835-workaround not installed, not applying MR276 ======="
    sleep 3
  fi

  # Unbreak switcher
  git cherry-pick -n 31e7f0340fd0bd72f2d9848866b1f432ae82eee8

  # Hack around broken detached locations
  patch -Np1 -i ../hack-detached.diff

  git submodule init
  git config --local submodule.subprojects/gvc.url "$srcdir/libgnome-volume-control"
  git submodule update
}

build() {
  arch-meson $pkgname build -D gtk_doc=true
  ninja -C build
}

package() {
  DESTDIR="$pkgdir" meson install -C build

  # https://bugs.archlinux.org/task/37412
  mkdir "$pkgdir/usr/share/gnome-shell/modes"
}

