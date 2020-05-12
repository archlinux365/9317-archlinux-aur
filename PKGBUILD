# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=solarwallet
_pkgname="Solar Wallet"
pkgver=0.24.0
pkgrel=1
pkgdesc="Wallet for the Stellar payment network by SatoshiPay."
arch=('any')
url="https://solarwallet.io"
license=('MIT')
depends=('libnotify' 'nss' 'libxss' 'libxtst' 'xdg-utils' 'libappindicator-gtk3' 'libsecret')
makedepends=('npm')
conflicts=('satoshipay-stellar-wallet')
replaces=('satoshipay-stellar-wallet')
source=("$pkgname-$pkgver.tar.gz::https://github.com/satoshipay/solar/archive/v$pkgver.tar.gz"
        "$pkgname.desktop")
sha256sums=('e3c5110d945d465847fc7953bd3f822f9f8ae8092898fa8a214f073a2a4a738b'
            'b6c574362d009c52ab9f9b0bdb4b2af9f1a8f79f0c8f68b897e9a19df46abc75')

build() {
	cd "solar-$pkgver"
	npm install --cache "$srcdir/npm-cache"
	npm run build:linux
}

package() {
	cd "solar-$pkgver"

	# Install directories
	install -dm755 "$pkgdir/"{opt/"$_pkgname",usr/bin}

	# Remove files for other platforms
	rm -rf electron/dist/linux-unpacked/resources/app.asar.unpacked/node_modules/sodium-native/prebuilds/{darwin*,win32*}

	# Copy main files
	cp -a electron/dist/linux-unpacked/* "$pkgdir/opt/$_pkgname"

	# Link to the binary
	ln -sf "/opt/$_pkgname/io.solarwallet.app" "$pkgdir/usr/bin/$pkgname"

	# Install icon
	install -Dm644 electron/build/icons/512.png "$pkgdir/usr/share/pixmaps/$pkgname.png"

	# Install desktop file
	install -Dm644 "$srcdir/$pkgname.desktop" -t "$pkgdir/usr/share/applications"

	# Install license
	install -Dm644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"
}
