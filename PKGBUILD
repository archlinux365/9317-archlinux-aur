# Maintainer: Fabio 'Lolix' Loli <fabio.loli@disroot.org> -> https://github.com/FabioLolix
# Maintainer: linuxer <linuxer@artixlinux.org>
#             improved packages and compatibility
# Contributor: Tomasz Maciej Nowak <com[dot]gmail[at]tmn505>
# Contributor: superlex
# Contributor: Thomas Dziedzic < gostrc at gmail >
# Contributor: Alessandro Sagratini <ale_sagra@hotmail.com>

pkgname=r5u87x
pkgver=0.2.2
pkgrel=4
_alias=r5u87x
pkgdesc='Userspace modules for Ricoh R5U870 OEM cameras, improved packages and compatibility'
arch=('i686' 'x86_64')
url='https://gitea.artixlinux.org/linuxer/r5u87x'
license=('GPL2')
depends=('glib2' 'libusb-compat' 'lib32-libusb-compat')
optdepends=('guile: script for extracting firmware from Windows driver')
source=("${url}/archive/${pkgver}.tar.gz")
b2sums=('77964f77fc7c01a31f7768aa63203f5eb3e961533fe808418dba03c20ef07367caf12927974b1db74b6accbd56070adecbe372abc151b7e8c57af5c52b121638')

prepare() {
	mv "${srcdir}/${pkgver}.tar.gz" "${srcdir}/${_alias}.tar.gz"
	cd ${srcdir}/${_alias}

	# fix udev rule
	sed -i 's| --reload||' contrib/90-r5u87x-loader.rules.in
}

build() {
	cd ${srcdir}/${_alias}

	# set UCODE_PATH because we don't install to default location
	make UCODE_PATH=/usr/lib/firmware/r5u87x-%vid%-%pid%.fw
}

package() {
	cd ${srcdir}/${_alias}

	mkdir -p "${pkgdir}/usr/bin"
	mkdir -p "${pkgdir}/usr/lib/r5u87x/ucode"
	mkdir -p "${pkgdir}/usr/lib32/r5u87x/ucode"
	
    install "${srcdir}/${_alias}/ricoh-webcam-loader" ${pkgdir}/usr/bin
	
    make DESTDIR="${pkgdir}" \
		sbindir="/bin" \
		firmdir="/lib/ucode" \
		UDEV_INSTALL="/usr/lib/udev/rules.d" \
        install
	
    install recode-fw.scm ${pkgdir}/usr/bin
	cp -r "${pkgdir}/usr/lib/ucode" "${pkgdir}/usr/lib/r5u87x/"
	cp -r "${pkgdir}/usr/lib/ucode" "${pkgdir}/usr/lib32/r5u87x/"
    
    install=post.install
}
