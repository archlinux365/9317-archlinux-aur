# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gnome-control-center-system76
_pkgname=${pkgname%-system76}
pkgver=40.0
pkgrel=1.2
pkgdesc="GNOME's main interface to configure various aspects of the desktop (with System76 patches)"
url="https://gitlab.gnome.org/GNOME/gnome-control-center"
license=(GPL2)
arch=(x86_64)
depends=(accountsservice cups-pk-helper gnome-bluetooth gnome-desktop
         gnome-online-accounts gnome-settings-daemon gsettings-desktop-schemas gtk3
         libgtop nm-connection-editor sound-theme-freedesktop upower libpwquality
         gnome-color-manager smbclient libmm-glib libgnomekbd grilo libibus
         cheese libgudev bolt udisks2 libhandy gsound colord-gtk libfirmware-manager
#         libs76-hidpi-widget
         )
makedepends=(docbook-xsl modemmanager git python meson)
checkdepends=(python-dbusmock python-gobject xorg-server-xvfb)
optdepends=('system-config-printer: Printer settings'
            'gnome-user-share: WebDAV file sharing'
            'gnome-remote-desktop: screen sharing'
            'rygel: media sharing'
            'openssh: remote login'
            'power-profiles-daemon: power profiles support'
#            'hidpi-daemon'
            )
provides=("$_pkgname" 'firmware-manager-virtual')
conflicts=("$_pkgname")
_commit=49d71c07b5b3ce59e035b785310cba4fcf903868  # tags/40.0^0
source=("git+https://gitlab.gnome.org/GNOME/gnome-control-center.git#commit=$_commit"
        'git+https://gitlab.gnome.org/GNOME/libgnome-volume-control.git'
        'git+https://gitlab.gnome.org/GNOME/libhandy.git'
        '0001-mouse-Add-Disable-While-Typing-toggle-for-touchpad.patch'
        'pop-mouse-accel.patch'
#        'pop-hidpi.patch'
        'system76-firmware.patch')
sha256sums=('SKIP'
            'SKIP'
            'SKIP'
            'a038b6d1c5c8dd5e80c1b6e24d650d616d1434486c5e86b270694b540449e3f3'
            '4d5a9de5f629982b66a8a9ce3a8bb1c1dd76df1214f3a2d5e1c0621b475dfa7a'
            '33fc2be90935fa9b913cccde12677d7234763821d47d71edf3586034d7eece2d')

pkgver() {
  cd $_pkgname
  git describe --tags | sed 's/^GNOME_CONTROL_CENTER_//;s/_/./g;s/-/+/g'
}

prepare() {
  cd $_pkgname
  git submodule init
  git config --local submodule.subprojects/gvc.url "$srcdir/libgnome-volume-control"
  git config --local submodule.subprojects/libhandy.url "$srcdir/libhandy"
  git submodule update

  patch -Np1 -i ../'0001-mouse-Add-Disable-While-Typing-toggle-for-touchpad.patch'
  patch -Np1 -i ../pop-mouse-accel.patch
#  patch -Np1 -i ../pop-hidpi.patch
  patch -Np1 -i ../system76-firmware.patch
}


build() {
  arch-meson $_pkgname build -D documentation=true
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs
}

package() {
  DESTDIR="$pkgdir" meson install -C build
  install -d -o root -g 102 -m 750 "$pkgdir/usr/share/polkit-1/rules.d"
}
