# Maintainer: Borislav Borisov <borislav.borisov@gmail.com>
pkgname=valentina-studio
pkgver=6.0.7
pkgrel=1
pkgdesc="MySQL, MariaDB, PostgreSQL, MS SQL Server, Valentina DB and SQLite GUI Admin Tool"
arch=('i686' 'x86_64')
url="https://www.valentina-db.com"
license=('custom')
makedepends=('rpmextract')
source_i686=("http://www.valentina-db.com/en/studio/download/current/vstudio_lin_32_rpm")
source_x86_64=("http://www.valentina-db.com/en/studio/download/current/vstudio_x64_5_lin-rpm")
sha256sums_i686=('d8a795e635b4ea48ec26373164ae0d285c0772ee1f701640c4ca6ad118853abe')
sha256sums_x86_64=('6d96ef503ac92d23a975b2b41455ee59e5213acce10ddb5ae98237203efa57d2')

build() {
	if test "$CARCH" == x86_64; then
		rpmextract.sh ../vstudio_x64_5_lin-rpm
	else
		rpmextract.sh ../vstudio_lin_32_rpm
	fi
}

package() {
	install -d "${pkgdir}"/opt/VStudio
	install -d "${pkgdir}"/usr/share/applications
	install -d "${pkgdir}"/usr/share/doc/vstudio
	cp --preserve=mode -r "${srcdir}"/opt/VStudio/* "${pkgdir}"/opt/VStudio
	cp --preserve=mode -r "${srcdir}"/usr/share/applications/* "${pkgdir}"/usr/share/applications
	cp --preserve=mode -r "${srcdir}"/usr/share/doc/vstudio/* "${pkgdir}"/usr/share/doc/vstudio
}
