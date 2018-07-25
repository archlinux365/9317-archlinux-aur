# Maintainer: Mohammed Yaseen Mowzer <yaseen@mowzer.co.za>

#ALARM: Thomas Fanninger <thomas [at] fanninger [dot] at>
#	- moved optional depenceses from depends to optdepends

pkgname=spectrum2
pkgver=2.0.7
pkgrel=3
#epoch=
pkgdesc="Create C++ transports easily"
arch=('any')
url="http://spectrum.im"
license=('GPL')
groups=()
depends=(curl 'log4cxx' popt sqlite)
makedepends=('protobuf' 'swiften>=3' 'libpqxx' 'libpurple' 'avahi' 'boost'
'cmake' 'cppunit' 'expat' 'libcommuni' 'libidn' 'sqlite' 'log4cxx' 'libevent'
'libmariadbclient' 'popt' 'libev' 'dbus-glib' 'curl' 'qt4' 'gconf')
checkdepends=()
optdepends=('swiften: XMPP backend support'
            'libpqxx: PostgreSQL support'
            'libmariadbclient: MariaDB support'
            'libcommuni: IRC backend support'
	    'qt4: IRC backend support'
            'protobuf: IRC backend support'
            'libpurple: LibPurple backend support'
	    'gconf: LibPurple backend support'
            'libev: LibPurple backend support - libev eventloop')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://github.com/hanzz/$pkgname/archive/$pkgver.tar.gz"
        'spectrum2.service'
        'log4cxx-fix.patch')
sha256sums=('7d2513a13d29fb2762dac2c87dac1483d1c65302bcf15614e4975b0b9d364872'
            '8b95ddcf90449dcd0dec111276c69d04a92d09a0f9e1815009b2179a8050c9d1'
            '1c1c867ef69a8d333197ffb2b2ddcf64527f34d92ee10597d85fd1d95c54e8f6')
noextract=()
validpgpkeys=()

prepare() {
	cd "$srcdir/$pkgname-$pkgver"
	patch -p1 < ../log4cxx-fix.patch
}

build() {
	cd "$srcdir/$pkgname-$pkgver"
	cmake . -DCMAKE_BUILD_TYPE=Debug -DCMAKE_CXX_STANDARD=14 -DCMAKE_INSTALL_PREFIX=/usr -DSPECTRUM_VERSION=${pkgver} -DIRC_INCLUDE_DIR=/usr/include/qt/Communi
	make
}

package() {
	cd "$srcdir/$pkgname-$pkgver"
	make DESTDIR="$pkgdir/" install
	install -D -m0644 "$srcdir/$pkgname-$pkgver/spectrum_manager/src/spectrum_manager.cfg" "$pkgdir/etc/spectrum2/"
	install -D -m0644 "$srcdir/spectrum2.service" "$pkgdir/usr/lib/systemd/system/spectrum2.service"
}
