# Maintainer : Christian Hesse <mail@eworm.de>
# Maintainer : Ronald van Haren <ronald.archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Keshav Amburay <(the ddoott ridikulus ddoott rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>

## "1" to enable IA32-EFI build in Arch x86_64, "0" to disable
_IA32_EFI_IN_ARCH_X64="1"

## "1" to enable EMU build, "0" to disable
_GRUB_EMU_BUILD="0"

_GRUB_EXTRAS_COMMIT="f2a079441939eee7251bf141986cdd78946e1d20"

_UNIFONT_VER="10.0.06"

[[ "${CARCH}" == "x86_64" ]] && _EFI_ARCH="x86_64"
[[ "${CARCH}" == "i686" ]] && _EFI_ARCH="i386"

[[ "${CARCH}" == "x86_64" ]] && _EMU_ARCH="x86_64"
[[ "${CARCH}" == "i686" ]] && _EMU_ARCH="i386"

_pkgname="grub"
pkgname="grub-luks-keyfile"
pkgdesc="GNU GRand Unified Bootloader (2) with crypto extensions to support for DMCrypt and LUKS volumes with detached headers and key files."
pkgver=2.02
pkgrel=4
epoch=2
url="https://www.gnu.org/software/grub/"
arch=('x86_64')
license=('GPL3')
backup=('boot/grub/grub.cfg'
        'etc/default/grub'
        'etc/grub.d/40_custom')
install="${_pkgname}.install"
options=('!makeflags')

conflicts=('grub' 'grub-common' 'grub-bios' 'grub-emu' "grub-efi-${_EFI_ARCH}" 'grub-legacy')
replaces=('grub' 'grub-common' 'grub-bios' 'grub-emu' "grub-efi-${_EFI_ARCH}")
provides=('grub' 'grub-common' 'grub-bios' 'grub-emu' "grub-efi-${_EFI_ARCH}")

makedepends=('git' 'rsync' 'xz' 'freetype2' 'ttf-dejavu' 'python' 'autogen'
             'texinfo' 'help2man' 'gettext' 'device-mapper' 'fuse2')
depends=('sh' 'xz' 'gettext' 'device-mapper')
optdepends=('freetype2: For grub-mkfont usage'
            'fuse2: For grub-mount usage'
            'dosfstools: For grub-mkrescue FAT FS and EFI support'
            'efibootmgr: For grub-install EFI support'
            'libisoburn: Provides xorriso for generating grub rescue iso using grub-mkrescue'
            'os-prober: To detect other OSes when generating grub.cfg in BIOS systems'
            'mtools: For grub-mkrescue FAT FS support')

if [[ "${_GRUB_EMU_BUILD}" == "1" ]]; then
    makedepends+=('libusbx' 'sdl')
    optdepends+=('libusbx: For grub-emu USB support'
                 'sdl: For grub-emu SDL support')
fi

validpgpkeys=('E53D497F3FA42AD8C9B4D1E835A93B74E82E4209'  # Vladimir 'phcoder' Serbinenko <phcoder@gmail.com>
              '95D2E9AB8740D8046387FD151A09227B1F435A33') # Paul Hardy <unifoundry@unifoundry.com>

source=("https://ftp.gnu.org/gnu/${_pkgname}/${_pkgname}-${pkgver}.tar.xz"{,.sig}
        "https://git.savannah.nongnu.org/cgit/grub-extras.git/snapshot/grub-extras-${_GRUB_EXTRAS_COMMIT}.tar.gz"
        "https://ftp.gnu.org/gnu/unifont/unifont-${_UNIFONT_VER}/unifont-${_UNIFONT_VER}.bdf.gz"{,.sig}
        '0002-intel-ucode.patch'
        '0003-10_linux-detect-archlinux-initramfs.patch'
        '0004-add-GRUB_COLOR_variables.patch'
        '0005-Allow_GRUB_to_mount_ext234_filesystems_that_have_the_encryption_feature.patch'
        '0006-tsc-Change-default-tsc-calibration-method-to-pmtimer-on-EFI-systems.patch'
        'http://grub.johnlane.ie/assets/0001-Cryptomount-support-LUKS-detached-header.patch'
        'http://grub.johnlane.ie/assets/0002-Cryptomount-support-key-files.patch'
        'http://grub.johnlane.ie/assets/0003-Cryptomount-luks-allow-multiple-passphrase-attempts.patch'
        'http://grub.johnlane.ie/assets/0004-Cryptomount-support-plain-dm-crypt.patch'
        'http://grub.johnlane.ie/assets/0005-Cryptomount-support-for-hyphens-in-UUID.patch'
        '0006-Cryptomount-support-for-using-whole-device-as-keyfile.patch::https://github.com/johnlane/grub/pull/8.patch'
        'grub.default'
        'grub.cfg')

sha256sums=('810b3798d316394f94096ec2797909dbf23c858e48f7b3830826b8daa06b7b0f'
            'SKIP'
            '2844601914cea6b1231eca0104853a93c4d67a5209933a0766f1475953300646'
            '0d81571fc519573057b7641d26a31ead55cc0b02a931589fb346a3a534c3dcc1'
            'SKIP'
            '37adb95049f6cdcbdbf60ed6b6440c5be99a4cd307a0f96c3c3837b6c2e07f3c'
            'b41e4438319136b5e74e0abdfcb64ae115393e4e15207490272c425f54026dd3'
            'a5198267ceb04dceb6d2ea7800281a42b3f91fd02da55d2cc9ea20d47273ca29'
            '535422c510a050d41efe7720dbe54de29e04bdb8f86fd5aea5feb0b24f7abe46'
            'c38f2b2caae33008b35a37d8293d8bf13bf6fd779a4504925da1837fd007aeb5'
            '363f68a9119b4985bc1f66d7589f72feb03766526d56d02733a842baf4a8093e'
            '1579a1d00020f51225a1b645f47d2bb40edf760d3650d6c9b994f4be3f2bf2c7'
            'ff7bb70340410d2be8c46b28cd063eb8bec4f2be8e560d7843b9749fd5986aae'
            '7a7bedccd1c1110314d1eb34f10fe3d358948154bcaaac40b26afc35420cc5dc'
            'c374a6c6fae95215bfe9f7ee780e2b6518345256c227eb562b922f06544e02b6'
            'b27d252cc9a25be424416897496d85fd1aa06ebca8c4cff9c916d90aadffb855'
            '74e5dd2090a153c10a7b9599b73bb09e70fddc6a019dd41641b0f10b9d773d82'
            'c5e4f3836130c6885e9273c21f057263eba53f4b7c0e2f111f6e5f2e487a47ad')

prepare() {
	cd "${srcdir}/grub-${pkgver}/"

	msg "Patch to load Intel microcode"
	patch -Np1 -i "${srcdir}/0002-intel-ucode.patch"
	echo

	msg "Patch to detect of Arch Linux initramfs images by grub-mkconfig"
	patch -Np1 -i "${srcdir}/0003-10_linux-detect-archlinux-initramfs.patch"
	echo

	msg "Patch to enable GRUB_COLOR_* variables in grub-mkconfig"
	## Based on http://lists.gnu.org/archive/html/grub-devel/2012-02/msg00021.html
	patch -Np1 -i "${srcdir}/0004-add-GRUB_COLOR_variables.patch"
	echo

	msg "Patch to allow GRUB to mount ext2/3/4 filesystems that have the encryption feature"
	patch -Np1 -i "${srcdir}/0005-Allow_GRUB_to_mount_ext234_filesystems_that_have_the_encryption_feature.patch"
	echo

	msg "Patch to change default tsc calibration method to pmtimer on EFI systems"
	patch -Np1 -i "${srcdir}/0006-tsc-Change-default-tsc-calibration-method-to-pmtimer-on-EFI-systems.patch"
	echo

	msg "Patch for adding support for DMCrypt and LUKS volumes with detached headers and key files"
	patch -Np1 -i "${srcdir}/0001-Cryptomount-support-LUKS-detached-header.patch"
	patch -Np1 -i "${srcdir}/0002-Cryptomount-support-key-files.patch"
	patch -Np1 -i "${srcdir}/0003-Cryptomount-luks-allow-multiple-passphrase-attempts.patch"
	patch -Np1 -i "${srcdir}/0004-Cryptomount-support-plain-dm-crypt.patch"
	patch -Np1 -i "${srcdir}/0005-Cryptomount-support-for-hyphens-in-UUID.patch"
	patch -Np1 -i "${srcdir}/0006-Cryptomount-support-for-using-whole-device-as-keyfile.patch"
	echo

	msg "Fix DejaVuSans.ttf location so that grub-mkfont can create *.pf2 files for starfield theme"
	sed 's|/usr/share/fonts/dejavu|/usr/share/fonts/dejavu /usr/share/fonts/TTF|g' -i "configure.ac"

	msg "Fix mkinitcpio 'rw' FS#36275"
	sed 's| ro | rw |g' -i "util/grub.d/10_linux.in"

	msg "Fix OS naming FS#33393"
	sed 's|GNU/Linux|Linux|' -i "util/grub.d/10_linux.in"

	msg "Pull in latest language files"
	./linguas.sh
	echo

	msg "Remove not working langs which need LC_ALL=C.UTF-8"
	sed -e 's#en@cyrillic en@greek##g' -i "po/LINGUAS"

	msg "Avoid problem with unifont during compile of grub"
	# http://savannah.gnu.org/bugs/?40330 and https://bugs.archlinux.org/task/37847
	cp "${srcdir}/unifont-${_UNIFONT_VER}.bdf" "unifont.bdf"
}

_build_grub-common_and_bios() {
	msg "Set ARCH dependent variables for bios build"
	if [[ "${CARCH}" == 'x86_64' ]]; then
		_EFIEMU="--enable-efiemu"
	else
		_EFIEMU="--disable-efiemu"
	fi

	msg "Copy the source for building the bios part"
	cp -r "${srcdir}/grub-${pkgver}" "${srcdir}/grub-${pkgver}-bios"
	cd "${srcdir}/grub-${pkgver}-bios/"

	msg "Add the grub-extra sources for bios build"
	install -d "${srcdir}/grub-${pkgver}-bios/grub-extras"
	cp -r "${srcdir}/grub-extras-${_GRUB_EXTRAS_COMMIT}/915resolution" \
		"${srcdir}/grub-${pkgver}-bios/grub-extras/915resolution"
	export GRUB_CONTRIB="${srcdir}/grub-${pkgver}-bios/grub-extras/"

	msg "Unset all compiler FLAGS for bios build"
	unset CFLAGS
	unset CPPFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	unset MAKEFLAGS

	msg "Run autogen.sh for bios build"
	./autogen.sh
	echo

	msg "Run ./configure for bios build"
	./configure \
		--with-platform="pc" \
		--target="i386" \
		"${_EFIEMU}" \
		--enable-mm-debug \
		--enable-nls \
		--enable-device-mapper \
		--enable-cache-stats \
		--enable-boot-time \
		--enable-grub-mkfont \
		--enable-grub-mount \
		--prefix="/usr" \
		--bindir="/usr/bin" \
		--sbindir="/usr/bin" \
		--mandir="/usr/share/man" \
		--infodir="/usr/share/info" \
		--datarootdir="/usr/share" \
		--sysconfdir="/etc" \
	 	--program-prefix="" \
		--with-bootdir="/boot" \
		--with-grubdir="grub" \
		--disable-silent-rules \
		--disable-werror
	echo

	msg "Run make for bios build"
	make
	echo
}

_build_grub-efi() {
	msg "Copy the source for building the ${_EFI_ARCH} efi part"
	cp -r "${srcdir}/grub-${pkgver}" "${srcdir}/grub-${pkgver}-efi-${_EFI_ARCH}"
	cd "${srcdir}/grub-${pkgver}-efi-${_EFI_ARCH}/"

	msg "Unset all compiler FLAGS for ${_EFI_ARCH} efi build"
	unset CFLAGS
	unset CPPFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	unset MAKEFLAGS

	msg "Run autogen.sh for ${_EFI_ARCH} efi build"
	./autogen.sh
	echo

	msg "Run ./configure for ${_EFI_ARCH} efi build"
	./configure \
		--with-platform="efi" \
		--target="${_EFI_ARCH}" \
		--disable-efiemu \
		--enable-mm-debug \
		--enable-nls \
		--enable-device-mapper \
		--enable-cache-stats \
		--enable-boot-time \
		--enable-grub-mkfont \
		--enable-grub-mount \
		--prefix="/usr" \
		--bindir="/usr/bin" \
		--sbindir="/usr/bin" \
		--mandir="/usr/share/man" \
		--infodir="/usr/share/info" \
		--datarootdir="/usr/share" \
		--sysconfdir="/etc" \
		--program-prefix="" \
		--with-bootdir="/boot" \
		--with-grubdir="grub" \
		--disable-silent-rules \
		--disable-werror
	echo

	msg "Run make for ${_EFI_ARCH} efi build"
	make
	echo
}

_build_grub-emu() {
	msg "Copy the source for building the emu part"
	cp -r "${srcdir}/grub-${pkgver}/" "${srcdir}/grub-${pkgver}-emu/"
	cd "${srcdir}/grub-${pkgver}-emu/"

	msg "Unset all compiler FLAGS for emu build"
	unset CFLAGS
	unset CPPFLAGS
	unset CXXFLAGS
	unset LDFLAGS
	unset MAKEFLAGS

	msg "Run autogen.sh for emu build"
	./autogen.sh
	echo

	msg "Run ./configure for emu build"
	./configure \
		--with-platform="emu" \
		--target="${_EMU_ARCH}" \
		--enable-mm-debug \
		--enable-nls \
		--enable-device-mapper \
		--enable-cache-stats \
		--enable-grub-mkfont \
		--enable-grub-mount \
		--enable-grub-emu-usb=no \
		--enable-grub-emu-sdl=no \
		--disable-grub-emu-pci \
		--prefix="/usr" \
		--bindir="/usr/bin" \
		--sbindir="/usr/bin" \
		--mandir="/usr/share/man" \
		--infodir="/usr/share/info" \
		--datarootdir="/usr/share" \
		--sysconfdir="/etc" \
		--program-prefix="" \
		--with-bootdir="/boot" \
		--with-grubdir="grub" \
		--disable-silent-rules \
		--disable-werror
	echo

	msg "Run make for emu build"
	make
	echo
}

build() {
	cd "${srcdir}/grub-${pkgver}/"

	msg "Build grub bios stuff"
	_build_grub-common_and_bios
	echo

	msg "Build grub ${_EFI_ARCH} efi stuff"
	_build_grub-efi
	echo

	if [[ "${CARCH}" == "x86_64" ]] && [[ "${_IA32_EFI_IN_ARCH_X64}" == "1" ]]; then
		msg "Build grub i386 efi stuff"
		_EFI_ARCH="i386" _build_grub-efi
		echo
	fi

	if [[ "${_GRUB_EMU_BUILD}" == "1" ]]; then
		msg "Build grub emu stuff"
		_build_grub-emu
		echo
	fi
}

_package_grub-common_and_bios() {
	cd "${srcdir}/grub-${pkgver}-bios/"

	msg "Run make install for bios build"
	make DESTDIR="${pkgdir}/" bashcompletiondir="/usr/share/bash-completion/completions" install
	echo

	msg "Remove gdb debugging related files for bios build"
	rm -f "${pkgdir}/usr/lib/grub/i386-pc"/*.module || true
	rm -f "${pkgdir}/usr/lib/grub/i386-pc"/*.image || true
	rm -f "${pkgdir}/usr/lib/grub/i386-pc"/{kernel.exec,gdb_grub,gmodule.pl} || true

	msg "Install /etc/default/grub (used by grub-mkconfig)"
	install -D -m0644 "${srcdir}/grub.default" "${pkgdir}/etc/default/grub"

	msg "Install grub.cfg for backup array"
	install -D -m0644 "${srcdir}/grub.cfg" "${pkgdir}/boot/grub/grub.cfg"
}

_package_grub-efi() {
	cd "${srcdir}/grub-${pkgver}-efi-${_EFI_ARCH}/"

	msg "Run make install for ${_EFI_ARCH} efi build"
	make DESTDIR="${pkgdir}/" bashcompletiondir="/usr/share/bash-completion/completions" install
	echo

	msg "Remove gdb debugging related files for ${_EFI_ARCH} efi build"
	rm -f "${pkgdir}/usr/lib/grub/${_EFI_ARCH}-efi"/*.module || true
	rm -f "${pkgdir}/usr/lib/grub/${_EFI_ARCH}-efi"/*.image || true
	rm -f "${pkgdir}/usr/lib/grub/${_EFI_ARCH}-efi"/{kernel.exec,gdb_grub,gmodule.pl} || true
}

_package_grub-emu() {
	cd "${srcdir}/grub-${pkgver}-emu/"

	msg "Run make install for emu build"
	make DESTDIR="${pkgdir}/" bashcompletiondir="/usr/share/bash-completion/completions" install
	echo

	msg "Remove gdb debugging related files for emu build"
	rm -f "${pkgdir}/usr/lib/grub/${_EMU_ARCH}-emu"/*.module || true
	rm -f "${pkgdir}/usr/lib/grub/${_EMU_ARCH}-emu"/*.image || true
	rm -f "${pkgdir}/usr/lib/grub/${_EMU_ARCH}-emu"/{kernel.exec,gdb_grub,gmodule.pl} || true
}

package() {
	cd "${srcdir}/grub-${pkgver}/"

	msg "Package grub ${_EFI_ARCH} efi stuff"
	_package_grub-efi

	if [[ "${CARCH}" == "x86_64" ]] && [[ "${_IA32_EFI_IN_ARCH_X64}" == "1" ]]; then
		msg "Package grub i386 efi stuff"
		_EFI_ARCH="i386" _package_grub-efi
		echo
	fi

	if [[ "${_GRUB_EMU_BUILD}" == "1" ]]; then
		msg "Package grub emu stuff"
		_package_grub-emu
		echo
	fi

	msg "Package grub bios stuff"
	_package_grub-common_and_bios
}
