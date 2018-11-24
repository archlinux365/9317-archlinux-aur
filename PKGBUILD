# Maintainer: twa022 <twa022 at gmail dot com>

_pkgnamefmt=LibreOfficeDev
_pkgname=libreoffice
pkgname=${_pkgname}-dev-bin
_LOver=6.2.0.0.beta1
pkgver=6.2.0.0.beta1
_basever=$( cut -f1-2 -d'.' <<< ${_LOver} )
pkgrel=1
arch=('i686' 'x86_64')
license=('LGPL3')
url="https://www.libreoffice.org/"
pkgdesc="LibreOffice development branch"
depends=('gtk2' 'lpsolve' 'liborcus' 'neon' 'cucrl')
optdepends=('java-runtime:          adds java support'
            'java-environment:      required by extension-wiki-publisher and extension-nlpsolver'
            'coin-or-mp:            required by the Calc solver'
            'gtk3:                  for GTK3 integration'
            'kio:                   for Qt5 integration')
provides=('libreoffice' 'libreoffice-en-US')

source_i686=("https://dev-builds.libreoffice.org/pre-releases/rpm/x86/${_pkgnamefmt}_${_LOver}_Linux_x86_rpm.tar.gz")
source_x86_64=("https://dev-builds.libreoffice.org/pre-releases/rpm/x86_64/${_pkgnamefmt}_${_LOver}_Linux_x86-64_rpm.tar.gz")
sha256sums_i686=('4aebbc3de5bc6112545366a1c862f9dc3354e67d94919adc4bd8a8b674ed7654')
sha256sums_x86_64=('da89c6b62e77f146dbc1ad43b0bcdebfcd86b85a8dc9cf67c0f15b6f526b956a')

package() {
	cd ${_pkgnamefmt}_${_LOver}*/RPMS

	for rpm in *rpm ; do
		bsdtar -x -f ${rpm} -C ${pkgdir}
	done
}
