pkgname=csvs-to-sqlite
_pkgname=csvs_to_sqlite
pkgver=1.2
pkgrel=1
pkgdesc="An open source multi-tool for exploring and publishing data"
arch=("any")
url="https://github.com/simonw/csvs-to-sqlite"
license=("Apache")
depends=("python-click" "python-dateparser" "python-pandas" "python-py-lru-cache" "python-six")
makedepends=("python-setuptools")
conflicts=("csvs-to-sqlite")
source=("https://pypi.io/packages/source/c/${pkgname}/${_pkgname}-${pkgver}.tar.gz")
sha256sums=("0d47d2a006ad58204bcb40ea511e59b62f1aacb6546bcd4f9096253910e053cd")

build() {
    cd "${_pkgname}-${pkgver}"
    sed -i 's/click~=7.0/click>=7.0/' setup.py
    python setup.py build
}

package() {
    cd "${_pkgname}-${pkgver}"
    python setup.py install --root=${pkgdir} --optimize=1
}
