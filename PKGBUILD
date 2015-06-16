# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-devstatus
pkgver=0.4.1
_vdrapi=2.2.0
pkgrel=20
pkgdesc="displays the status of all available dvb devices"
url="http://www.u32.de/vdr.html"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
depends=('gcc-libs' "vdr-api=${_vdrapi}")
_plugname=${pkgname//vdr-/}
source=("http://www.u32.de/download/$pkgname-$pkgver.tgz"
        "$_plugname.diff::http://www.vdr-portal.de/index.php?page=Attachment&attachmentID=31264")
backup=("etc/vdr/conf.avail/50-$_plugname.conf")
md5sums=('503452532add3d4a37f2aa0b4a4488b7'
         'ba40b25c09cb365ff1e0d4a8db1507af')

prepare() {
  cd "${srcdir}/${_plugname}-${pkgver}"
  patch -i ${srcdir}/${_plugname}.diff
}

package() {
  cd "${srcdir}/${_plugname}-${pkgver}"

  mkdir -p "$pkgdir/usr/lib/vdr/plugins"
  make CFLAGS="$(pkg-config vdr --variable=cflags)" \
       CXXFLAGS="$(pkg-config vdr --variable=cxxflags)" \
       VDRDIR="/usr/include/vdr" \
       LIBDIR="$pkgdir/$(pkg-config vdr --variable=libdir)" \
       LOCALEDIR="$pkgdir/$(pkg-config vdr --variable=locdir)" \
       all

  mkdir -p "$pkgdir/etc/vdr/conf.avail"
  echo "[$_plugname]" > "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"
}
