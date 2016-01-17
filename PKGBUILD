# Maintainer: hillbicks <hillbicks at doe dot ath dot cx>

pkgname=mopidy-mopify
_pypiname=Mopidy-Mopify
pkgver=1.5.11
pkgrel=1
pkgdesc='A web client that uses external web services to provide additional features and a more complete music experience.'
arch=('any')
url="https://github.com/dirkgroenen/mopidy-mopify"
license=('APACHE')
depends=('python2' 'mopidy>=0.19' 'mopidy-spotify' 'python2-configobj')
makedepends=('python2' 'python2-setuptools')
source=("https://pypi.python.org/packages/source/M/${_pypiname}/${_pypiname}-${pkgver}.tar.gz")
md5sums=('9df22514cc300a9a86f19d66ec3d2d5f')

package() {
  cd "${srcdir}/${_pypiname}-${pkgver}"
  python2 setup.py install --root="${pkgdir}/" --optimize=1

  install -Dm644 LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

# vim:set ts=2 sw=2 et:

