# This PKGBUILD is part of the VDR4Arch project [https://github.com/vdr4arch]

# Maintainer: Christopher Reimer <mail+vdr4arch[at]c-reimer[dot]de>
pkgname=vdr-epg2vdr
pkgver=1.1.106
_vdrapi=2.4.1
pkgrel=1
pkgdesc="Used to retrieve EPG data into the VDR"
url="http://projects.vdr-developer.org/projects/plg-epg2vdr"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
depends=('jansson' 'libmariadbclient' 'libutil-linux' 'python' 'tinyxml2' "vdr-api=${_vdrapi}")
_plugname=${pkgname//vdr-/}
source=("https://projects.vdr-developer.org/git/vdr-plugin-epg2vdr.git/snapshot/vdr-plugin-$_plugname-$pkgver.tar.bz2")
backup=("etc/vdr/conf.avail/50-$_plugname.conf"
        'var/lib/vdr/plugins/epg2vdr/epg.dat')
sha256sums=('1ef3208d7ad4c630dfe075b7d9ebab5a535a670e1441ef1528bf400abf10b04f')

build() {
  cd "${srcdir}/vdr-plugin-${_plugname}-${pkgver}"
  make GIT_REV=''
}

package() {
  cd "${srcdir}/vdr-plugin-${_plugname}-${pkgver}"
  make DESTDIR="${pkgdir}" install

  mkdir -p "$pkgdir/etc/vdr/conf.avail"
  echo "[$_plugname]" > "$pkgdir/etc/vdr/conf.avail/50-$_plugname.conf"

  chown -R 666:666 "$pkgdir/var/lib/vdr"
}
