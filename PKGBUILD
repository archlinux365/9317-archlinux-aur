# Maintainer: Joan Figueras <ffigue at gmail dot com>
# Contributor: Black_Codec <orso.f.regna@gmail.com>

pkgname=guacamole-auth-jdbc-bin
pkgver=1.4.0
pkgrel=1
pkgdesc="Apache Guacamole is a clientless remote desktop gateway. Database authentication extension for jdbc."
arch=('any')
url="https://guacamole.apache.org/"
license=('GPL3')
depends=('guacamole-client')
source=("https://archive.apache.org/dist/guacamole/${pkgver}/binary/guacamole-auth-jdbc-${pkgver}.tar.gz")

md5sums=('c220f37d41322aee21e477f4e3b43afa')

package() {
  cd "${srcdir}/guacamole-auth-jdbc-${pkgver}"
  mkdir -p "${pkgdir}"/etc/guacamole/extensions
  mkdir -m 775 -p "${pkgdir}"/usr/share/guacamole
  for _s in mysql postgresql sqlserver ; do
    mkdir -m 775 -p "${pkgdir}"/usr/share/guacamole/sql/${_s}
    install -m 644 -D ${_s}/guacamole-auth-jdbc-${_s}-${pkgver}.jar "${pkgdir}"/etc/guacamole/extensions/
    cp -r ${_s}/schema "${pkgdir}"/usr/share/guacamole/sql/${_s}/
  done
}
