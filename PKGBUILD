# Maintainer: Remy Adriaanse <remy@adriaanse.it>

_gemname=nokogiri
pkgname="ruby-${_gemname}"
pkgver=1.6.6.2
pkgrel=2
pkgdesc='HTML, XML, SAX, and Reader parser'
arch=('any')
url='http://nokogiri.org'
license=('MIT')
depends=('libxml2' 'libxslt' 'ruby' 'ruby-mini_portile')
options=('!emptydirs')
source=("https://rubygems.org/downloads/${_gemname}-${pkgver}.gem")
noextract=("${_gemname}-${pkgver}.gem")
sha512sums=('bb0422878e690648ab154c7d1ab0bd4fd9ec0875b2f0be0292ba9cb5541ea33b770794a7ba411e603a06472af4f9a3337ec8ff5d74debd826fc63f1d3ab1d5f1')

package() {
	local _gemdir="$(ruby -e'puts Gem.default_dir')"
	# TODO: in the future releases of nokogiri we can use -- --use-system-libraries
	# see https://github.com/sparklemotion/nokogiri/blob/master/ext/nokogiri/extconf.rb
	NOKOGIRI_USE_SYSTEM_LIBRARIES=1 gem install --ignore-dependencies --no-user-install -i "${pkgdir}/${_gemdir}" -n "${pkgdir}/usr/bin" "${_gemname}-${pkgver}.gem"
	rm "${pkgdir}/${_gemdir}/cache/${_gemname}-${pkgver}.gem"

	rm -rf "${pkgdir}/${_gemdir}/gems/${_gemname}-${pkgver}/ports"
	rm -rf "${pkgdir}/${_gemdir}/gems/${_gemname}-${pkgver}/ext"
}
