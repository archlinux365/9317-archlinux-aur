# Generated by debtap
# Maintainer: Milo Gilad <myl0gcontact@gmail.com>
# Maintainer: Ali Molaei <ali dot molaei at protonmail dot com>

pkgname=bitwarden-bin
pkgver=1.22.2
pkgrel=1
pkgdesc="A secure and free password manager for all of your devices."
arch=('x86_64')
url="https://bitwarden.com"
license=('GPL')
groups=('')
depends=('alsa-lib' 'libnotify' 'libsecret' 'libxss' 'libxtst' 'nspr' 'nss')
conflicts=('bitwarden')
provides=('bitwarden')
options=('!strip' '!emptydirs')
source=("https://github.com/bitwarden/desktop/releases/download/v${pkgver}/Bitwarden-${pkgver}-amd64.deb")

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Symlink
	install -d "${pkgdir}/usr/bin"
	ln -s "/opt/Bitwarden/bitwarden" "${pkgdir}/usr/bin/bitwarden"

	chown root:root $pkgdir/opt/Bitwarden/chrome-sandbox
	chmod 4755 $pkgdir/opt/Bitwarden/chrome-sandbox
}

sha512sums=('131e49ef2dc74b601e31eb6a07da92ae43747c4fdf4729b84fb35f95c4bc38731e6b6f9185b919ede5c7c2cd4813dbddaea172d1287cd60f747b3032e12c09e9')
