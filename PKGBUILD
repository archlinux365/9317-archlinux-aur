# Maintainer: Pete Alexandrou <pete@ozmartians.com>
pkgname=tvlinker
pkgver=4.0.0
pkgrel=7
pkgdesc="TV show link scraper + downloader for Scene-RLS.com w/ debrid link unrestricting and support for a number of download managers across all platforms"
arch=('any')
license=('GPL3')
url="http://tvlinker.ozmartians.com"
source=(https://github.com/ozmartian/${pkgname}/archive/${pkgver}.tar.gz)
depends=('python-pyqt5' 'python-beautifulsoup4' 'python-lxml' 'python-requests')
makedepends=('python-setuptools')
optdepends=('python-pysocks')
md5sums=('0c37dd456444389087e8eefe1157f650')

prepare() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    sed -i "s/pypi/arch/" "${pkgname}/__init__.py"
}

build() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py build
}

package() {
    cd "${srcdir}/${pkgname}-${pkgver}"
    python3 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
