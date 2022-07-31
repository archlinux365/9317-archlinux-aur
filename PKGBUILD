# Contributor: Jose Riha <jose1711 gmail com>
# Maintainer: Gileri <e + aur2419 at linuxw dot info>

pkgname=mapillary_tools-git
_pkgname=mapillary_tools
pkgver=r1442.92624cc
pkgrel=1
pkgdesc="Library for processing and uploading geotagged images to Mapillary"
url="https://github.com/mapillary/mapillary_tools"
depends=(
  'python-construct'
  'python-dateutil'
  'python-exifread'
  'python-gpxpy'
  'python-piexif'
  'python-pillow'
  'python-pynmea2'
  'python-pytz'
  'python-requests'
  'python-tqdm'
  'python-yaml'
)
provides=(mapillary_tools)
license=('BSD')
arch=('any')
source=("${pkgname}"::'git+https://github.com/mapillary/mapillary_tools.git')
md5sums=('SKIP')

build() {
  cd $srcdir/${pkgname}
  python setup.py build
}

pkgver() {
  cd "$srcdir/${pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd $srcdir/${pkgname}
  python setup.py install --root="$pkgdir" --optimize=1
}
