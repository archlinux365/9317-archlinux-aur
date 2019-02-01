# Maintainer: Christopher Reimer <vdr4arch[at]creimer[dot]net>
pkgname=vdr-sc
pkgver=r9.75b4379
_vdrapi=2.4.0
_gitver=75b4379e4fa3f6fa1f6908591be8e9bbb44dd990
pkgrel=1
pkgdesc="Software CAM emulation. If compilation fails
 with FAILED COMPARISON OF PACKET please check README.FFdecsa 
 and set appropiate PARALLEL parameter in Makefile.patch"
url="https://github.com/3PO/vdr-plugin-sc"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h')
license=('GPL2')
depends=('libdvbcsa' 'openssl' "vdr>=2.4.0" "vdr-api=${_vdrapi}")
makedepends=('git')
_plugname=$(echo $pkgname | sed 's/vdr-//g')
source=("$pkgname::git+http://github.com/3PO/vdr-plugin-sc.git#commit=${_gitver}"
        "ftp://ftp.tvdr.de/vdr/vdr-$_vdrapi.tar.bz2"
        "20-$_plugname.conf")
backup=("etc/vdr/conf.avail/20-$_plugname.conf")

pkgver() {
    cd "$srcdir/$pkgname"
    echo "r$(git rev-list --count HEAD).$(git rev-parse --short HEAD)"
}

prepare() {
  rm -rf "$srcdir/$pkgname-build"
  cp -r "$srcdir/$pkgname" "$srcdir/$pkgname-build"
  cd "$srcdir/$pkgname-build"

  patch -p1 -i "$srcdir/../Makefile.patch"

#Disable Keyfile support. If you want to watch paytv, pay for it.
#  ( cd systems
#    ls | grep -v cardclient | xargs rm -r )

  sed -i 's/MAXDVBDEVICES/MAXDEVICES/g' device.c
}

package() {
  cd "$srcdir/$pkgname-build"

  mkdir -p "$pkgdir/usr/lib/vdr/plugins"

  make  CFLAGS="$(pkg-config vdr --variable=cflags)" \
     CXXFLAGS="$(pkg-config vdr --variable=cxxflags) -I/usr/include/openssl-1.0 -std=c++0x -Wno-narrowing"\
     LDFLAGS="$LDFLAGS -L/usr/lib/openssl-1.0 -lcrypto -lcrypt" \
     VDRDIR="$(pkg-config vdr --variable=pcfiledir)" \
     LIBDIR="$pkgdir/$(pkg-config vdr --variable=libdir)" \
     LOCDIR="$pkgdir/$(pkg-config vdr --variable=locdir)" \
     MAXCAID=64 \
     LIBDVBCSA=1 
#     i18n systems
     
echo "pkgdir $pkgdir"
   
   make DESTDIR=${pkgdir} install

#     VDRDIR="/usr" \ #libsc-dvbhddevice.so libsc-dvbsddevice.so libvdr-$_plugname.so

#  install -Dm755 libsc-dvbhddevice.so "$pkgdir/usr/lib/vdr/plugins/libsc-dvbhddevice.so.$_vdrapi"
#  install -Dm755 libsc-dvbsddevice.so "$pkgdir/usr/lib/vdr/plugins/libsc-dvbsddevice.so.$_vdrapi"
#  install -Dm755 libvdr-$_plugname.so "$pkgdir/usr/lib/vdr/plugins/libvdr-$_plugname.so.$_vdrapi"

  install -Dm644 "$srcdir/20-$_plugname.conf" "$pkgdir/etc/vdr/conf.avail/20-$_plugname.conf"
}
md5sums=('SKIP'
         '12c6a3abeadfa915fcfe736bb047a3ab'
         '397dfba03003ba28c5f95d0855497d78')
