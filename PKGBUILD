# Maintainer: Radim Sückr <kontakt@radimsuckr.cz>
# Contributor: F Carpano < gmail-com: daert781 >
# Contributor: Anthony Samartsev <kycok@archlinux.info>

pkgname=xcursor-osx-elcap
pkgver=1.00
pkgrel=5
pkgdesc="Cursor theme from OSX"
arch=('any')
makedepends=(curl)
url="https://www.gnome-look.org/p/1084939/"
license=('GPL')
_url='https://www.gnome-look.org/dl?file_id=1515308735&file_type=application/x-bzip2&file_name=OSX-ElCap-(KDE).R2.tar.bz2&file_size=31214&has_torrent=0&project_id=1084939&link_type=download&is_external=false&external_link=null'
_cookie="$(curl -vq "$_url" 2>&1 | grep -Po '(?<=Set-Cookie: __ocs_id\=)[^;]+(?=;)')"
source=("$(curl -sSL "$_url" -X 'POST' -H 'User-Agent: Mozilla/5.0 (X11; Linux x86_64)' -H "Cookie: __ocs_id=$_cookie" | grep -Po '(?<=top.location.href \= ")[^"]+(?=")')")
sha512sums=('7db6bc6266fc99358e35d203b767ffb9a6883bad40d8f4332f85214609859583c29e637a339cc1f386e581bc43cd9365088cc277c8ee1493c49d03f17ec45695')

package() {
	cd $srcdir
	mkdir -p $pkgdir/usr/share/icons
	cp -r 'OSX-ElCap-(KDE)/OSX-ElCap' $pkgdir/usr/share/icons
}
