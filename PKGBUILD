# Upstream Project Author: Hodong Kim <https://gitlab.com/hodong>
# PKGBUILD Author: Hodong Kim <https://gitlab.com/hodong>
# PKGBUILD Maintainer: Bumsik Kim <k.bumsik@gmail.com>

#
# PKGBUILD
# This file is part of Nimf.
#
# Unlike other files in the Nimf project,
# this PKGBUILD file is in the public domain.

pkgname=nimf
pkgver=2019.06.07	# This strictly follows AC_INIT field in configure.ac
pkgrel=1
pkgdesc="Nimf is an input method framework."
arch=('any')
url="https://gitlab.com/nimf-i18n/nimf"
license=('LGPL3')

# Reference: https://gitlab.com/nimf-i18n/nimf/blob/master/archlinux/PKGBUILD
makedepends=('binutils' 'autoconf' 'automake' 'gcc' 'make' 'glib2' 'intltool'
             'gtk3' 'gtk2' 'qt4' 'qt5-base' 'libappindicator-gtk3' 'librsvg'
             'noto-fonts-cjk' 'libhangul' 'anthy' 'librime' 'libxkbcommon'
             'wayland' 'libxklavier' 'm17n-lib' 'm17n-db' 'gtk-doc')
depends=('glib2' 'gtk3' 'gtk2' 'qt4' 'qt5-base' 'libappindicator-gtk3'
         'libhangul' 'anthy' 'librime' 'libxkbcommon' 'wayland' 'libxklavier'
		 'm17n-lib' 'm17n-db')
optdepends=('brise: Rime schema repository'
            'noto-fonts-cjk: Google Noto CJK fonts')

source=("nimf-master::git+https://gitlab.com/nimf-i18n/nimf#commit=d27ab903205c4842782c1b26d84882c980cea7db")
md5sums=('SKIP')

build() {
	cd "$srcdir/nimf-master"
	./autogen.sh --prefix=/usr
	make -j 4
}

package() {
	cd "$srcdir/nimf-master"
	make DESTDIR="${pkgdir}/" install
}
