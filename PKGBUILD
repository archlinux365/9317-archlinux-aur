# Maintainer: Jose Riha <jose1711 gmail com>
# Comaintainer: Jujudusud <jujudusud gmail com>

pkgname=jamulus-headless
_pkgname=Jamulus
pkgver=3.8.1
pkgrel=1
pkgdesc="Internet jam session software (headless server)"
arch=('x86_64')
url='https://jamulus.io/'
license=('GPL2')
depends=('glibc' 'gcc-libs' 'qt5-base' 'opus-git')
provides=('jamulus')
source=("jamulus-${pkgver}.tar.gz::https://github.com/corrados/jamulus/archive/r${pkgver//./_}.tar.gz"
        "jamulus.service")

build() {
  cd "${srcdir}/jamulus-r${pkgver//./_}"
  qmake "CONFIG+=nosound headless opus_shared_lib" Jamulus.pro
  make clean
  make
}

package() {
  cd "${srcdir}/jamulus-r${pkgver//./_}"
  install -Dm755 Jamulus "${pkgdir}/usr/bin/Jamulus-headless"
  install -vDm 644 {ChangeLog,README.md} -t "${pkgdir}/usr/share/doc/${pkgname}"
  install -Dm644 $srcdir/jamulus.service $pkgdir/usr/lib/systemd/system/jamulus.service
}

sha1sums=('cdf9edb1b551917c0e14201277abc64e7e263c0b'
          'cbe82818b40eba6dc3ee88f98af8ae16ff44137e')
