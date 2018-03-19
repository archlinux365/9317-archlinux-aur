# Contributor: Vaino Helminen <vah78 at yahoo dot com>
# Contributor: Sean Bolton musound at jps dot net
# Contributor: Jochen Immendörfer <jochen dot immendoerfer at gmail dot com>
pkgname=hexter
pkgver=1.1.0
pkgrel=1
pkgdesc="A DSSI software synthesizer that models the sound generation of a Yamaha DX7"
arch=('i686' 'x86_64')
url="http://smbolton.com/hexter.html"
license=('GPL')
depends=('gtk2' 'dssi')
makedepends=('ladspa')
options=('!libtool')
source=(https://github.com/smbolton/hexter/releases/download/version_${pkgver}/${pkgname}-${pkgver}.tar.bz2
        hexter)
md5sums=('91c31b1c6c6c054b21b0847256b33fd1'
         'ce72d4f996c17ffd72eb02af76c4dd9b')

build() {
  cd ${srcdir}/${pkgname}-${pkgver}

  ./configure --prefix=/usr
  make || return 1
}

package() {
  cd ${srcdir}/${pkgname}-${pkgver}

  make DESTDIR=${pkgdir} install || return 1
  install -D -m755 ${srcdir}/hexter ${pkgdir}/usr/bin/hexter
}
