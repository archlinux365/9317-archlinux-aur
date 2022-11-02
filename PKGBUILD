# Maintainer: q234 rty <q23456yuiop at gmail dot com>
# Contributor: lilydjwg <lilydjwg@gmail.com>
# Contributor: AndyRTR <andyrtr@archlinux.org>

pkgname=xorg-xwayland-hidpi-xprop
pkgver=22.1.5
pkgrel=1
arch=('x86_64')
license=('custom')
url="https://xorg.freedesktop.org"
pkgdesc="run X clients under wayland, with !733 HiDPI patch"
depends=('nettle' 'libepoxy' 'systemd-libs' 'libxfont2' 
         'pixman' 'xorg-server-common' 'libxcvt')
makedepends=('meson' 'xorgproto' 'xtrans' 'libxkbfile' 'dbus'
             'xorg-font-util'
             'wayland' 'wayland-protocols'
             'libdrm' 'mesa-libgl'
             'systemd'
             'egl-wayland'
)
source=(https://xorg.freedesktop.org/archive/individual/xserver/xwayland-$pkgver.tar.xz{,.sig} hidpi.patch)
sha512sums=('806219692be297419777ad5343158f72473a691f7c8be4468fac185a3bc5e3b6811755de3133c12f3694480e51529ac3fa409b22640a80a233925716fec24c06'
            'SKIP'
            '7132c44d9bbf1c5f93906ef301a6e946f0909da0b9273f397281e681ad0da77d62b960a9dd0a640c7209548192fefba9bde03c493f3a89d08cd73a12844bb518')
provides=('xorg-server-xwayland' 'xorg-xwayland')
conflicts=('xorg-server-xwayland' 'xorg-xwayland')
replaces=('xorg-server-xwayland')
#validpgpkeys=('B09FAF35BE914521980951145A81AF8E6ADBB200') # "Michel Daenzer <michel@daenzer.net>"
validpgpkeys=('67DC86F2623FC5FD4BB5225D14706DBE1E4B4540') # "Olivier Fourdan <fourdan@xfce.org>"
options=('debug' 'strip')

prepare() {
  cd ${srcdir}/xwayland-$pkgver
  patch -Np1 -i ../hidpi.patch
}

build() {
  arch-meson xwayland-$pkgver build \
    -D ipv6=true \
    -D xvfb=false \
    -D xdmcp=false \
    -D xcsecurity=true \
    -D dri3=true \
    -D xwayland_eglstream=true \
    -D glamor=true \
    -D xkb_dir=/usr/share/X11/xkb \
    -D xkb_output_dir=/var/lib/xkb

  # Print config
  meson configure build
  ninja -C build
}

package() {

  # bin + manpage + .pc file
  install -m755 -Dt "${pkgdir}"/usr/bin build/hw/xwayland/Xwayland
  install -m644 -Dt "${pkgdir}"/usr/share/man/man1 build/hw/xwayland/Xwayland.1
  install -m644 -Dt "${pkgdir}"/usr/lib/pkgconfig build/hw/xwayland/xwayland.pc

  # license
  install -m644 -Dt "${pkgdir}/usr/share/licenses/${pkgname}" xwayland-$pkgver/COPYING
}
