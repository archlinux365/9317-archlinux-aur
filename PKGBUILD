# Maintainer: Oleksandr Natalenko <oleksandr@natalenko.name>
pkgname=microsip
pkgver=3.21.2
pkgrel=2
pkgdesc="Open source portable SIP softphone for Windows based on PJSIP stack"
_repouser=post-factum
_reponame=microsip
_wrapperver=1.1
arch=(x86_64)
url="https://www.microsip.org/"
license=(GPL2)
depends=(wine lib32-libpulse xorg-xdpyinfo)
conflicts=(wine-staging)

source=("MicroSIP-Lite-${pkgver}.zip"::"https://www.microsip.org/downloads/?file=MicroSIP-Lite-${pkgver}.zip"
		"${_reponame}-${_wrapperver}.tar.gz"::"https://codeberg.org/${_repouser}/${_reponame}/archive/v${_wrapperver}.tar.gz")

sha256sums=('452884b37d35bc0a2321c2a9c1b2a0afc50e8716ff4b5dac393604aebc5ed99b'
            '7ff13e1c93434f1350132aad1b708461ef84e2fe181cade419d0f25e5a9f3510')

package() {
	install -Dt "${pkgdir}"/usr/share/licenses/${pkgname} -m0644 License.txt
	install -Dt "${pkgdir}"/usr/share/doc/${pkgname} -m0644 "MicroSIP Website.url"
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 hangup.wav
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 msgin.wav
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 msgout.wav
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 ringing.wav
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 ringing2.wav
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 ringtone.wav
	install -Dt "${pkgdir}"/usr/lib/${pkgname} -m0644 lame_enc.dll

	install -Dt "${pkgdir}"/usr/lib/${pkgname} -m0644 microsip.exe

	install -Dt "${pkgdir}"/usr/bin -m0755 ${_reponame}/${pkgname}
	install -Dt "${pkgdir}"/usr/share/${pkgname} -m0644 ${_reponame}/${pkgname}.reg
	install -Dt "${pkgdir}"/usr/share/applications -m0644 ${_reponame}/${pkgname}.desktop
	install -Dt "${pkgdir}"/usr/share/icons/hicolor/256x256/apps -m0644 ${_reponame}/${pkgname}.png
}

