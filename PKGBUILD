# Maintainer: Ralf Mueller <stark.dreamdetective@gmail.com>
# Contributor: Ralf Mueller <stark.dreamdetective@gmail.com>
pkgname=cdo
pkgver=1.9.10
fileID=24638
pkgrel=1
pkgdesc="Command line tool manipulate and analyse Climate model Data. Supported data formats are GRIB, netCDF, SERVICE, EXTRA and IEG. There are more than 400 operators available."
url="https://code.zmaw.de/projects/cdo"
license=('GPLv2')
depends=('netcdf' 'hdf5' 'proj' 'libaec' 'eccodes' 'udunits' 'fftw' 'curl' 'jasper' 'magics++')
makedepends=('netcdf' 'hdf5' 'proj' 'libaec' 'eccodes' 'udunits' 'fftw' 'curl' 'jasper' 'magics++')
provides=()
conflicts=()
replaces=()
arch=(i686 x86_64)
backup=()
install=
source=(https://code.zmaw.de/attachments/download/${fileID}/${pkgname}-${pkgver}.tar.gz)
sha256sums=('cc39c89bbb481d7b3945a06c56a8492047235f46ac363c4f0d980fccdde6677e')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  ./configure --prefix=/usr \
    --with-netcdf=/usr \
    --with-udunits2=/usr \
    --with-hdf5=/usr \
    --with-szlib=/usr \
    --with-proj=/usr \
    --with-fftw3 \
    --with-curl=/usr \
    --with-eccodes=/usr \
    --with-magics=/usr \
    --with-libxml2=/usr \
    CFLAGS="-g -O3 -Wall -fopenmp -march=native -ftree-vectorize -mavx2" \
    CXXFLAGS="-g -O3 -Wall -fopenmp -march=native  -ftree-vectorize -mavx2"

  make -j12 || return
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  make DESTDIR="$pkgdir/" install

  install -D -m644 COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"

  rm -f $pkgdir/bin/cdotest
}
