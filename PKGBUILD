# Maintainer: Alexandru Ianu <alexandru.ianu@gmail.com>
# Maintainer: Manuel Hüsers <manuel.huesers@uni-ol.de>
# Contributor: Alexandru Ianu <alexandru.ianu@gmail.com>

pkgname=steam-native
pkgver=1.0.0.50
pkgrel=14
pkgdesc="Sets a native runtime environment for Steam by default, adds a Steam runtime launcher for compatibility."
arch=('i686' 'x86_64')
url='http://steampowered.com/'
license=('GPL2')
options=('!emptydirs')
install="${pkgname}.install"

source=('steam-runtime.desktop'
	'51-steam.rules')
source_x86_64=('lib32-nm09810.tar.xz')

noextract=('lib32-nm09810.tar.xz')

sha256sums=('8ce140660b4c6295ff0e580a02cebafce1ed22828561304e3f99ee78b8cfdb5d'
	'10996aea68afc633b614404fd91143b738ce0fd929af91659f4c6dd960776c40')
sha256sums_x86_64=('b56b9da85e5647ef2b8013d14378b30917d7701cd61b27ba6a39045ab5ecc529')

depends=('steam' 'networkmanager')
depends_i686=('openal' 'gtk2' 'libgcrypt15' 'libnl' 'libpng12' 'gconf' 'nss' 'libpulse' 'libxss')
depends_x86_64=('lib32-openal' 'lib32-gtk2' 'lib32-libgcrypt15' 'lib32-libnl' 'lib32-libpng12' 'lib32-gconf' 'lib32-nss' 'lib32-libpulse' 'lib32-libxss' 'lib32-gnutls28')

optdepends=('mono: game dependency' 'mono-addins: game dependency')
optdepends_i686=('libappindicator-gtk2: needed if tray icon not working (Gnome)' 'libappindicator-gtk3: needed if tray icon not working (Gnome)' 'sdl: game dependency' 'sdl_image: game dependency' 'sdl_mixer: game dependency' 'sdl2: game dependency' 'sdl2_image: game dependency' 'tcp_wrappers-libs: game dependency' 'speex: game dependency' 'gperftools: game dependency' 'libcurl-gnutls: game dependency')
optdepends_x86_64=('lib32-libappindicator-gtk2: needed if tray icon not working (Gnome)' 'lib32-libappindicator-gtk3: needed if tray icon not working (Gnome)' 'lib32-sdl: game dependency' 'lib32-sdl_image: game dependency' 'lib32-sdl_mixer: game dependency' 'lib32-sdl2: game dependency' 'lib32-sdl2_image: game dependency' 'lib32-tcp_wrappers-libs: game dependency' 'lib32-speex: game dependency' 'lib32-gperftools: game dependency' 'lib32-libcurl-gnutls: game dependency')

provides_i686=('libudev.so.0')
provides_x86_64=('lib32-libudev.so.0' 'lib32-networkmanager=0.9.8.10' 'lib32-libnm-glib=0.9.8.10')

conflicts_i686=('libudev.so.0')
conflicts_x86_64=('lib32-libudev.so.0' 'lib32-networkmanager' 'lib32-libnm-glib46')

package() {
	case "${CARCH}" in
		'i686')
			mkdir -p "${pkgdir}/usr/lib"
			ln -s '/usr/lib/libudev.so' "${pkgdir}/usr/lib/libudev.so.0"
			;;
		'x86_64')
			mkdir -p "${pkgdir}/usr/lib32"
			ln -s '/usr/lib32/libudev.so' "${pkgdir}/usr/lib32/libudev.so.0"
			bsdtar -xJf 'lib32-nm09810.tar.xz' -C "${pkgdir}" --no-same-owner
			;;
	esac

	install -Dm644 'steam-runtime.desktop' "${pkgdir}/usr/share/applications/steam-runtime.desktop"
	install -Dm644 '51-steam.rules' "${pkgdir}/etc/polkit-1/rules.d/51-steam.rules"
	chmod 0700 "${pkgdir}/etc/polkit-1/rules.d" # fix permission warning
}
