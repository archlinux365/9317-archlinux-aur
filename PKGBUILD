# Contributor: Elena ``of Valhalla'' Grandi <elena.valhalla@gmail.com>
# Contributor: Huulivoide <jesse.jaara@gmail.com>
# Maintainer: GordonGR <ntheo1979@gmail.com>

pkgname=ttf-textfonts
pkgver=8.01
pkgrel=1
pkgdesc="Text faces based on early Greek editions"
arch=('any')
url="http://users.teilar.gr/~g1951d/"
license=('custom')
depends=('fontconfig' 'xorg-font-utils')
conflicts=('ttf-alexander' 'ttf-alfios' 'ttf-anaktoria' 'ttf-aroania' 'ttf-atavyros' 'ttf-avdira' 'ttf-asea')
source=("http://users.teilar.gr/~g1951d/Textfonts.zip"
	 "LICENSE")
md5sums=('8e8aee6c882fe1bd1dcc2a6a0db5ef7d'
         'bc1709dc3b1f6a7545ab366923e01a1c')

package()
{
for file in "${srcdir}"/fonts/*ttf; do
  install -m 644 -D "${file}" "${pkgdir}/usr/share/fonts/TTF"/$(basename $file)
done

for file in "${srcdir}"/fonts/hinted/*ttf; do
  install -m 644 -D "${file}" "${pkgdir}/usr/share/fonts/TTF"/$(basename $file)
done

install -m 644 -D $srcdir/LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
