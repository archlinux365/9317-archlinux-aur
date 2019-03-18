# $id$
# Maintainer: Jan Alexander Steffens (heftig) <jan.steffens@gmail.com>
# Maintainer: Ionut Biru <ibiru@archlinux.org>
# Contributor: Michael Kanis <mkanis_at_gmx_dot_de>

pkgname=mutter-hide-legacy-decorations
_pkgname=mutter
pkgver=3.32.0+15+gc96cf0608
pkgrel=1
pkgdesc="A window manager for GNOME (with a little hack to hide the window decorations on maximized legacy applications)"
url="https://gitlab.gnome.org/GNOME/mutter"
arch=(x86_64)
license=(GPL)
depends=(dconf gobject-introspection-runtime gsettings-desktop-schemas libcanberra
         startup-notification zenity libsm gnome-desktop upower libxkbcommon-x11
         gnome-settings-daemon libgudev libinput pipewire xorg-server-xwayland)
makedepends=(gobject-introspection git egl-wayland meson xorg-server)
checkdepends=(xorg-server-xvfb)
groups=(gnome)
replaces=('mutter-wayland' 'mutter')
conflicts=('mutter-wayland' 'mutter')
provides=("mutter=${pkgver}")
_commit=c96cf0608dd5e92369447ddbba9f63b7a2c84c0f  # master
source=("git+https://gitlab.gnome.org/GNOME/mutter.git#commit=$_commit"
        216.patch
        "hideTitlebar.patch")
sha256sums=('SKIP'
            'ed4f3cf738a3cffdf8a6e1a352bf24d74078c3b26fb9262c5746e0d95b9df756'
            '0f57441f08f7c58d198c6c9b70bcffd05e84b54b2a048e032babd836d8967bcb')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/-/+/g'
}

prepare() {
  cd $_pkgname

  # https://gitlab.gnome.org/GNOME/mutter/merge_requests/216
  git apply -3 ../216.patch
  patch -p1 -i $srcdir/hideTitlebar.patch
}

build() {
  arch-meson $_pkgname build \
    -D egl_device=true \
    -D wayland_eglstream=true \
    -D installed_tests=false
  ninja -C build
}

check() (
  mkdir -p -m 700 "${XDG_RUNTIME_DIR:=$PWD/runtime-dir}"
  glib-compile-schemas "${GSETTINGS_SCHEMA_DIR:=$PWD/build/data}"
  export XDG_RUNTIME_DIR GSETTINGS_SCHEMA_DIR

  dbus-run-session xvfb-run -s '+iglx -noreset' meson test -C build
)

package() {
  DESTDIR="$pkgdir" meson install -C build
}
