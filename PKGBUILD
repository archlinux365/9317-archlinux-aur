# Maintainer: Uroš Vampl <mobile.leecher at gmail dot com>

pkgname=tigervnc-git
pkgver=r3764.3a37af39
pkgrel=1
_xorgver=1.20.0
pkgdesc="Suite of VNC servers and clients. Based on the VNC 4 branch of TightVNC."
arch=('i686' 'x86_64')
url="http://www.tigervnc.org"
license=('GPL')
depends=('fltk' 'pam' 'gnutls' 'libjpeg-turbo' 'libxtst' 'pixman'
	 'xorg-xauth' 'xorg-xsetroot' 'xkeyboard-config' 'xorg-xkbcomp'
	 'libgl' 'libgcrypt' 'perl' 'libxdamage' 'libxfont2')
makedepends=('cmake' 'nasm' 'xorg-font-util' 'xorg-util-macros' 'xorgproto'
	     'xtrans' 'mesa' 'git')
optdepends=('mesa: for OpenGL functionality in Xvnc')
conflicts=('tigervnc' 'tightvnc')
provides=('tigervnc')
source=(git+https://github.com/TigerVNC/tigervnc.git
	ftp://ftp.freedesktop.org/pub/xorg/individual/xserver/xorg-server-${_xorgver}.tar.bz2
	vncserver.service
	vncviewer.desktop)
sha256sums=('SKIP'
            '9d967d185f05709274ee0c4f861a4672463986e550ca05725ce27974f550d3e6'
            '80f8fc7598d05e645ae73bc3371bbdededf07136a9f024ce6ebbfe469335b16e'
            '2ada7da1a926d78f11d2dd8ec376ac5877d2ce2bbb57a99526c13d8fcae6ddd7')

pkgver() {
  cd tigervnc
  echo r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

prepare() {
  cd tigervnc
  cd unix/xserver
  cp -r "$srcdir"/xorg-server-${_xorgver}/* .
  patch -Np1 -i ../xserver120.patch
}

build() {
  cd tigervnc

  cmake -G "Unix Makefiles" \
    -DCMAKE_INSTALL_PREFIX=/usr \

  make

  cd unix/xserver
  autoreconf -fiv
  ./configure --prefix=/usr \
	--disable-static --without-dtrace \
	--disable-xorg --disable-xnest --disable-xvfb --disable-dmx \
	--disable-xwin --disable-xephyr --disable-kdrive --disable-xwayland \
	--disable-config-hal --disable-config-udev --with-pic \
	--disable-unit-tests --disable-devel-docs --disable-selective-werror \
	--disable-dri --enable-dri2 --enable-dri3 --enable-glx
  make
}

package() {
  cd tigervnc
  make DESTDIR="$pkgdir" install
  cd unix/xserver/hw/vnc
  make DESTDIR="$pkgdir" install
  install -Dm0644 "$srcdir"/tigervnc/contrib/systemd/user/vncserver@.service \
    "$pkgdir"/usr/lib/systemd/user/vncserver@.service
  install -Dm0644 "$srcdir"/vncserver.service "$pkgdir"/usr/lib/systemd/system/vncserver.service
  install -Dm0644 "$srcdir"/vncviewer.desktop "$pkgdir"/usr/share/applications/vncviewer.desktop
}
