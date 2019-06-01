#Maintainer: Iru Cai <mytbk920423@gmail.com>

pkgname='libotr-ng-git'
_pkgname='libotr-ng'
pkgver=2783.b40e1410
pkgrel=1
pkgdesc='A new implementation of OTR with support for version 4.'
arch=('i686' 'x86_64')
url='https://github.com/otrv4/libotr-ng'
license=('LGPL')
depends=('glib2' 'libgoldilocks-git' 'libsodium' 'libotr' 'libgcrypt')
source=('git+https://github.com/otrv4/libotr-ng.git'
	nopedantic.patch)
sha256sums=('SKIP'
	5e4b09cced2c12e592caae20a9ee1723090cae9885ced69205947be4d9385b57)

prepare() {
	cd "${srcdir}/${_pkgname}"
	patch -p1 -i "${srcdir}/nopedantic.patch"
}

build() {
	cd "${srcdir}/${_pkgname}"

	autoreconf --install
	./configure --prefix=/usr --enable-debug=no
	make
}

package() {
	cd "${srcdir}/${_pkgname}"
	make DESTDIR="${pkgdir}" install
}

pkgver() {
	cd "${srcdir}/${_pkgname}"
	echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}
