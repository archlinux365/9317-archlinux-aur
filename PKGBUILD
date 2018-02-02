# Maintainer: Preisschild <florian dot stroeger at gmail dot com>
pkgname=emerald-wallet-bin
pkgver=0.8.0
lastcommit=5cc6d3f
pkgrel=1
pkgdesc="Ethereum Classic Wallet"
arch=('x86_64')
url="https://github.com/ethereumproject/emerald-wallet"
license=('Apache')
provides=('emerald-wallet')
conflicts=('emerald-wallet')
source=(
	https://github.com/ethereumproject/emerald-wallet/releases/download/v${pkgver}/EmeraldWallet-linux-x64-v${pkgver}-${lastcommit}.tar.gz
	emeraldwallet.png
	emeraldwallet.desktop
)
md5sums=('e66835e44e76ec5f1ae21690b53a2842'     #emeraldwallet
	     '14df95dcbac7415ccca9fa3a2f4e1497'		#icon
	     '8664d6f53ef7fdfaa907cd8546184b57'		#.desktop
)

package() {
	cd "$srcdir/"
	# Creating directories
	install -dm755 "$pkgdir/usr/bin/"
   	install -dm755 "$pkgdir/usr/share/emerald-wallet-bin/"
	install -dm755 "$pkgdir/usr/share/pixmaps/"
	install -d "$pkgdir/usr/share/applications/"

	# Program
	mv "$srcdir/EmeraldWallet-linux-x64-v${pkgver}-${lastcommit}/"* "$pkgdir/usr/share/emerald-wallet-bin/"
	chmod -R 755 "$pkgdir/usr/share/emerald-wallet-bin/"
	ln -s "/usr/share/emerald-wallet-bin/emeraldwallet" "$pkgdir/usr/bin/emeraldwallet"
	

	# Desktop Launcher
	install -Dm644 "$srcdir/emeraldwallet.png" "$pkgdir/usr/share/pixmaps/emeraldwallet.png"
	install -Dm644 "$srcdir/emeraldwallet.desktop" "$pkgdir/usr/share/applications/emeraldwallet.desktop"
}


