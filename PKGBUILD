# Maintainer: Behnam Momeni <sbmomeni [at the] gmail [dot] com>
# Contributor: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Rémy Oudompheng <oudomphe@clipper.ens.fr>

pkgname=lib32-libspiro
_pkgbase=libspiro
pkgver=20220722
pkgrel=1
pkgdesc='Simplifies the drawing of beautiful curves (32-bit)'
url="https://github.com/fontforge/libspiro"
license=('GPL')
arch=('x86_64')
depends=('libspiro')
source=("https://github.com/fontforge/${_pkgbase}/archive/${pkgver}.tar.gz")
sha256sums=('22409086ac07b482267c5328acde1956ca84cee8b4fa6c386f89e7014ea331da')

prepare() {
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  export CFLAGS="-m32"
  export CXXFLAGS="-m32"

	cd "${srcdir}/${_pkgbase}-${pkgver}"
	autoreconf -i
	automake --foreign -Wall
}

build() {
  export PKG_CONFIG_PATH="/usr/lib32/pkgconfig"
  export CFLAGS="-m32"
  export CXXFLAGS="-m32"

	cd "${srcdir}/${_pkgbase}-${pkgver}"
	export LDFLAGS=
	./configure --prefix=/usr --libdir=/usr/lib32
	make
}

package() {
	cd "${srcdir}/${_pkgbase}-${pkgver}"
	make DESTDIR="${pkgdir}" install
	install -Dm644 libspiro.pc "${pkgdir}/usr/lib32/pkgconfig/libspiro.pc"
  rm -r "${pkgdir}/usr/"{share,include}
}

