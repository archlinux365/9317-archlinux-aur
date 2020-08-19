# Maintainer: Kamil Pajek <kamil.pajek@gmail.com>
pkgname=tex-gyre-math-fonts
pkgver=1.632
pkgrel=1
pkgdesc='The math companions for four TeX Gyre serif fonts (Bonum, Pagella, Schola, Termes)'
arch=('any')
url='http://www.gust.org.pl/projects/e-foundry/tg-math'
license=('custom:GFL')
optdepends=('tex-gyre-fonts: The TeX Gyre fonts collection (Adventor, Bonum, Chorus, Cursor, Heros, Pagella, Schola, Termes)')
source=('http://www.gust.org.pl/projects/e-foundry/tg-math/download/texgyrebonum-math-1005.zip'
        'http://www.gust.org.pl/projects/e-foundry/tg-math/download/texgyrepagella-math-1632.zip'
        'http://www.gust.org.pl/projects/e-foundry/tg-math/download/texgyreschola-math-1533.zip'
        'http://www.gust.org.pl/projects/e-foundry/tg-math/download/texgyretermes-math-1543.zip')
b2sums=('c18f5ec1c5c75a77e42e81c80a9303bb8322611de4dff41148d28796b8e7c3c0643a443933cb15f848b47b8e0af6ef8dcbb1d95c3eb0ecc0e9f92c540e0129c2'
        '5e668c4a3d3659c97aa58fee710de0d21bb8a161249909bec136585a1c81b798a6591c10c13e1b843a82ae37e93b2e3f65cbf62950464a111c3b6af358df3772'
        '0e6529c52eab282d6417eb46a5cf690cbe71e1bebf7c85799fa25933b9f71913fcb31000d791346e40da2517a51804d162302c7a0d5b87300fd5bb05449e0667'
        '7dceb111999b089c6e3be40d0901f627af748bf43bc42d3c9b57369bb1e5d87897143274bde675ebb672fab1f3be777592fd72d4e8361614071b25316006a47a')

package() {
  install -m755 -d "${pkgdir}/usr/share/fonts/${pkgname%-fonts}"
  install -m644 -t "${pkgdir}/usr/share/fonts/${pkgname%-fonts}" \
                   "${srcdir}/texgyrebonum-math-1005/opentype/texgyrebonum-math.otf" \
                   "${srcdir}/texgyrepagella-math-1632/opentype/texgyrepagella-math.otf" \
                   "${srcdir}/texgyreschola-math-1533/opentype/texgyreschola-math.otf" \
                   "${srcdir}/texgyretermes-math-1543/opentype/texgyretermes-math.otf"

  install -m755 -d "${pkgdir}/usr/share/licenses/${pkgname}"
  install -m644 -t "${pkgdir}/usr/share/licenses/${pkgname}" \
                   "${srcdir}/texgyrebonum-math-1005/doc/GUST-FONT-LICENSE.txt"
}
