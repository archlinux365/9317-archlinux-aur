# Generated by debtap
# Maintainer: tabulatejarl8@gmail.com <TabulateJarl8>
# Maintainer: TurboWafflz <turbowafflz@gmail.com>
pkgname=iicalc-beta
pkgver=2.7.38
pkgrel=1
pkgdesc="An extensible calculator written in Python. Development/Beta Channel."
arch=('any')
url="https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator"
license=('GPL')
groups=('')
depends=('bash-completion' 'python-pip')
optdepends=("dialog: GUI elements")
makedepends=("binutils" "tar")
conflicts=("iicalc")
options=('!strip' '!emptydirs')
install=${pkgname}.install
source=("iicalc-$pkgver.deb::https://gitlab.com/TurboWafflz/ImaginaryInfinity-Calculator/-/jobs/artifacts/development/raw/iicalc.deb?job=debian%20packager")
sha512sums=('5f137bcb6b02af8a79f9bcfc95e7702028101025d05cfbe348cab61db422cf48bf66c55f5ca3807277f01d39fbfb160b9562bfc2b67114bee56b695f497f1b9c')

package(){

	# Extract package data
	ar vx iicalc-$pkgver.deb
	tar xf data.tar.xz -C "${pkgdir}"
	rm debian-binary control.tar.xz data.tar.xz
	sed -i -E 's/debian/aur/' ${pkgdir}/usr/share/iicalc/config.ini

}
