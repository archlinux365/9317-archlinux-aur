# Maintainer: tuftedocelot <tuftedocelot@fastmail.fm>
# Contributor: Davbo <dave@davbo.org>
# Contributor: Davide Girardi <davidegirardi googlesmtp>
pkgname=x3270
pkgver=4.0ga12
pkgrel=1
pkgpath=04.00
pkgdesc="An IBM 3270 terminal emulator for the X Window System"
arch=('i686' 'x86_64')
url="http://x3270.bgp.nu/"
license=('BSD' 'MIT')
depends=('openssl' 'libxaw' 'xorg-mkfontdir' 'tcl')
makedepends=('openssl' 'libx11' 'libxaw' 'libxt' 'xbitmaps' 'xorg-bdftopcf' 'readline' 'ncurses' 'm4')
backup=(etc/x3270/ibm_hosts)
install=x3270.install
source=(http://x3270.bgp.nu/download/$pkgpath/suite3270-$pkgver-src.tgz
	x3270.desktop)

sha256sums=('d2e5030b67f01aed7c74dd906114d44dbc89a103d32ed0db564bf80033b8e4fb'
            'bb3f1a301ca4f6d6d4f4cafe451945a55a9af7995d712a0f314fc58dfb16da6f')

build() {
   cd $srcdir/suite3270-${pkgver:0:3} 
   ./configure --enable-unix --enable-c3270 --prefix=/usr --bindir=/usr/bin --sysconfdir=/etc --with-fontdir=/usr/share/fonts/3270

   make all || return 1

 }
 package() {
   cd $srcdir/suite3270-${pkgver:0:3}
   make DESTDIR=$pkgdir/ install || return 1
   make DESTDIR=$pkgdir/ install.man || return 1

   chmod 644 $pkgdir/etc/x3270/ibm_hosts

   mkdir $pkgdir/usr/share/applications
   mkdir $pkgdir/usr/share/pixmaps
   mkdir $pkgdir/usr/share/licenses
   mkdir $pkgdir/usr/share/licenses/x3270
   install -m644 $srcdir/x3270.desktop $pkgdir/usr/share/applications/
   install -m644 $srcdir/suite3270-${pkgver:0:3}/x3270/x3270-icon2.xpm $pkgdir/usr/share/pixmaps/
   install -m644 $srcdir/suite3270-${pkgver:0:3}/x3270/LICENSE $pkgdir/usr/share/licenses/x3270/
}
