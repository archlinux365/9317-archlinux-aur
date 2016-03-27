# Maintainer: Llewelyn Trahaearn <WoefulDerelict at GMail dot com>
# Contributor: quequotion <quequotion at bugmenot dot com>
# Contributor: Tom Gundersen <teg at jklm dot no>
# Contributor: Andrea Scarpino <andrea at archlinux dot org>
# Contributor: Geoffroy Carrier <geoffroy at archlinux dot org>

pkgbase=lib32-bluez
pkgname=(${pkgbase}{,-libs,-cups,-plugins})
pkgver=5.38
pkgrel=1
url="http://www.bluez.org/"
arch=('x86_64')
license=('GPL2')
makedepends=('gcc-multilib' 'gcc-libs-multilib' 'lib32-dbus' 'lib32-libical' 'lib32-systemd')
source=("http://www.kernel.org/pub/linux/bluetooth/${pkgbase#lib32-}-${pkgver}.tar."{xz,sign}
        fix_crash_when_connecting_to_controllers.diff)
# see https://www.kernel.org/pub/linux/bluetooth/sha256sums.asc
sha256sums=('0618c5440be6715805060ab5eea930526f34089c437bf61819447b160254f4df'
            'SKIP'
            '27296fb6cce5e62a04fbeb0779d852995779ecef553cc2e692d91d89eff8c673')
validpgpkeys=('E932D120BC2AEC444E558F0106CA9F5D1DCF2659') # Marcel Holtmann <marcel@holtmann.org>

prepare() {
  cd "${srcdir}/${pkgbase#lib32-}-${pkgver}"
  # FS#48644, http://git.kernel.org/cgit/bluetooth/bluez.git/commit/?id=177d27c8c3db4588ec13dae0368f240902c42825
  patch -Np1 -i ${srcdir}/fix_crash_when_connecting_to_controllers.diff
}

build() {
  cd "${srcdir}/${pkgbase#lib32-}-${pkgver}"
  export CC='gcc -m32'
  export CXX='g++ -m32'
  export LDFLAGS='-m32'
  export PKG_CONFIG_PATH='/usr/lib32/pkgconfig'
  ./configure \
              --prefix=/usr \
              --mandir=/usr/share/man \
              --sysconfdir=/etc \
              --localstatedir=/var \
              --libdir=/usr/lib32 \
              --libexecdir=/usr/lib32 \
              --enable-sixaxis \
              --enable-experimental \
              --enable-library # this is deprecated
  make
}

check() {
  cd "${srcdir}/${pkgbase#lib32-}-${pkgver}"
  make check
}

package_lib32-bluez() {
  pkgdesc="Daemons for the bluetooth protocol stack (32-bit)"
  depends=(lib32-{libical,dbus,glib2} 'bluez')

  cd "${pkgbase#lib32-}-${pkgver}"
  make DESTDIR=${pkgdir} \
       install-libexecPROGRAMS \
       install-dbussessionbusDATA \
       install-systemdsystemunitDATA \
       install-systemduserunitDATA \
       install-dbussystembusDATA \
       install-dbusDATA \
       install-man8

  # Remove conflicting files.
  rm -rf "${pkgdir}"/{etc,usr/{share,lib,include,bin}}
}

package_lib32-bluez-libs() {
  pkgdesc="Deprecated libraries for the bluetooth protocol stack (32-bit)"
  depends=('lib32-glibc')
  license=('LGPL2.1')

  cd ${pkgbase#lib32-}-${pkgver}
  make DESTDIR=${pkgdir} \
       install-includeHEADERS \
       install-libLTLIBRARIES \
       install-pkgconfigDATA

  # Remove conflicting files.
  rm -rf "${pkgdir}/usr/include"
}

package_lib32-bluez-cups() {
  pkgdesc="CUPS printer backend for Bluetooth printers (32-bit)"
  depends=('lib32-libdbus' 'lib32-glib2' 'cups')

  cd ${pkgbase#lib32-}-${pkgver}
  make DESTDIR=${pkgdir} install-cupsPROGRAMS
}

package_lib32-bluez-plugins() {
  pkgdesc="bluez plugins (PS3 Sixaxis controller) (32-bit)"
  depends=('lib32-systemd')

  cd ${pkgbase#lib32-}-${pkgver}
  make DESTDIR=${pkgdir} \
       install-pluginLTLIBRARIES
}
