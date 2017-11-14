# Generated by debtap
# Maintainer: jaap
# Contributor: jaap
pkgname=synergy2-bin
pkgver=2.0.5.stable~b1345+3f23b557
pkgrel=1
pkgdesc="Keyboard and mouse sharing solution. Synergy allows you to share one mouse and keyboard between multiple computers. Work seamlessly across Windows, macOS and Linux."
arch=('x86_64')
url="https://symless.com/synergy"
license=('unknown')
groups=('')
depends=('gcc>=5.2' 'bash-completion>=1.18.' 'gcc-libs>=3.0' 'hicolor-icon-theme' 'openssl-1.0' 'libx11>=1.2.99.901' 'libxext' 'libxi>=1.2.99.4' 'libxtst' 'openssl-1.0>=1.0.0' 'qt5-base>=5.5.0' 'qt5-declarative>=5.5.0' 'qt5-quickcontrols>=5.5.0')
conflicts=('synergy' 'synergy2')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://www.dropbox.com/s/t00chh9rgvo94pf/synergy_2.0.3.stable_b1125%2B8a08e664_amd64.deb?dl=1")
sha512sums_x86_64=('08dfd4c5c79af4504fc034c7bb811e19011f86a3e00557f378bebe305406120a1f32d1d06e8dfc6cc76092d1a8b7f88e1b4802f7706a6037ed0c9b562ff9d88c')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/share/doc/synergy/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; cp -r lib/* usr/lib; rm -rf lib

	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/share/doc/synergy/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; cp -r lib/* usr/lib; rm -rf lib

	cd ..
	tput setaf 1; echo "this is the beta package for the AUR, if you want to stay on the stable builds go and download the synergy2 package. and make sure to remove this one."; tput sgr0
}
