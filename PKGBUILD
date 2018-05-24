# Maintainer: Christian Hesse <mail@eworm.de>
# Maintainer: Sergej Pupykin <pupykin.s+arch@gmail.com> ([community] package)

pkgname=remmina-git
pkgver=1.2.30.r5.g87167761a
pkgrel=1
pkgdesc='A remote desktop client written in GTK+ - git checkout'
arch=(i686 x86_64)
url='http://www.remmina.org/'
license=('GPL')
depends=('gtk2' 'zlib' 'libjpeg' 'libssh' 'libunique' 'avahi' 'vte3'
	'libgcrypt' 'libxdmcp' 'libgnome-keyring' 'libvncserver'
	'libsecret' 'webkit2gtk')
makedepends=('git' 'intltool' 'pkgconfig' 'cmake'
	'avahi' 'libxkbfile' 'freerdp-git' 'telepathy-glib')
optdepends=('avahi' 'libxkbfile' 'freerdp-git' 'telepathy-glib')
replaces=('remmina-plugins')
provides=('remmina' 'grdc' "grdc=${pkgver}" 'remmina-plugins')
conflicts=('remmina' 'grdc')
install=remmina.install
source=('remmina::git://github.com/FreeRDP/Remmina.git')
sha256sums=('SKIP')

pkgver() {
	cd remmina/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git rev-parse --short HEAD)"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git rev-parse --short HEAD)"
	fi
}

build() {
	cd remmina/

	cmake \
		-DCMAKE_INSTALL_PREFIX=/usr \
		-DCMAKE_INSTALL_LIBDIR=lib \
		-DWITH_APPINDICATOR=OFF \
		.
	make
}

package() {
	cd remmina/

	make DESTDIR="${pkgdir}/" install
}

