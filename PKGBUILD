# Maintainer: Alex Zose <alexander[dot]zosimidis[at]gmail[dot]com>
pkgname=crudini
_branch=master
pkgver=0.7
pkgrel=1
pkgdesc="A utility for manipulating ini files"
url="http://www.pixelbeat.org/programs/crudini/"
arch=("any")
license=('GPL2')
depends=('python2-iniparse')
source=("https://github.com/pixelb/crudini/archive/master.zip")
sha512sums=("7806f6427f2b450622b4efeda78b88c745f9c3d029bf32618362f9cb6513ebcf15c18e047b4af7589df645a5abd7210f5e31e49512cd2a3e9678c3b176581b8c")
prepare() {
    sed -i 's/python/python2/' ${srcdir}/${pkgname}\-${_branch}/crudini
}
package() {
    mkdir -p ${pkgdir}/usr/bin
    install -m755 ${srcdir}/${pkgname}\-${_branch}/crudini ${pkgdir}/usr/bin
}
