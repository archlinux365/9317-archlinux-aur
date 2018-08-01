# Generated by debtap
# Maintainer: jaap
# Contributor: jaap
pkgname=synergy2-bin
pkgver=2.0.12.beta
pkgrel=1
pkgdesc="Keyboard and mouse sharing solution. Synergy allows you to share one mouse and keyboard between multiple computers. Work seamlessly across Windows, macOS and Linux."
arch=('x86_64')
url="https://symless.com/synergy"
license=('unknown')
groups=('')
depends=('gcc>=5.2' 'bash-completion>=1.18.' 'gcc-libs>=3.0' 'hicolor-icon-theme' 'openssl-1.0' 'libx11>=1.2.99.901' 'libxext' 'libxi>=1.2.99.4' 'libxtst' 'openssl-1.0>=1.0.0' 'qt5-base>=5.5.0' 'qt5-declarative>=5.5.0' 'qt5-quickcontrols>=5.5.0' 'qt5-svg>=5.5.0')
conflicts=('synergy' 'synergy2' 'synergy2-beta')
options=('!strip' '!emptydirs')
install=${pkgname}.install 
source_x86_64=("https://binaries.symless.com/v2.0.12/debian/synergy_2.0.12.beta~b74%2B0b61673b_amd64.deb" "https://gist.githubusercontent.com/JAicewizard/a70388a3a7c52fef21299f961a652364/raw/95f597b0ea42321efa4a0f2395fc84b0fdaf8084/synergy.service")
sha512sums_x86_64=("bd6b20abdf50dac7a475551de8def90ce1a53245adc879ed989873dfbe9b4bfbb4ba4d523745ef39db37d3bec5c80942e9051bfba8b9dd03c7db3dfacd0edbc4" "8527f4d1dbeead91d694221711a2f64f585c12657fd081f6e3f8c1ed751159d42fdacfac5234a5d039fb911d006acd9924b1413de3054ca05bba8321c094811a")

package(){
	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"
	cat "synergy.service"
	mv "synergy.service" "${pkgdir}/lib/systemd/system/synergy.service"
	# Fix directories structure differencies
	cd "${pkgdir}"

	install -D -m644 "${pkgdir}/usr/share/doc/synergy/copyright" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	mkdir -p usr/lib 2> /dev/null; cp -r lib/* usr/lib; rm -rf lib
	sed -i "s/{DISPLAY}/${DISPLAY}/g" "${pkgdir}/usr/lib/systemd/system/synergy.service"
	sed -i "s/{XAUTHORITY}/${XAUTHORITY//\//\\/}/g" "${pkgdir}/usr/lib/systemd/system/synergy.service"
	cat ${pkgdir}/usr/lib/systemd/system/synergy.service
	cd ..
}
