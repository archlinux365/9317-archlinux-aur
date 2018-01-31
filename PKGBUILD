# Maintainer: Fabio Loli <loli_fabio@protonmail.com>
# https://github.com/FabioLolix

pkgname=phockup
pkgver=1.4.1
pkgrel=1
pkgdesc="Media sorting tool to organize photos and videos from your camera in folders by year, month and day."
arch=('any')
url="https://github.com/ivandokov/phockup"
license=(MIT)
depends=('python' 'perl-image-exiftool')
provides=('phockup')
conflicts=('phockup' 'phockup-git')
source=("https://github.com/ivandokov/${pkgname}/archive/${pkgver}.tar.gz")
md5sums=('0660929e05fb14955a6e9674464add2e')

package() {

  install -d ${pkgdir}/usr/share/${pkgname}
  cp ${srcdir}/${pkgname}-${pkgver}/phockup.py ${pkgdir}/usr/share/${pkgname}/phockup.py

  install -d ${pkgdir}/usr/bin
  ln -s /usr/share/${pkgname}/phockup.py ${pkgdir}/usr/bin/phockup

  install -D ${srcdir}/${pkgname}-${pkgver}/license ${pkgdir}/usr/share/licenses/${pkgname}/MIT
}

