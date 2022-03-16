# Maintainer : Jingbei Li <i@jingbei.li>
# Contributor: Intel Corporation <http://www.intel.com/software/products/support>

pkgbase=intel-oneapi-ippcp
pkgname=(intel-oneapi-ippcp intel-oneapi-ippcp-static)
_pkgver=2021.5.1
_debpkgrel=462
pkgver=${_pkgver}_${_debpkgrel}
pkgrel=1
pkgdesc="Intel® Integrated Performance Primitives Cryptography common"
arch=('x86_64')
url='https://software.intel.com/content/www/us/en/develop/tools/oneapi.html'
license=("custom")
source=(
	"https://apt.repos.intel.com/oneapi/pool/main/${pkgname}-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb"
	"https://apt.repos.intel.com/oneapi/pool/main/${pkgname}-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb"
	"https://apt.repos.intel.com/oneapi/pool/main/${pkgname}-common-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb"
	"https://apt.repos.intel.com/oneapi/pool/main/${pkgname}-common-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb"
	"${pkgname}.conf"
)
noextract=(
	"${pkgname}-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb"
	"${pkgname}-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb"
	"${pkgname}-common-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb"
	"${pkgname}-common-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb"
)
sha256sums=('4a9e69f6ca80995af4b0947aaf5a2e3a7a329fb34d0426dadb923f659babe6e3'
            '680ffc4946a555ec13863ee61dd1885c45dccac5b5010f502ce3a05c6846fdb7'
            'a32b92b6641a0310c46dc585a0967069d7149baae68156b5421e98c17cdcea45'
            '0190cb204ebff78bcd4631979ddbd0491a70dce29fea8b7588de19c4b64a03d2'
            '76925aa5c6d4dfcb5f87dbc6b51f5480a36abd05ff9e5cc7531bb95c7bee059c')

build() {
	ar x ${pkgname}-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb
	tar xvf data.tar.xz

	ar x ${pkgname}-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_amd64.deb
	tar xvf data.tar.xz

	ar x ${pkgname}-common-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb
	tar xvf data.tar.xz

	ar x ${pkgname}-common-devel-${_pkgver}-${_pkgver}-${_debpkgrel}_all.deb
	tar xvf data.tar.xz

	rm -r opt/intel/oneapi/conda_channel
}

package_intel-oneapi-ippcp() {
	depends=('intel-oneapi-common-vars>=2022.0.0' 'intel-oneapi-common-licensing=2022.0.0')
	cp -r ${srcdir}/opt ${pkgdir}
	ln -sfT "$_pkgver" ${pkgdir}/opt/intel/oneapi/ippcp/latest

	install -Dm644 ${pkgname}.conf ${pkgdir}/etc/ld.so.conf.d/${pkgname}.conf

	mkdir -p ${pkgdir}/usr/lib/cmake
	ln -sfT "/opt/intel/oneapi/ippcp/latest/lib/cmake/ippcp" ${pkgdir}/usr/lib/cmake/ippcp
}

package_intel-oneapi-ippcp-static() {
	pkgdesc="$pkgdesc (static libs)"
	depends=("$pkgbase=$pkgver")
	options=(staticlibs)
	cd ${srcdir}
	for _file in $(find . -name '*.a'); do
		_filename=$(echo $_file | sed "s/.a$//g")
		if [ -f "$_filename.so" ]; then
			cp --parents ${_file} ${pkgdir}/
		fi
	done
}

