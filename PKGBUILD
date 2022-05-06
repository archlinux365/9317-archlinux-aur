# Maintainer: Juliette Monsel <j_4321 at protonmail dot com>
# based on the python2-launchpadlib PKGBUILD by ValHue <vhuelamo at gmail dot com>

_pkgname="launchpadlib"
pkgname=("python-launchpadlib")
pkgver="1.10.16"
pkgrel="1"
pkgdesc="A free Python 3 library for scripting Launchpad through its web services interface."
arch=('any')
url="https://launchpad.net/launchpadlib"
license=('LGPL3')
makedepends=('python-setuptools')
depends=('python-lazr-uri' 'python-lazr-restfulclient>=0.9.19' 'python-wadllib'
         'python-keyring' 'python-httplib2' 'python-simplejson')
optdepends=('python-setuptools' 'python-testresources')
source=("${pkgname}-${pkgver}.tar.gz::https://launchpad.net/$_pkgname/trunk/$pkgver/+download/$_pkgname-$pkgver.tar.gz"
        "${pkgname}-${pkgver}.tar.gz.asc::https://launchpad.net/$_pkgname/trunk/$pkgver/+download/$_pkgname-$pkgver.tar.gz.asc")
sha256sums=('0df4b13936f988afd0ee485f40fa6922eab783b48c38ca0108cb73c8788fca80'
            'SKIP')
validpgpkeys=('AC0A4FF12611B6FCCF01C111393587D97D86500B')

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py build
}

package_python-launchpadlib() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
