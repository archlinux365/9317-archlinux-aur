# Maintainer: Peter Mattern <pmattern@arcor.de>
# Contributor: Jerome Leclanche <jerome@leclan.ch>

_pkgname=lxqt-openssh-askpass
pkgname=${_pkgname}-git
pkgver=0.13.0.37.gadfbaa6
pkgrel=1
pkgdesc='LXQt openssh password prompt'
arch=('i686' 'x86_64')
url='https://github.com/lxde/lxqt-openssh-askpass'
license=('LGPL')
depends=('liblxqt-git')
makedepends=('git' 'cmake' 'qt5-tools' 'lxqt-build-tools-git')
provides=("${_pkgname}")
conflicts=("${_pkgname}")
source=("git+https://github.com/lxde/${_pkgname}.git")
sha256sums=("SKIP")

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git describe --always | sed "s/-/./g"
}

build() {
	mkdir -p build
	cd build
	cmake "${srcdir}/${_pkgname}" \
		-DCMAKE_INSTALL_PREFIX=/usr
	make
}

package() {
	cd build
	make DESTDIR="${pkgdir}" install
}
