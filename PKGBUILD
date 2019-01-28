# Maintainer: JunYoung Gwak <i@jgwak.com>

pkgname=otf-kopubworld
pkgver=1.0
pkgrel=1
pkgdesc="KoPub OpenType multilingual fonts."
arch=('any')
license=('custom')
url="http://www.kopus.org/Biz/electronic/Font.aspx"
depends=('fontconfig' 'xorg-font-utils')
source=('http://www.kopus.org/Download_font.aspx?font_id=14&name=KOPUBWORLD_OTF_FONTS.zip'
        'LICENSE::http://www.kopus.org/Download/%EC%84%9C%EC%B2%B4_%EB%9D%BC%EC%9D%B4%EC%84%A0%EC%8A%A4.pdf')
md5sums=('fddcb5e71c22d784bddffee660b05e53'
         'd854e69fc19a8254e6677178a3018185')

package() {
  install -dm 755 $pkgdir/usr/share/fonts/OTF
  install -m 644 $srcdir/*.otf $pkgdir/usr/share/fonts/OTF
  install -Dm 644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE.pdf
}
