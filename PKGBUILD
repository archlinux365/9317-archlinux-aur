# Maintainer: Skallwar <estblcsk(at)gmail(dot)com>

pkgname=rtl8821cu-dkms-git
_pkgbase=rtl8821cu
pkgver=5.4.1118f1bc7e8
pkgrel=1
pkgdesc="rtl8821cu chipset driver"
arch=('i686' 'x86_64' 'armv7h')
url="https://github.com/brektrou/rtl8821CU"
license=('GPL2')
depends=('dkms' 'bc')
makedepends=('git')
conflicts=("${_pkgbase}")
source=("git+https://github.com/brektrou/rtl8821CU"
        'dkms.conf')
sha256sums=('SKIP'
	    '6863d28cbb525eab0be7b5244a5b924302516142a1925fc6521ce49a2800b03d')
pkgver() {
    cd ${srcdir}/rtl8821CU
    printf '%s' '5.4.1' "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
        cd ${srcdir}/rtl8821CU
        mkdir -p ${pkgdir}/usr/src/${_pkgbase}-${pkgver}
        cp -pr * ${pkgdir}/usr/src/${_pkgbase}-${pkgver}
        cp ${srcdir}/dkms.conf ${pkgdir}/usr/src/${_pkgbase}-${pkgver}
        # Set name and version
        sed -e "s/@_PKGBASE@/${_pkgbase}-dkms/" \
                        -e "s/@PKGVER@/${pkgver}/" \
                        -i "${pkgdir}"/usr/src/${_pkgbase}-${pkgver}/dkms.conf
}
