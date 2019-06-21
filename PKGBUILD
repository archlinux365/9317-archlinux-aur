# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=ipxe-git
pkgver=1.0.0.r2710.g1cdf56f7
pkgrel=3
pkgdesc='iPXE open source boot firmware - git checkout'
arch=('any')
url='http://www.ipxe.org/'
license=('GPL')
makedepends=('git' 'syslinux' 'libisoburn' 'mtools' 'xz')
provides=('ipxe')
conflicts=('ipxe')
install=ipxe.install
source=('git://github.com/ipxe/ipxe.git'
	'ipxe-0001-git-version.patch::https://github.com/eworm-de/ipxe/commit/96d1e2fcdf95d82a8ca7b000ad8b30ec50b10e1d.patch'
	'ipxe-0002-banner.patch::https://github.com/eworm-de/ipxe/commit/22f2b2c50ea3b7b24dc57af917b1dd6295ad8764.patch'
	'ipxe-0003-efi-iso.patch::https://github.com/eworm-de/ipxe/commit/23a09ab6f559eea4ae2cc263930e26aaee601509.patch'
	'grub'
	'chain-default.ipxe'
	'chain-default-3928.ipxe')
sha256sums=('SKIP'
            'dcce3e457e6c4f3e41afc2f40c5a56e9ede8be389718a0521d5021aaf29cab8b'
            '97de694b9e10268ca1ff357e71df431200f1a3a95a1dc0ea70737a05cdce2f69'
            '1afd67bbed3316913483c44ebc259393eae728992e2cc5a315ffb6b07d590296'
            'ead8e9b386206bc0e95838a6e074c218e038cd3fa1ca5cff2b73e34b40d5552f'
            'f7ec78e26671f4df90d89440d8b2a69473c15cb6b25dda32c773023378fec42a'
            'e26a54b4e99816b34baebcb7a15d99d57c9395c9689ffbae2329cc675248f9b9')

pkgver() {
	cd ipxe/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git rev-parse --short HEAD)"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git rev-parse --short HEAD)"
	fi
}

prepare() {
	cd ipxe/src/

	# git version
	patch -Np2 < "${srcdir}/ipxe-0001-git-version.patch"

	# ArchLinux branding
	patch -Np2 < "${srcdir}/ipxe-0002-banner.patch"

	# ISO image with EFI support
	patch -Np2 < "${srcdir}/ipxe-0003-efi-iso.patch"

	# change menu colors
	sed -i "/COLOR_[A-Z]*_BG/s/COLOR_BLUE/COLOR_BLACK/" config/colour.h

	# enable neighbour command
	sed -i "/NEIGHBOUR_CMD/c #define NEIGHBOUR_CMD" config/general.h

	# enable ping command
	sed -i "/PING_CMD/c #define PING_CMD" config/general.h

	# enable reboot and poweroff
	sed -i -e "/REBOOT_CMD/c #define REBOOT_CMD" \
		-e "/POWEROFF_CMD/c #define POWEROFF_CMD" config/general.h

	# disable WEP, WPA and WPA2
	sed -i -e "/CRYPTO_80211_/s/^#define/#undef/" \
		-e "/IWMGMT_CMD/c #undef IWMGMT_CMD" config/general.h
}

build() {
	cd ipxe/src/

	NO_WERROR=1
	export NO_WERROR

	# default targets (ipxe.{lkrn,dsk,iso,usb}, undionly.kpxe)
	make all

	# this includes drivers, but is bigger
	# build targets with embedded scripts first and rename
	make bin/ipxe.pxe EMBED=${srcdir}/chain-default.ipxe
	mv bin/ipxe.pxe bin/ipxe-default.pxe

	make bin/ipxe.pxe EMBED=${srcdir}/chain-default-3928.ipxe
	mv bin/ipxe.pxe bin/ipxe-default-3928.pxe

	make bin/ipxe.pxe

	# EFI
	make bin-i386-efi/ipxe.efi bin-x86_64-efi/ipxe.efi

	# ipxe.liso and ipxe.eiso
	# build after EFI!
	make bin/ipxe.liso bin/ipxe.eiso
}

package() {
	cd ipxe/

	install -D -m0755 ${srcdir}/grub ${pkgdir}/etc/grub.d/35_ipxe

	install -D -m0644 COPYING ${pkgdir}/usr/share/licenses/ipxe/COPYING
	install -D -m0644 COPYING.GPLv2 ${pkgdir}/usr/share/licenses/ipxe/COPYING.GPLv2
	install -D -m0644 COPYING.UBDL ${pkgdir}/usr/share/licenses/ipxe/COPYING.UBDL

	cd src/

	# iPXE kernel bzImage
	install -D -m0644 bin/ipxe.lkrn ${pkgdir}/boot/ipxe/ipxe.lkrn

	# default targets, legacy and EFI ISO
	install -D -m0644 bin/ipxe.dsk ${pkgdir}/usr/share/ipxe/ipxe.dsk
	install -D -m0644 bin/ipxe.usb ${pkgdir}/usr/share/ipxe/ipxe.usb
	install -D -m0644 bin/ipxe.iso ${pkgdir}/usr/share/ipxe/ipxe.iso
	install -D -m0644 bin/ipxe.liso ${pkgdir}/usr/share/ipxe/ipxe-legacy.iso
	install -D -m0644 bin/ipxe.eiso ${pkgdir}/usr/share/ipxe/ipxe-efi.iso

	# iPXE UNDI-only targets
	install -D -m0644 bin/undionly.kpxe ${pkgdir}/usr/lib/ipxe/undi.kpxe

	# iPXE targets with full driver support
	install -D -m0644 bin/ipxe.pxe ${pkgdir}/usr/lib/ipxe/ipxe.pxe
	install -D -m0644 bin/ipxe-default.pxe ${pkgdir}/usr/lib/ipxe/ipxe-default.pxe
	install -D -m0644 bin/ipxe-default-3928.pxe ${pkgdir}/usr/lib/ipxe/ipxe-default-3928.pxe

	# iPXE EFI targets
	install -D -m0644 bin-i386-efi/ipxe.efi ${pkgdir}/usr/lib/ipxe/efi-i386.efi
	install -D -m0644 bin-x86_64-efi/ipxe.efi ${pkgdir}/usr/lib/ipxe/efi-x86_64.efi
}

