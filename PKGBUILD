# Maintainer: Luis Martinez <luis dot martinez at disroot dot org>
# Contributor: ml
# Contributor: sum01 <sum01@protonmail.com>

pkgname=rocketchat-desktop
pkgver=3.5.0
pkgrel=2
pkgdesc='Rocket.Chat Native Cross-Platform Desktop Application via Electron.'
arch=('i686' 'x86_64')
url='https://github.com/RocketChat/Rocket.Chat.Electron'
license=('MIT')
depends=('electron' 'nodejs>=14.17.0')
makedepends=('node-gyp' 'yarn' 'asar')
install=rocketchat-desktop.install
source=("$pkgname-$pkgver.tar.gz::${url}/archive/${pkgver}/${pkgname}-${pkgver}.tar.gz"
        rocketchat-desktop
        rocketchat-desktop.desktop)
sha256sums=('d66b11688bf2507fb8c3fbec1cf12720092edde30913f93b4216c276f6675d3c'
            '5fe8f552b4ac1917a1bb08e86f957e9b892220a2aab59b88e8256e2e092e1b1c'
            '31fae4f98a61a774f84030fd43d2ef92c7633740dc5aa55967a21d0e29ea621a')
# validpgpkeys=('9EA06BE6FD613A03') # Tasso Evangelista

prepare() {
	_ver="$(</usr/lib/electron/version)"
	cd "Rocket.Chat.Electron-$pkgver"
	yarn upgrade "electron@$_ver"
}

build() {
	cd "Rocket.Chat.Electron-$pkgver"
	local i686=ia32 x86_64=x64
	export NODE_ENV=production
	yarn build
	yarn run electron-builder --linux --"${!CARCH}" --dir \
		-c.electronDist=/usr/lib/electron \
		-c.electronVersion="$_ver"
}

package() {
	local i686=linux-ia32-unpacked x86_64=linux-unpacked
	install -Dm644 -t "${pkgdir}/usr/share/applications" "${pkgname}.desktop"
	install -Dm755 -t "${pkgdir}/usr/bin" "$pkgname"

	cd "Rocket.Chat.Electron-$pkgver"
	install -Dm644 "build/icons/512x512.png" "$pkgdir/usr/share/icons/hicolor/512x512/apps/$pkgname.png"
	install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" LICENSE
	install -d "$pkgdir/usr/lib/$pkgname/"
	asar e "dist/${!CARCH}/resources/app.asar" "$pkgdir/usr/lib/$pkgname/"
}
