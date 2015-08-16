# Contributor: Edoardo Maria Elidoro <edoardo.elidoro@gmail.com>
# Contributor: M4rQu1Nh0S <zonadomarquinhos@gmail.com>
# Contributor: AqD <aquila.deus@gmail.com>
# Contributor: lh <jarryson@gmail.com>
# Maintainer: Pablo Lezaeta <prflr88@gmail.com>

pkgname=xfce4-macmenu-plugin
pkgver=1.0.15
pkgrel=7
pkgdesc="Mac-style menubar plugin for xfce panel (4.4+)"
arch=(i686 x86_64)
url="http://aquila.deus.googlepages.com/"
depends=('xfce4-panel>=4.3.99.2' 'fontconfig')
optdepends=('gtk2-aqd: gtk2 menu support' 'gtk3-aqd: gtk3 menu support')
license=(LGPL)
source=('macmenu-applet.c' 'macmenu-tslist.h' "$pkgname.desktop" "$pkgname.1")
md5sums=('b0792f81cd87aa7338fe362e40f98f97'
         '442128110d99a35da54df6fd58b8c405'
         '1ec17af52eaf9c10ee75fc728c033312'
         '4fd0335ac58adfcd0d24886503c4c01f')

build() {
  cd $srcdir
  gcc -lX11 -std=gnu99 -Wall -fno-strict-aliasing -DFOR_XFCE `pkg-config --cflags --libs libwnck-1.0 libxfce4panel-1.0` $CFLAGS $LDFLAGS -o $pkgname macmenu-applet.c
}

package(){
  cd $pkgdir
  install -Dm755 $srcdir/$pkgname $pkgdir/usr/lib/xfce4/panel-plugins/$pkgname
  install -Dm644 $srcdir/$pkgname.desktop $pkgdir/usr/share/xfce4/panel-plugins/$pkgname.desktop
  install -Dm644 $srcdir/$pkgname.1 $pkgdir/usr/share/man/man1/$pkgname.1
}
