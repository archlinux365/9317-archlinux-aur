# Maintainer: Aline Abler <alinea@riseup.net>

pkgname=ttf-averia-libre
pkgver=20181017
pkgrel=1
pkgdesc='Averia Libre Font'
url="http://iotic.com/averia/"
license=('custom:OFL')
arch=('any')
depends=('fontconfig' 'xorg-fonts-encodings' 'xorg-font-utils')
source=(${pkgname}-${pkgver}::"http://www.ffonts.net/Averia-Libre-Regular.font.zip"
        'install')

install=install

package() {
	cd "${srcdir}/averialibre"
	install -dm755 "${pkgdir}"/usr/share/fonts/TTF
	install -m644 *.ttf "${pkgdir}"/usr/share/fonts/TTF

	install -Dm644 "OFL.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -dm755 "${pkgdir}/usr/share/doc/${pkgname}/"
}
md5sums=('fbc998528812612855e1e512916c82cc'
         'b9b03309f730947d472a63b0e5ca3bb1')
