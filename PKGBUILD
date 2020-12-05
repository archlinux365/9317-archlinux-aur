# Maintainer: Harsh Barsaiyan <hbarsaiyan@gmail.com>
 
pkgname=youtube-music-bin
_pkgname=YouTube-Music
pkgver=1.7.1
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
            "8eb2c03def58e97bf8a75fe4ebf7738bf950172094ceb3ebc38109d22ff7e35593838e971790eb991f085124efc574911bec01c1edead15fe5379b6d5b5305d3"
            "49c9004d9a157e3ddc4e79b6a800f0ac320989967a86ce887e5f8658c263167d43afa510f5692da86608bda1b98418e4fa9b012d9920c501f11304226136e031"
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
