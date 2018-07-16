# Based on file generated by debtap
# Maintainer: Shane Simmons <regeya@gmail.com>
# Contributor: Lev Lybin <lev.lybin@gmail.com>
pkgname=upwork-beta
pkgver=5.1.0.562
_rawver=${pkgver//./_}
_hashver="f3wgs5ljinabm69t"
pkgrel=5
pkgdesc="Desktop App (aka Team App) Standard version"
arch=('x86_64')
url="https://www.upwork.com/downloads?source=Footer"
license=('custom')
depends=('alsa-lib>=1.0.25' 'atk>=2.4.0' 'cairo>=1.12.2' 'dbus>=1.6.8' 'desktop-file-utils' 'electron' 'expat>=2.1.0' 'fontconfig>=2.9.0' 'freetype2>=2.4.9' 'gconf>=3.2.5' 'gdk-pixbuf2>=2.26.1' 'glib2>=2.33.12.really2.32.4' 'gtk2>=2.24.10' 'hicolor-icon-theme' 'libappindicator-gtk2' 'libcups>=1.5.3' 'libx11>=1.5.0' 'libxcb' 'libxcomposite>=0.4.3' 'libxcursor>=1.1.13' 'libxdamage>=1.1.3' 'libxext>=1.3.1' 'libxfixes>=5.0' 'libxi>=1.6.1' 'libxinerama>=1.1.2' 'libxrandr>=1.3.2' 'libxrender>=0.9.7' 'libxss>=1.2.2' 'libxtst>=1.2.1' 'nspr>=4.9.2' 'nss>=3.14.5' 'pango')
options=('!strip' '!emptydirs')
install=upwork.install
source_x86_64=(upwork_amd64_${pkgver}.deb::https://updates-desktopapp.upwork.com/binaries/v${_rawver}_${_hashver}/upwork_${pkgver}_amd64.deb)
sha256sums_x86_64=('af70dae3d1cd5910d3ab591201caf75b13758d12e487b44cd32452c305df68c0')

package(){

	# Extract package data
	tar xf data.tar.xz -C "${pkgdir}"

}
