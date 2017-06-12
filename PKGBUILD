# Maintainer: Rich Li <rich@dranek.com>
pkgname='python2-xarray'
pkgver=0.9.6
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
md5sums=('980aa689524338de077d8f889e901327')
sha1sums=('f49c7e9f5c2cf42a3c3427815c0bd08dcaefa135')
sha256sums=('4b68f2fa5158123f87b158015374e035471dbe00d10e445cb43a5e4ab11045e1')

build() {
  cd "$srcdir/xarray-$pkgver"
  python2 setup.py build
}

# NB: the test suite currently fails due to a recent change in Numpy (from 1.11
# to 1.12), which in turn affected bottleneck. Once bottleneck releases the
# next version (current is 1.2.0), then it should be fixed. See
# https://github.com/pydata/xarray/issues/1208.
# check() {
#   cd "$srcdir/xarray-$pkgver"
#   pytest2 xarray
# }
 
package() {
  cd "$srcdir/xarray-$pkgver"
  python2 setup.py install --skip-build --prefix=/usr --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
