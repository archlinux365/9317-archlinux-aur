# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Vlad M. <vlad@archlinux.net>
# Contributor: Attila Bukor <r1pp3rj4ck[at]w4it[dot]eu>
# Contributor: D. Can Celasun <dcelasun[at]gmail[dot]com>
# Contributor: Slava Volkov <sv99sv[at]gmail[dot]com>

pkgname=phpstorm
_pkgname=PhpStorm
pkgver=2016.1.1
_pkgver=145.970.40
pkgrel=1
pkgdesc="Lightweight and Smart PHP IDE"
arch=('x86_64' 'i686')
options=('!strip')
url="http://www.jetbrains.com/${pkgname}/"
license=('Commercial')
optdepends=('java-environment>=8: use system java'
            'java-runtime-common: use system java')
source=(https://download.jetbrains.com/webide/${_pkgname}-${pkgver}.tar.gz
        jetbrains-phpstorm.desktop
        phpstorm.sh)
sha256sums=('442d98120763932bc34545df022171baca5d2bc44e34b1f36f949e4355b99441'
            '406b491d489228f7e4ba32ef160684bbef5056dacb233ac5d2ca9bca3013c939'
            '669c2138305c0fec856121138827123805d46786a698c1b7b01b06005b8fb423')

package() {
  install -d -m 755 ${pkgdir}/opt/
  install -d -m 755 ${pkgdir}/usr/bin/
  install -d -m 755 ${pkgdir}/usr/share/applications/
  install -d -m 755 ${pkgdir}/usr/share/pixmaps/
  install -d -m 755 ${pkgdir}/etc/profile.d/

  cp -a ${srcdir}/${_pkgname}-${_pkgver} $pkgdir/opt/${pkgname}
  # if using system java you may remove the bundled jre and save about 100M
  #rm -rf $pkgdir/opt/${pkgname}/jre

  ln -s /opt/$pkgname/bin/${pkgname}.sh $pkgdir/usr/bin/${pkgname}
  install -D -m 644 ${srcdir}/jetbrains-${pkgname}.desktop ${pkgdir}/usr/share/applications/
  install -D -m 644 ${srcdir}/${pkgname}.sh ${pkgdir}/etc/profile.d/
  install -D -m 644 "${pkgdir}/opt/${pkgname}/bin/webide.png" "${pkgdir}/usr/share/pixmaps/${pkgname}.png"
}
