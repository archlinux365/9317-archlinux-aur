# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Pablo Vilas <pablovilas89 at gmail dot com>
# Contributor: Testuser_01 <arch@nico-siebler.de>

pkgname=webstorm
_pkgname=WebStorm
pkgver=2016.1
_pkgver=145.258.3
pkgrel=3
pkgdesc="JavaScript IDE and HTML editor."
arch=('x86_64' 'i686')
options=('!strip')
url="http://www.jetbrains.com/${pkgname}/"
license=('Commercial')
optdepends=('java-environment>=6: use system java'
            'java-runtime-common: use system java')
source=(https://download.jetbrains.com/webstorm/${_pkgname}-${pkgver}.tar.gz
        jetbrains-webstorm.desktop
        webstorm.sh)
sha256sums=('0e14107d7527a6d204e42e39b436f3f8fe05a787c1cf63b13c2f286c85d46787'
            'df1155779ec87c1f9e3237a2b79a0bea1242f4f2661d3d0f5f152ef24af93166'
            '0b55a4b9bb9269960390ab39c2c41b97f2f09b793c94f5ee9f9999372d4600d9')

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
  install -D -m 644 "${pkgdir}/opt/${pkgname}/bin/${pkgname}.svg" "${pkgdir}/usr/share/pixmaps/${pkgname}.svg"
}
