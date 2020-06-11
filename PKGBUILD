# Maintainer: Felix Golatofski <contact@xdfr.de>
# Contributor: Bjoern Franke <bjo+aur@schafweide.org>
# Contributor: feanor1397 <feanor1397@gmail.com>

pkgname=rtlwifi_new-rtw88-dkms
_pkgname=rtlwifi_new
pkgver=r328.6dcff1c
pkgrel=2
pkgdesc='Newest Realtek rtlwifi codes, rtw88 branch'
arch=('i686' 'x86_64')
url='https://github.com/lwfinger/rtlwifi_new'
depends=('dkms')
makedepends=('git')
provides=('rtlwifi_new-dkms' 'rtlwifi_new-extended-dkms-git')
conflicts=('rtlwifi_new-dkms' 'rtlwifi_new-extended-dkms-git')
replaces=('rtlwifi_new-extended-dkms-git')
install=${pkgname}.install
source=("git+https://github.com/lwfinger/rtlwifi_new.git#branch=rtw88" 
	"dkms.conf")
sha256sums=('SKIP'
            '33ec7df7b2f2e4b00ace0d5223bb10faac09452687013de5bc51517a03f0a83c')

pkgver() {
	cd "${_pkgname}"
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	install -dm 755 "${pkgdir}/usr/src"
	cp -dr --no-preserve=ownership "${_pkgname}" "${pkgdir}/usr/src/${_pkgname}-${pkgver}"
	
	#fix wrong dkms config
	cp  "${srcdir}"/dkms.conf "${pkgdir}"/usr/src/${_pkgname}-${pkgver}/dkms.conf
	
	# Set name and version
	sed -e "s/0.6/${pkgver}/" \
		-i "${pkgdir}"/usr/src/${_pkgname}-${pkgver}/dkms.conf
	sed -e "s/rtlwifi-new/${_pkgname}/" \
                -i "${pkgdir}"/usr/src/${_pkgname}-${pkgver}/dkms.conf	

}
