# Maintainer: Gaetan Bisson <bisson@archlinux.org>
# Contributor: Scytrin dai Kinthra <scytrin@gmail.com>

pkgname=st-git
_pkgname=st
pkgver=20150603.71fa10f
pkgrel=1
pkgdesc='Simple virtual terminal emulator for X'
url='http://git.suckless.org/st/'
arch=('i686' 'x86_64' 'armv7h')
license=('MIT')
depends=('libxft')
makedepends=('ncurses' 'libxext' 'git')
source=('git://git.suckless.org/st'
        'scrollback.patch')
sha1sums=('SKIP'
          '2e10ac47eb020d50c7f861f3923bb4152255a027')

provides=("${_pkgname}")
conflicts=("${_pkgname}")

pkgver() {
	cd "${srcdir}/${_pkgname}"
	git log -1 --format='%cd.%h' --date=short | tr -d -
}

prepare() {
	local file
	cd "${srcdir}/${_pkgname}"
	sed \
		-e '/char font/s/= .*/= "Fixed:pixelsize=13:style=SemiCondensed";/' \
		-e '/char worddelimiters/s/= .*/= " '"'"'`\\\"()[]{}<>|";/' \
		-e '/int defaultcs/s/= .*/= 1;/' \
		-i config.def.h
	sed \
		-e 's/CPPFLAGS =/CPPFLAGS +=/g' \
		-e 's/CFLAGS =/CFLAGS +=/g' \
		-e 's/LDFLAGS =/LDFLAGS +=/g' \
		-e 's/_BSD_SOURCE/_DEFAULT_SOURCE/' \
		-i config.mk
	sed '/@tic/d' -i Makefile
	for file in "${source[@]}"; do
		if [[ "$file" != *.diff ]]; then
			continue
		fi
		# add all patches present in source array
		patch -Np1 <"$SRCDEST/$file"
	done
}

build() {
	cd "${srcdir}/${_pkgname}"
	make X11INC=/usr/include/X11 X11LIB=/usr/lib/X11
}

package() {
	cd "${srcdir}/${_pkgname}"
	make PREFIX=/usr DESTDIR="${pkgdir}" install
	install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
	install -Dm644 README "${pkgdir}/usr/share/doc/${pkgname}/README"
	tic -s -o "${pkgdir}/usr/share/terminfo" st.info
}
