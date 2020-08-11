# Maintainer: Dan Trickey
# Contributor: Dan Trickey
# This file is automatically generated by Arch Nemesis
pkgname=webots-nightly
pkgver=2020810
pkgrel=1
pkgdesc="Mobile robot simulation software."
arch=('x86_64')
url="https://cyberbotics.com/"
license=('Apache')
groups=('')
depends=("make" "gcc" "atk>=1.9.0" "ffmpeg" "dbus" "freeimage>=3.15.4" "glib2>2.10.0" "glu"
         "gtk3" "nss" "gcc-libs" "libxaw" "libxrandr" "libxrender"
         "zziplib>=0.13.62" "libssh" "libzip" "libx11" "xorg-server" "libxslt" "gd"
         "freetype2")
optdepends=('alsa-lib' 'cairo'  'dbus' 'desktop-file-utils' 'expat' 'fontconfig' 'gdk-pixbuf2' 'hicolor-icon-theme' 'jre-openjdk-headless' 'libcups' 'libglvnd' 'libjpeg-turbo' 'libpulse' 'libxaw' 'libxcb' 'libxcomposite' 'libxcursor' 'libxdamage' 'libxext' 'libxfixes' 'libxi' 'libxkbcommon' 'libxkbcommon-x11' 'libxrandr' 'libxrender' 'libxtst' 'nspr' 'nss' 'openal' 'openssl' 'pango' 'qt5-base' 'qt5-declarative' 'qt5-location' 'qt5-multimedia' 'qt5-webchannel' 'qt5-webengine' 'qt5-websockets' 'xorg-server' 'zlib')

options=('!strip' '!emptydirs')
install=webots.install
source_x86_64=("https://github.com/cyberbotics/webots/releases/download/nightly_10_8_2020/webots_2020b-rev1_amd64.deb")
sha512sums_x86_64=('ff66fd5ac8e7024ae077c245dc70dc70cfb8cee6b0d4d08f8bf0cc5c8c28e776746510a73c2d093f493f1a9a86a4ce55bf160a997bfe076c535e490e39c048d6')

package(){

	# Extract package data
	tar xzf data.tar.gz -C "${pkgdir}"

	# Fix directory structure differences
	cd "${pkgdir}"

	mkdir usr/bin 2> /dev/null; mv usr/local/bin/* usr/bin; rm -rf usr/local/bin

	cd ..

}
