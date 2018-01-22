## Maintainer: Jameson Pugh <imntreal@gmail.com>
## Contributor: Joshua Snyder <madsciencecoder@gmail.com>
## Contributor: Thaodan <theodorstormgrade@gmail.com>

pkgname='qt-virt-manager'
url='https://github.com/F1ash/qt-virt-manager'
makedepends=('cmake')
arch=('i686' 'x86_64')
license=('GPL2')
pkgrel=1
pkgver=0.48.79
source=("https://github.com/F1ash/qt-virt-manager/archive/${pkgver}.tar.gz")
sha256sums=('f4299f40feed7078133dd1a6bab159407c2e92240d7034d96978b645056be3c9')
depends+=('qt5-base' 'qt5-svg' 'qtermwidget' 'spice-protocol' 'spice-glib' 'libvirt' 'scrub' 'qt5-multimedia' 'hicolor-icon-theme' 'x11-ssh-askpass' 'libvncserver')
pkgdesc="Qt5 Virtual Machine Manager provides a graphical tool for administering virtual machines for QEMU/KVM, Xen, and LXC and other Virtual Entities.
Uses libvirt as the backend management API."
conflicts=('virt-manager-qt5')
replaces=('virt-manager-qt5')

prepare() {
	mkdir -p "${srcdir}/${pkgname}-${pkgver}/build"
}

build() {
	cd "${srcdir}/${pkgname}-${pkgver}/build"
	export CXXFLAGS="$CXXFLAGS -std=c++11"
	
	cmake -DBUILD_QT_VERSION=5 \
				-DCMAKE_INSTALL_PREFIX=/usr \
				-DCMAKE_BUILD_TYPE=Release \
				..
	make
}

package() {
	cd "${srcdir}/${pkgname}-${pkgver}/build"
	make install DESTDIR=${pkgdir}
}

# vim: set ts=2 sw=2 ft=sh noet:
