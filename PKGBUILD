# Maintainer : Jingbei Li <i@jingbei.li>
# Contributor: Intel Corporation <http://www.intel.com/software/products/support>

pkgbase=intel-oneapi-advisor
pkgname=(intel-oneapi-advisor intel-oneapi-advisor-static)
_pkgver=2022.0.0
_debpkgrel=92
pkgver=${_pkgver}_${_debpkgrel}
pkgrel=1
pkgdesc="Intel® Advisor"
arch=('x86_64')
url='https://software.intel.com/content/www/us/en/develop/tools/oneapi.html'
license=("custom")
source=(
	"https://apt.repos.intel.com/oneapi/pool/main/${pkgname}-${_pkgver}-${_debpkgrel}_amd64.deb"
)
noextract=(
	"${pkgname}-${_pkgver}-${_debpkgrel}_amd64.deb"
)
sha256sums=('c561b2470a2cbcbe940904db7fbab80d627f20e6b966091a1dcc4c1ede64c581')

build() {
	ar x ${pkgname}-${_pkgver}-${_debpkgrel}_amd64.deb
	tar xvf data.tar.xz
}

package_intel-oneapi-advisor() {
	depends=('intel-oneapi-common-vars>=2022.0.0' 'intel-oneapi-common-licensing=2022.0.0')
	cp -r ${srcdir}/opt ${pkgdir}
	ln -sfT "${_pkgver}" ${pkgdir}/opt/intel/oneapi/advisor/latest
}

package_intel-oneapi-advisor-static() {
	pkgdesc="Intel® Advisor (static libs)"
	depends=("intel-oneapi-advisor=$pkgver")
	options=("staticlibs")
	cd ${srcdir}
	for _file in $(find . -name '*.a'); do
		_filename=$(echo $_file | sed "s/.a$//g")
		if [ -f "$_filename.so" ]; then
			cp --parents ${_file} ${pkgdir}/
		fi
	done
}