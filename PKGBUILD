# Maintainer: Harsh Barsaiyan <hbarsaiyan@gmail.com>
# This file is automatically generated. Do not edit.

pkgname=youtube-music-bin
_pkgname=YouTube-Music
pkgver=1.8.1
pkgrel=1
epoch=
pkgdesc="YouTube Music Desktop App bundled with custom plugins like built-in ad blocker & downloader"
arch=('x86_64')
url="https://github.com/th-ch/youtube-music"
license=('MIT')
makedepends=('git')
source=("https://github.com/th-ch/youtube-music/releases/download/v${pkgver}/${_pkgname}-${pkgver}.AppImage"
        "https://raw.githubusercontent.com/th-ch/youtube-music/master/license"
        "youtube-music-bin.desktop")
noextract=('${_pkgname}-${pkgver}.AppImage')
options=(!strip)
sha512sums=(
            "9f074c4cf593fcf576283e1522dd9205dae1000cd193530133724a08a109bd92bfacb8f8f0e58ff078207c6b682c6f804af3cb7487819fc04a24828dd8dd7f82"
            "SKIP"
            "5cde2a00f56761b510a550cbf685206646519068f5b1b14d0a0e6c954e38f677aef8ec83c53ff2c85b67ae539a4a419368f2593207548a868466502e675ae38c"
)

prepare(){
	chmod +x $_pkgname-$pkgver.AppImage
	./$_pkgname-$pkgver.AppImage --appimage-extract
}

package() {
	# install license
	install -Dm644 license "${pkgdir}/usr/share/licenses/${pkgname}/license"

	# install icon
	install -Dm644 "${srcdir}/squashfs-root/youtube-music.png" "${pkgdir}/usr/share/pixmaps/youtube-music-bin.png"

	# install appimage
	install -Dm755 ${_pkgname}-${pkgver}.AppImage "${pkgdir}/usr/bin/youtube-music-bin"

	# install desktop entry
	install -Dm755 youtube-music-bin.desktop "${pkgdir}/usr/share/applications/youtube-music-bin.desktop"
}
