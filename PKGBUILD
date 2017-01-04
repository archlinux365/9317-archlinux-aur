# Maintainer: Sebastian Krebs <sebastian[at]krebs[dot]one>
# Contributor: Yakir Sitbon <kingyes1[at]gmail[dot]com>
# Contributor: Eduard Kracmar <edke.kraken[at]gmail[dot]com>
# Contributor: D. Can Celasun <dcelasun[at]gmail[dot]com>
# Contributor: Slava Volkov <sv99sv[at]gmail[dot]com>
# Contributor: Patrik Votoček <patrik[at]votocek[dot]cz>

pkgname=phpstorm-eap
pkgver=171.2152.2
pkgrel=1
pkgdesc="Lightning-smart PHP IDE. Early Access Program."
arch=('i686' 'x86_64')
options=(!strip)
url="http://www.jetbrains.com/phpstorm/"
license=('custom')
optdepends=('java-environment>=8: use system java'
            'java-runtime-common: use system java')
source=("http://download.jetbrains.com/webide/PhpStorm-EAP-${pkgver}.tar.gz"
        "phpstorm-eap.desktop"
        "phpstorm-eap.sh")
sha256sums=('63a7e1048b9e25e9e3102b0626d001cd99d35a66dbc6e364bfc089827901e6f6'
            '479e6ac16424df02ce1610da9eec8cc73a84cac7912e60661d4092954142933e'
            '7ff963977384e7398890fbd38f91eb68fc7166e2b440325f19770a8a87bbf480')

package() {
  install -d -m 755 ${pkgdir}/opt/
  install -d -m 755 ${pkgdir}/usr/bin/
  install -d -m 755 ${pkgdir}/usr/share/applications/
  install -d -m 755 ${pkgdir}/usr/share/pixmaps/
  install -d -m 755 ${pkgdir}/etc/profile.d/
  
  cp -R ${srcdir}/PhpStorm-${pkgver} ${pkgdir}/opt/${pkgname}
  
  ln -s /opt/$pkgname/bin/phpstorm.sh "$pkgdir/usr/bin/phpstorm-eap"
  install -D -m 644 ${srcdir}/${pkgname}.desktop ${pkgdir}/usr/share/applications/
  install -D -m 644 ${pkgdir}/opt/${pkgname}/bin/phpstorm.png ${pkgdir}/usr/share/pixmaps/phpstorm-eap.png
  install -D -m 644 ${srcdir}/${pkgname}.sh ${pkgdir}/etc/profile.d/
}
