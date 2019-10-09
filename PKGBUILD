# Maintainer: David Phillips (aka phillid) <dbphillipsnz at _remove this part if you want_ gmail dot com>

pkgname=paramano
pkgver=0.71
pkgrel=1
pkgdesc="Docking battery monitor and CPU governer controller (fork of trayfreq)"
arch=('i686' 'x86_64' 'armv6h')
url="https://git.nah.nz/${pkgname}/"
license=('GPL')
depends=('gtk3' 'sudo')
source=("https://git.nah.nz/${pkgname}/snapshot/${pkgname}-${pkgver}.tar.xz"
        "0001-Add-missing-harfbuzz-include-dir-to-search-path.patch")
sha512sums=('03b885a35429d04b6ce9212b7fe95e7f7e2d7e6fdbae7ec08f47bed1ff94f2d6e596f462d511ed5ae8f29f82c272b4614701661f9ca1613d33fb14e97b8db2c6'
            '44f10d13dc71ef9022311e3ae729d02749012961eb653a52d652fd4e8b4e43497ffee7131a626bd5e44258087183f2b7419d5881859d2de94a22250457c2d5a4')
backup=('etc/paramano.conf')

prepare() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	patch -Np1 -i "${srcdir}/0001-Add-missing-harfbuzz-include-dir-to-search-path.patch"
}

build() {
	make -C "${srcdir}/${pkgname}-${pkgver}" all
}

package() {
	make -C "${srcdir}/${pkgname}-${pkgver}" install DESTDIR="${pkgdir}"
}
