# Maintainer: Dan Trickey
# Contributor: Dan Trickey
pkgname=webots-bin
pkgname=webots
pkgver=2020a.rev1
pkgrel=1
pkgdesc="Mobile robot simulation software."
arch=('x86_64')
url="https://cyberbotics.com/"
license=('Apache')
groups=('')
depends=('alsa-lib' 'atk>=1.9.0' 'cairo'  'dbus' 'desktop-file-utils' 'expat' 'ffmpeg' 'fontconfig' 'freeimage>=3.15.4' 'freetype2' 'gcc' 'gd' 'gdk-pixbuf2' 'glib2>=2.10.0' 'glu' 'gtk3' 'hicolor-icon-theme' 'jre-openjdk-headless' 'libcups' 'libglvnd' 'libjpeg-turbo' 'libpulse' 'libssh' 'libx11' 'libxaw' 'libxcb' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxext' 'libxfixes' 'libxi' 'libxkbcommon' 'libxkbcommon-x11' 'libxrandr' 'libxrender' 'libxslt' 'libxtst' 'make' 'nspr' 'nss' 'openal' 'openssl' 'pango' 'qt5-base' 'qt5-declarative' 'qt5-location' 'qt5-multimedia' 'qt5-webchannel' 'qt5-webengine' 'qt5-websockets' 'xorg-server' 'zlib' 'zziplib>=0.13.62')
options=('!strip' '!emptydirs')
install=${pkgname}.install
source_x86_64=("https://github.com/cyberbotics/webots/releases/download/R2020a-rev1/webots_2020a-rev1_amd64.deb")
sha512sums_x86_64=('1696d1d3cb16120e0038a43982f97fb0a7ec2f8bf1b46d22d0d459d4a2dcb1e330b7c2d66e56d9a900a11f09d8ea5b7e2cf55d70655cf1629fce8506f42c7863')

package(){

	# Extract package data
	tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directory structure differences
	cd "${pkgdir}"

	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin
	#ls usr/share/applications/*.desktop | while read line; do
	#sed -i s'^\/Exec=\/usr\/local\/bin/\/Exec=\/usr\/bin//g'
	#done

	cd ..

}
