# Maintainer: afontenot <adam.m.fontenot@gmail.com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Allan McRae <allan@archlinux.org>
# Contributor: Simone Sclavi 'Ito' <darkhado@gmail.com>
# Contributor: N30N <archlinux@alunamation.com>

pkgname="mozjpeg"
pkgver=4.0.0
pkgrel=1
pkgdesc="JPEG image codec with accelerated baseline decoding and superior encoding"
url="https://github.com/mozilla/mozjpeg"
license=("BSD")
arch=("i686" "x86_64" "armv7h")
depends=("glibc")
makedepends=("nasm")
source=("$url/archive/v${pkgver}.tar.gz")
sha1sums=('e2bc33ab65d18d5b26baf842b1ca128fea30387a')

provides=("libjpeg=8.2.2" "turbojpeg" "libjpeg-turbo")
conflicts=("libjpeg" "mozjpeg-git" "turbojpeg" "libjpeg-turbo")

build() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	cmake -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_INSTALL_LIBDIR=/usr/lib -DENABLE_STATIC=FALSE -DPNG_SUPPORTED=TRUE -DWITH_JPEG8=TRUE .
	make
}

# much too slow for default, can be enabled if desired
#check() {
#	cd "${srcdir}/${pkgname}-${pkgver}"
#	make test
#}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}"
	make \
		DESTDIR="${pkgdir}" \
		docdir="/usr/share/doc/${pkgname}" \
		exampledir="/usr/share/doc/${pkgname}" \
		install

	install -D LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -m644 jpegint.h "${pkgdir}/usr/include"
}
