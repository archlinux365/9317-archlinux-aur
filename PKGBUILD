# Maintainer: Kye Morton <pryre.dev@outlook.com>
pkgname=qgroundcontrol-bin
pkgver=4.0.0
pkgrel=0
pkgdesc="Ground control for unmanned vehicles."
arch=('x86_64')
url="http://qgroundcontrol.org/"
license=('GPL3')

depends=( 'bzip2'
		  'dbus'
		  'flac'
		  'gst-plugins-base-libs'
		  'libasyncns'
		  'libffi'
		  'libgcrypt'
		  'libgpg-error'
		  'libogg'
		  'libsndfile'
		  'libsystemd'
		  'libunwind'
		  'libx11'
		  'libxau'
		  'libxcb'
		  'libxdmcp'
		  'libxext'
		  'lz4'
		  'orc'
		  'pcre'
		  'sdl2'
		  'xz'
		  'zlib'
		  'icu' )

source=('qgroundcontrol-'${pkgver}'-'${pkgrel}'.tar.bz2::https://github.com/mavlink/qgroundcontrol/releases/download/v'${pkgver}'/qgroundcontrol.tar.bz2')

sha256sums=('ed9c0f969b00edc4b20a15a8688627efe5c33ec916fa5034e8553e3bb1669956')

build() {
	echo "[Desktop Entry]
Type=Application
Name=QGroundControl
Comment=Ground control for unmanned vehicles
Path=/opt/${pkgname}/
Exec=/usr/bin/${pkgname}
Icon=/opt/${pkgname}/qgroundcontrol.png
Terminal=false
Categories=Qt;Utility;" > "$srcdir/${pkgname}.desktop"
}

package() {
  mkdir -p "${pkgdir}/opt" "${pkgdir}/usr/bin" "${pkgdir}/usr/share/applications"
  cp -R "$srcdir/${pkgname%-bin}" "${pkgdir}/opt/${pkgname}"
  cp "$srcdir/${pkgname}.desktop" "${pkgdir}/opt/${pkgname}"

  ln -s "/opt/${pkgname}/qgroundcontrol-start.sh" "${pkgdir}/usr/bin/${pkgname}"
  ln -s "/opt/${pkgname}/${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
}

# vim:set ts=2 sw=2 et:
