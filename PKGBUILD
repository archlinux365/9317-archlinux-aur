# Maintainer: Alfredo Ramos <alfredo dot ramos at yandex dot com>
# Contributor: Christian Rebischke <Chris.Rebischke@archlinux.org>
# Contributor: Giovanni Scafora <giovanni@archlinux.org>
# Contributor: lucke <lucke at o2 dot pl>
# Contributor:  dacoit <dacoit at tuta.io>
# Contributor: Daniel Wallace <danielwallace at gtmanfred dot com>
# Contributor: Dmitry Korzhevin <dkorzhevin AT gmail DOT com>
# Contributor: Mark Foxwell <fastfret79@archlinux.org.uk>
# Contributor: tigrmesh <tigrmesh at aol dot com>
# Contributor: Tim Zebulla <amon at faumrahrer dot de>

_pkgname=weechat
pkgname=${_pkgname}-git
pkgver=2.6.1.g9cb685767
pkgrel=1
pkgdesc='Fast, light and extensible IRC client (curses UI). Development version.'
arch=('i686' 'x86_64' 'armv7h' 'aarch64')
url='http://www.weechat.org/'
license=('GPL')

depends=('gnutls' 'curl' 'libgcrypt' 'hicolor-icon-theme')
makedepends=(
	'git' 'asciidoc' 'source-highlight' 'cmake' 'pkg-config'
	'perl' 'python' 'lua' 'tcl' 'ruby' 'aspell' 'guile2.0' 'asciidoctor'
)
optdepends=('perl' 'python' 'lua' 'tcl' 'ruby' 'aspell' 'guile2.0')
provides=("${_pkgname}=${pkgver}")
conflicts=("${_pkgname}")

source=("git+https://github.com/${_pkgname}/${_pkgname}.git")
sha512sums=('SKIP')

pkgver() {
	cd "${srcdir}"/${_pkgname}
	git describe --long --tags 2>/dev/null | sed -r 's/^v//;s/-/./g'
}

prepare() {
	mkdir -p "${srcdir}"/build
}

build() {
	cd "${srcdir}"/build
	cmake -Wno-dev ../${_pkgname} \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DENABLE_MAN=ON \
		-DENABLE_DOC=ON# \
		#-DENABLE_ASPELL=OFF \
		#-DENABLE_EXEC=OFF \
		#-DENABLE_FIFO=OFF \
		#-DENABLE_GUILE=OFF \
		#-DENABLE_JAVASCRIPT=OFF \
		#-DENABLE_LUA=OFF \
		#-DENABLE_PERL=OFF \
		#-DENABLE_PHP=OFF \
		#-DENABLE_PYTHON=OFF \
		#-DENABLE_RUBY=OFF \
		#-DENABLE_TCL=OFF \
		#-DENABLE_XFER=OFF
	make
}

package() {
	cd "${srcdir}"/build
	make DESTDIR="${pkgdir}" install
}
