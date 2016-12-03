# Maintainer: Kochetkov Andrey <gornet@gmail.com>
# Contributor: Fabian Schoelzel <myfirstname.mylastname@googlemail.com>
# Contributor: Simon Perry <aur [at] sanxion [dot] net>

pkgname=pyfa
pkgver=1.25.0
pkgrel=1
everelname="ascension"
everelver=1.9
pkgdesc="EVE Online Fitting Assistant"
arch=('any')
url="http://github.com/DarkFenX/Pyfa"
license=('GPL')
makedepends=('unzip')
depends=('python2' 'wxpython' 'python2-sqlalchemy' 'python2-dateutil' 'python2-requests' 'python2-urllib3')
optdepends=('python2-matplotlib: for graph plotting'
        'python2-numpy: for graph plotting')
source=(https://github.com/DarkFenX/Pyfa/releases/download/v$pkgver/pyfa-$pkgver-$everelname-$everelver-linux.zip pyfa.desktop pyfa-start.sh)

package() {
  cd "${srcdir}"/pyfa || return 1

  install -d "${pkgdir}"/usr/bin || return 1
  install -d "${pkgdir}"/usr/share/{applications,pixmaps,pyfa} || return 1

  cp -R "${srcdir}"/pyfa/* "${pkgdir}"/usr/share/pyfa || return 1
  
  unzip -p "${srcdir}"/pyfa/imgs.zip gui/pyfa64.png > "${pkgdir}"/usr/share/pixmaps/pyfa.png || return 1
  install -m 644 "${srcdir}"/pyfa.desktop "${pkgdir}"/usr/share/applications/pyfa.desktop || return 1
  install "${srcdir}"/pyfa-start.sh "${pkgdir}"/usr/bin/pyfa || return 1
}

md5sums=('2c0017fec4ff42dc5968acd9a5a1262a'
         'ba7d4e6618b48eff1e1452674e1846b0'
         '9937192cfce7f5e16e9cf26086f1899c')
