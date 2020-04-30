# Contributor: Adam Nielsen <malvineous@shikadi.net>
# Contributor: Vitaliy Berdinskikh <skipper13@archlinux.org.ua>
# Contributor: Andrea Agosti <cifvts@gmail.com>
# Contributor: Viliam Pucik <viliam.pucik@gmail.com>
# Maintainer: Adam Nielsen <malvineous@shikadi.net>

_pkgname=instantclient-tools
pkgname=oracle-${_pkgname}
pkgver=19.6.0.0.0
_urlver=19600
_unzippath=instantclient_19_6
pkgrel=1
pkgdesc="Data Pump, SQL*Loader and Workload Replay Client for Oracle Instant Client"
arch=('x86_64')
url="http://www.oracle.com/technetwork/database/features/instant-client/"
license=('custom:OTN')
depends=(oracle-instantclient-basic=$pkgver)
replaces=('instantclient-sqlplus')
options=(!strip)

# Fail if retrieval is attempted of any of the manual:// URLs
DLAGENTS+=('manual::/usr/bin/false');

# These are the only files we want to include in the source package
source=(LICENSE
        "https://download.oracle.com/otn_software/linux/instantclient/${_urlver}/${_pkgname}-linux.x64-${pkgver}dbru.zip")
md5sums=('2d62e22e4f2d7e6d220fafde0f692a7d'
         'c6ad2b6266412a7551005fc2b6e0463d')
sha256sums=('f904a30b07ddf7806a33620f93b94c3d315154d26a371ece48695bb3555064a2'
            '6860f5106b2d2e464b9c5d5657111ec3951de7b5bcb3fa48806a1ab586e2c450')

plain "If you run into any problems downloading the files, get the .zip version from"
plain "Oracle and place them in the PKGBUILD directory then re-run makepkg:"
plain ""
plain "  http://www.oracle.com/technetwork/topics/linuxx86-64soft-092277.html"
plain ""
plain "Alternatively, unofficial prebuilt Arch packages are available by adding the"
plain "following lines to /etc/pacman.conf, if you agree to the Oracle licence[1]:"
plain ""
plain "  [oracle]"
plain "  SigLevel = Optional TrustAll"
plain '  Server = http://linux.shikadi.net/arch/$repo/$arch/'
plain ""
plain "Then run 'pacman -Sys oracle' to see available packages."
plain ""
plain "[1]: http://www.oracle.com/technetwork/licenses/instant-client-lic-152016.html"
plain ""

package() {
	cd "$srcdir/${_unzippath}/"
	install -d "$pkgdir/usr/bin"
	install -d "$pkgdir/usr/lib"
	install -d "$pkgdir/usr/share/doc/oracle"
	install -m 755 -t "$pkgdir/usr/bin" exp expdp imp impdp sqlldr wrc
	install -m 755 -t "$pkgdir/usr/lib" *.so*
	install -m 644 -t "$pkgdir/usr/share/doc/oracle" *README*

	# Avoid conflict with WINE
	mv "$pkgdir/usr/bin/wrc" "$pkgdir/usr/bin/wrc-oracle"
}
