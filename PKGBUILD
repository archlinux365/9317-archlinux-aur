# Maintainer: Rich Li <rich@dranek.com>
pkgname='python2-xarray'
pkgver=0.10.2
pkgrel=1
pkgdesc="N-D labeled arrays and datasets in Python"
url="http://xarray.pydata.org"
arch=('any')
license=('Apache')
makedepends=('python2-setuptools')
depends=('python2-numpy' 'python2-pandas')
optdepends=('python2-netcdf4: NetCDF4 support'
            'python2-bottleneck: Faster NaN operations'
            'python2-pynio: GRIB and other file format support'
            'python2-cyordereddict: Speed up most internal operations'
            'python2-scipy: OPeNDAP support' 
            'python2-matplotlib: Plotting support')
            # 'python2-dask: Enable out-of-core parallel computation') # (doesn't exist in AUR)
checkdepends=('python2-pytest')
replaces=('python2-xray')
#source=(https://pypi.python.org/packages/source/x/xarray/xarray-"$pkgver".tar.gz)
# I'm using the Github source instead of the PyPI source since the Github source includes the data files used for testing
source=("$pkgname-$pkgver.tar.gz::https://github.com/pydata/xarray/archive/v$pkgver.tar.gz")
md5sums=('a0dac4e1dcb65909b50a19ccc3499ce5')
sha1sums=('95bce2cff07cf2501cf7759d7632330d4bdf1b30')
sha256sums=('61a1e08b64b5dce6c115eb53a5b14eee9844d757775c52f9e100fd8c00ff8f54')

build() {
  cd "$srcdir/xarray-$pkgver"
  python2 setup.py build
}

# NB: the default test suite seems to require dask being installed
# check() {
#   cd "$srcdir/xarray-$pkgver"
#   pytest2 xarray
# }
 
package() {
  cd "$srcdir/xarray-$pkgver"
  python2 setup.py install --skip-build --prefix=/usr --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
