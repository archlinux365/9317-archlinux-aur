# Maintainer: Nissar Chababy <funilrys at outlook dot com>
# Ex-Maintainer: Rob Lynn <rob22uk at gmail dot com>
# Contributor: Pablo Lezaeta <prflr88 (arro'a) gmail (puntocom)>

pkgname=firefox-mega
pkgver=3.17.7
pkgrel=1
groups=("firefox-addons")
pkgdesc="MEGA extension for Firefox; enables better support for mega.co.nz downloads"
arch=("any")
url="http://mega.co.nz"
license=("BSD")
groups=("firefox-addons")
source=("https://mega.nz/meganz.xpi")
sha512sums=('98370265567935e6295dacaeb2e4a4d0d2b52f7455818409ef1cf9c7f2fdbf28630314cd64ea816c957ff36533c8708e690d732c43a68e00a5491680f601bc35')
package(){
	depends=("firefox")

	cd "${srcdir}"
	emid=$(sed -n '/.*<em:id>\(.*\)<\/em:id>.*/{s//\1/p;q}' install.rdf)
	local dstdir="${pkgdir}/usr/lib/firefox/browser/extensions/${emid}"
	install -d "${dstdir}"
	cp -dpr --no-preserve=ownership * "${dstdir}"
	rm -r "${dstdir}"/*.xpi
	find "${pkgdir}" -type d -exec chmod 0755 {} \;
	find "${pkgdir}" -type f -exec chmod 0644 {} \;
}
