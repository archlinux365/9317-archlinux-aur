# Maintainer: Blair Bonnett <blair dot bonnett @ gmail dot com>
# Contributor: richli <rich at dranek dot com>

pkgname=python-h5netcdf
pkgver=0.13.1
pkgrel=1
pkgdesc="Pythonic interface to netCDF4 via h5py"
arch=('any')
url="https://github.com/shoyer/h5netcdf"
license=('BSD')
depends=('python-h5py')
makedepends=('python-setuptools')
checkdepends=('python-netcdf4' 'python-pytest')

_pypi=h5netcdf
source=(
  "https://files.pythonhosted.org/packages/source/${_pypi::1}/$_pypi/$_pypi-$pkgver.tar.gz"
)
sha256sums=(
  'c90c1eb39798af5ac7c573bdcde60d984e3bf97bb2b588f1222528d0cdffcb62'
)

build() {
    cd "$_pypi-${pkgver}"
    python setup.py build
}

check() {
    cd "$_pypi-${pkgver}"
    PYTHONPATH="./build/lib" PYTHONDONTWRITEBYTECODE=1 pytest -v --disable-warnings
}

package() {
    cd "$_pypi-${pkgver}"
    python setup.py install --prefix=/usr --root="$pkgdir" --skip-build --optimize 1
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}

# vim: set et sw=4 ts=4 sts=4:
