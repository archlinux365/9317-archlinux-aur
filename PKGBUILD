# Maintainer: Alexander Phinikarides <alexisph _AT_ gmail _DOT_ com>

_pkgname=pyroute2
pkgname=python2-${_pkgname}
pkgver=0.5.3
pkgrel=2
pkgdesc="A pure Python netlink and Linux network configuration library. (Python2 version)"
arch=(any)
url="https://docs.pyroute2.org/"
license=('GPL2')
depends=('python2')
makedepends=('python2-setuptools')
options=(!emptydirs)
source=("https://pypi.io/packages/source/${_pkgname:0:1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=('79f7b4286be773c46914df0201dabaf92717a9c06e341e0c420603b2dd31c6bf')

check() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python2 setup.py check
}

package() {
  cd "${srcdir}/${_pkgname}-${pkgver}"
  python2 setup.py install --root="${pkgdir}/" --optimize=1

  install -v -m755 -d "${pkgdir}/usr/share/doc/${pkgname}"
  install -v -m644 README.md "${pkgdir}/usr/share/doc/${pkgname}/"
  cp -rf docs/html "${pkgdir}/usr/share/doc/${pkgname}/"
}

