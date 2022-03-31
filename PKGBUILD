# Maintainer: dkasak <dkasak AT termina DOT org DOT uk>
# Comaintainer: tux268 <tux268 AT tux268 DOT xyz>
# Contributor: nblock <nblock [/at\] archlinux DOT us>
# Contributor: DigitalPathogen <aur@digitalpathogen.co.uk>
# Contributor: daronin
# Contributor: kageurufu

pkgname=burpsuite
pkgver=2022.3.1
pkgrel=1
pkgdesc="An integrated platform for performing security testing of web applications (free edition)"
url="https://portswigger.net/burp/"
depends=('java-runtime>=9')
arch=('any')
license=('custom')
noextract=("${pkgname}-${pkgver}.jar")
source=("${pkgname}-${pkgver}.jar::https://portswigger.net/burp/releases/download?product=community&version=${pkgver}&type=Jar"
        LICENSE
        burpsuite.desktop
        icon64.png)
install=burpsuite.install
sha256sums=('cc2dc8de7b56e67678d24ed6859803a8ef351e9ca9d5d0cd0244a0d587809968'
            'a1146672de7084a1cddc5b7dab4d18b3530c194bd6e45a2b0ac04b579751ca30'
            '950c61d7ce1257c21a4152abebb8da320d0206ceb59247d6c912903d1ed39fc8'
            'd31232a7dbdab9d5723f12aa25c52d13fd46ef2e8837a85fb9a08c3a7f151541')

package() {
  mkdir -p ${pkgdir}/usr/bin
  mkdir -p ${pkgdir}/usr/share/{applications,pixmaps,${pkgname},licenses/${pkgname}}

  cd ${srcdir}
  install -m644 ${pkgname}-${pkgver}.jar ${pkgdir}/usr/share/${pkgname}/${pkgname}.jar
  install -m644 LICENSE ${pkgdir}/usr/share/licenses/${pkgname}/
  install -m644 burpsuite.desktop ${pkgdir}/usr/share/applications/
  install -m644 icon64.png ${pkgdir}/usr/share/pixmaps/burpsuite.png

  # Create startup file for burpsuite.
  echo "#!/bin/sh" > ${pkgdir}/usr/bin/${pkgname}
  echo "exec \$JAVA_HOME/bin/java --illegal-access=permit -jar /usr/share/burpsuite/burpsuite.jar \$@" >> ${pkgdir}/usr/bin/${pkgname}
  chmod 755 ${pkgdir}/usr/bin/${pkgname}
}

# vim:set ts=2 sw=2 et:
