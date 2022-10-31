# Maintainer : Kitestramuort <kitestramuort@autistici.org>

pkgname=harp
pkgver=1.16
pkgrel=1
pkgdesc="Data harmonization toolset for scientific earth observation data"
arch=('x86_64')
url="https://www.stcorp.nl"
license=('BSD')
depends=('python' 'hdf4' 'hdf5' 'r' 'stc-coda')
provides=('harp')
source=("https://github.com/stcorp/harp/releases/download/${pkgver}/${pkgname}-${pkgver}.tar.gz")
md5sums=('b4fee80a172bb2221058156eb1c28a7e')

build() {
	cd ${pkgname}-${pkgver}
	CFLAGS=-I/usr/include/R ./configure --prefix=/usr --libdir=/usr/lib --enable-R --enable-python --with-hdf5 --with-hdf4=/opt/hdf4
	make
}

package() {
	cd $pkgname-$pkgver
	make DESTDIR=${pkgdir} install
    	install -Dm 644 "COPYING" "${pkgdir}/usr/share/licenses/${pkgname}"
}

