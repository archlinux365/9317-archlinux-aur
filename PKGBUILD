# Maintainer : Keshav Amburay <(the ddoott ridikulus ddoott rat) (aatt) (gemmaeiil) (ddoott) (ccoomm)>
# Contributor : Mark Coolen <mark ddoott coolen aatt gmail ddoott ccoomm nniiccee!>
# Contributor : Florian Freund <florian 88 freund aatt gmail ddoott ccoomm>

_pkgname="xournalpp"
pkgname="${_pkgname}-git"

pkgver=1.0.5.23.g8bc03fff
pkgrel=1
pkgdesc="C++ re-write of tablet notetaking app Xournal"
arch=('i686' 'x86_64')
url="https://github.com/xournalpp/xournalpp"
license=('GPL-2.0')
makedepends=('git' 'cmake' 'gettext')
depends=('texlive-core' 'gtk3' 'glib2' 'desktop-file-utils' 'poppler-glib' 'libxml2')
optdepends=('curl: recording support'
            'vlc: recording support'
            'alsa-utils: recording support')
conflicts=('xournalpp')
install="xournalpp.install"
source=("${_pkgname}::git+https://github.com/xournalpp/xournalpp.git")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}/"
	git describe --tags | sed -e 's|v||g' -e 's|glib.||g' -e 's|-|.|g'
}

prepare() {
	cd "${srcdir}/${_pkgname}/"

	test -e "${srcdir}/${_pkgname}/build" || mkdir -p "${srcdir}/${_pkgname}/build"
	cd "${srcdir}/${_pkgname}/build"

	cmake -DENABLE_OS="OFF" -DENABLE_MATHTEX="ON" -DCMAKE_INSTALL_PREFIX="/usr/"  ..
}

build() {
	cd "${srcdir}/${_pkgname}/build"
	make
}

package() {
	cd "${srcdir}/${_pkgname}/build"

	# sed 's|/usr/local|/usr|g' -i "${srcdir}/${_pkgname}/build/cmake_install.cmake" || true
	make DESTDIR="${pkgdir}/" install
}
