# Maintainer: Max Harmathy <harmathy@secure.mailbox.org>
# Contributor: Levente Polyak <anthraxx[at]archlinux[dot]org>
# Contributor: Lukas Fleischer <lfleischer@archlinux.org>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Tobias Powalowski <tpowa@archlinux.org>
# Contributor: Andreas Radke <andyrtr@archlinux.org>
# Contributor: Judd Vinet <jvinet@zeroflux.org>

pkgname=gnupg-nouid-patch
_pkgname=gnupg
pkgver=2.2.32
pkgrel=1
pkgdesc='GnuPG (OpenPGP) with patches to allow using keys.openpgp.org'
url='https://keys.openpgp.org/about/faq#older-gnupg'
license=('GPL')
arch=('x86_64')
provides=("$_pkgname=${pkgver}")
conflicts=("$_pkgname")
checkdepends=('openssh')
makedepends=('libldap' 'libusb-compat' 'pcsclite')
depends=('npth' 'libgpg-error' 'libgcrypt' 'libksba' 'libassuan' 'pinentry'
         'bzip2' 'libbz2.so' 'readline' 'libreadline.so' 'gnutls' 'sqlite'
         'zlib' 'glibc')
optdepends=('libldap: gpg2keys_ldap'
            'libusb-compat: scdaemon'
            'pcsclite: scdaemon')
validpgpkeys=(
	'D8692123C4065DEA5E0F3AB5249B39D24F25E3B6' # Werner Koch (dist sig)
	'031EC2536E580D8EA286A9F22071B08A33BD3F06' # NIIBE Yutaka (GnuPG Release Key) <gniibe@fsij.org>
	'5B80C5754298F0CB55D8ED6ABCEF7E294B092E28' # Andre Heinecke (Release Signing Key)
	'6DAA6E64A76D2840571B4902528897B826403ADA' # Werner Koch (dist signing 2020)
) 
source=("https://gnupg.org/ftp/gcrypt/${_pkgname}/${_pkgname}-${pkgver}.tar.bz2"{,.sig}
        'drop-import-clean.patch'
				'avoid-beta-warning.patch'
				'tests-add-test-cases-for-import-without-uid.patch'
				'gpg-allow-import-of-previously-known-keys-even-without-UI.patch'
				'gpg-accept-subkeys-with-a-good-revocation-but-no-self-sig.patch')
sha256sums=('b2571b35f82c63e7d278aa6a1add0d73453dc14d3f0854be490c844fca7e0614'
            'SKIP'
            '02d375f0045f56f7dd82bacdb5ce559afd52ded8b75f6b2673c39ec666e81abc'
            '22fdf9490fad477f225e731c417867d9e7571ac654944e8be63a1fbaccd5c62d'
            '9f54178400bbc78629e67d4949909187c4840e41b030920f3152cb9f1e37eecf'
            '9aede2de37d3d8d4f0dd44e1bf449afcc2d86c47d368891c7d73ab757aad5332'
            '006b10931086b0c067cbb5e488990a934a3aed883ec7aae7a486bec6770d5e77')

install=install

prepare() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	patch -p1 -i ../avoid-beta-warning.patch
	patch -p1 -i ../drop-import-clean.patch
	patch -p1 -i ../tests-add-test-cases-for-import-without-uid.patch
	patch -p1 -i ../gpg-allow-import-of-previously-known-keys-even-without-UI.patch
	patch -p1 -i ../gpg-accept-subkeys-with-a-good-revocation-but-no-self-sig.patch

	# improve reproducibility
	rm doc/gnupg.info*

	./autogen.sh
}

build() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	./configure \
		--prefix=/usr \
		--sysconfdir=/etc \
		--sbindir=/usr/bin \
		--libexecdir=/usr/lib/gnupg \
		--enable-maintainer-mode \

	make
}

check() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	make check
}

package() {
	cd "${srcdir}/${_pkgname}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	ln -s gpg "${pkgdir}"/usr/bin/gpg2
	ln -s gpgv "${pkgdir}"/usr/bin/gpgv2

	install -Dm 644 doc/examples/systemd-user/*.* -t "${pkgdir}/usr/lib/systemd/user"
}

# vim: ts=2 sw=2 noet:
