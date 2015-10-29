# Maintainer:  vantu5z <vantu5z@mail.ru>
# Maintainer:  Matthew Monaco <net 0x01b dgbaley27>
# Contributor: Jan de Groot <jgc@archlinux.org>
# Contributor: Tobias Powalowski  <tpowa@archlinux.org>
# Contributor: Thomas Bächler <thomas@archlinux.org>
# Contributor: Alexander Baldeck <alexander@archlinux.org>

_pkgname=xf86-input-synaptics
pkgname=$_pkgname-led
pkgver=1.7.6
pkgrel=1
pkgdesc="Synaptics driver for notebook touchpads (with LED disable support)"
arch=(i686 x86_64)
license=(custom)
url="http://xorg.freedesktop.org/"
depends=(libxtst mtdev synaptics-led)
makedepends=(xorg-server-devel libxi libx11 resourceproto)
replaces=(synaptics)
provides=(synaptics "$_pkgname")
conflicts=(synaptics "$_pkgname")
groups=(xorg-drivers xorg)
options=(!libtool)
source=(
	http://xorg.freedesktop.org/releases/individual/driver/${_pkgname}-${pkgver}.tar.bz2
	led_support.patch
)
md5sums=('f1a501caa0da0bf0e78f249c5ed9bd73'
         'd4e3cd69e96405cd37df19f8043161da')

build() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  for p in ../*.patch; do
    msg2 "Applying patch: $p"
    patch -p1 -i "$p"
  done
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -m755 -d "${pkgdir}/etc/X11/xorg.conf.d"
  install -m644 "conf/50-synaptics.conf" "${pkgdir}/etc/X11/xorg.conf.d/"
  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/"
}
