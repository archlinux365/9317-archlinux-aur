# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-mpv
pkgver=1.1.1
_vdrapi=2.6.0
pkgrel=3
pkgdesc="mpv player plugin for VDR"
url="https://github.com/ua0lnj/vdr-plugin-mpv"
arch=('x86_64' 'i686')
license=('AGPL3')
depends=('mpv' "vdr-api=${_vdrapi}")
_plugname=${pkgname//vdr-/}
source=("$pkgname-$pkgver.tar.gz::https://github.com/ua0lnj/vdr-plugin-mpv/archive/v$pkgver.tar.gz"
        "50-${pkgname//vdr-/}.conf")
backup=("etc/vdr/conf.avail/50-${pkgname//vdr-/}.conf")
sha256sums=('ea6a4a2086f2729df400ed02193a85b646c8d6ad92fccc8430bd27bafcd1cfb0'
            'e03891f550b215efa19cdb51e133434d99b416e91f0f6e7204ffaee70287633c')

build() {
  cd "${srcdir}/vdr-plugin-${_plugname}-$pkgver"

  make
}

package() {
  cd "${srcdir}/vdr-plugin-${_plugname}-$pkgver"
  make DESTDIR="$pkgdir" install

  install -Dm644 "$srcdir/50-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"
}
