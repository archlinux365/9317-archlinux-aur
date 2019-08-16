# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-osdteletext
pkgver=0.9.7
_vdrapi=2.4.1
pkgrel=3
pkgdesc="Displays teletext pages directly on VDR's OSD"
url="http://projects.vdr-developer.org/projects/plg-osdteletext"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
depends=('gcc-libs' "vdr-api=${_vdrapi}")
optdepends=('ttf-teletext2: renderng special graphic characters used in Teletext')
_plugname=${pkgname//vdr-/}
source=("https://projects.vdr-developer.org/git/vdr-plugin-$_plugname.git/snapshot/vdr-plugin-$_plugname-$pkgver.tar.bz2"
        "$pkgname-remove-blank-lines.patch"
        "50-$_plugname.conf")
backup=("etc/vdr/conf.avail/50-$_plugname.conf")
md5sums=('3cc9318b3b5d63884320b57e2268648c'
         '5bb3cdc371660d9fe8cd7ebfe4f14de7'
         '4e47fd8f77cea06d30e07486b7fd9d6e')

prepare() {
  cd "${srcdir}/vdr-plugin-${_plugname}-${pkgver}"
  patch -p1 -i "${srcdir}/$pkgname-remove-blank-lines.patch"
}

build() {
  cd "${srcdir}/vdr-plugin-${_plugname}-${pkgver}"
  make
}

package() {
  cd "${srcdir}/vdr-plugin-${_plugname}-${pkgver}"
  make DESTDIR="$pkgdir" install

  install -Dm644 "$srcdir/50-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"
}
