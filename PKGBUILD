# Contributor: Alfredo Ramos <alfredo dot ramos at yandex dot com>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

_pkgname=juffed
pkgname=${_pkgname}-qt5-git
pkgver=0.10.94.g058ed92
pkgrel=2
pkgdesc='A lightweight cross-platform text editor. Development version.'
arch=('i686' 'x86_64')
url='https://github.com/gdelmondo/juffed'
license=('GPL2')
depends=('enca' 'qscintilla-qt5')
makedepends=('git' 'cmake' 'qt5-tools')
provides=("${_pkgname}=${pkgver}" "${_pkgname}-plugins=${pkgver}")
conflicts=("${_pkgname}" "${_pkgname}-git")

source=(
	"git+https://github.com/gdelmondo/${_pkgname}.git" 'fix_qscintilla.patch' "fix_qscintilla_lexer.patch::https://github.com/Mezomish/${_pkgname}/commit/5315aee51213a68f946b1c387d513bc2a5e67560.patch" 'qt511.patch'
)
sha512sums=('SKIP'
            'c2515c0f25a8a282af1242ecd5e3f98336e2226a935d56a826e724072cf4ae9961b34b6853a2b7204bff9428e8d7ae52fd158eaf438ee163e27953a5935d5293'
            '213548d50c0eecf4bb10b584c8715a8b72c79b7b39b40ad999eb6d52e4c857eead104e46987aec87c984de124e24319b4224094715a7a75e8fe2b8646a539865'
            '09e458baac69e79bb984b4f8f5ac3267f99029c4db408826239c58064b4afd8e3d1c0853ea7f00eeb52e7441b583fe8886a94e9c3d681207857b7abac524191a')

pkgver() {
	# Updating package version
	cd ${_pkgname}
	git describe --long --tags 2>/dev/null | sed -r 's/^juffed-//;s/-/./g'
}

prepare() {
	# Fix QScintilla
	cd ${_pkgname}
	patch -Np1 < "$srcdir"/fix_qscintilla.patch
	# Fix QScintilla lexer
	# https://github.com/Mezomish/juffed/pull/102
	patch -Np1 < "$srcdir"/fix_qscintilla_lexer.patch
	patch -Np1 < "$srcdir"/qt511.patch
}

build() {
  # Building package
  	[[  -d "$srcdir"/build ]] || mkdir -p "$srcdir"/build
	cd "$srcdir"/build
	cmake ../${_pkgname} \
		-DCMAKE_INSTALL_PREFIX:PATH=/usr \
		-DLIB_INSTALL_DIR:PATH=/usr/lib \
		-DUSE_ENCA:BOOL=ON
	make
}

package() {
	# Installing package
	cd "$srcdir"/build
	make DESTDIR="$pkgdir" install
}
