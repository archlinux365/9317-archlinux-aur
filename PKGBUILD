# Maintainer: Arti Zirk <arti.zirk@gmail.com>
# Contributor: Timmy Yao <timmy.yao+aur@gmail.com>
pkgname=authy-desktop-win32-bin
pkgver=1.9.0
pkgrel=1
pkgdesc="Two-Factor Authentication from your PC. Converted from Windows electron version"
arch=("x86_64")
provides=('authy')
conflicts=('authy')
url="https://authy.com/"
license=('unknown')
depends=('electron9')
makedepends=('npm' 'unzip' 'asar')
source=("https://s3.amazonaws.com/authy-electron-repository-production/authy/stable/${pkgver}/win32/x64/authy-${pkgver}-full.nupkg"
        "authy.desktop")
sha1sums=('da889d80058cae787faac8de8d2de431857bec46'
          '5eaa6f0152eeaf93740dfcd2a94b5fbf6b6c4984')

build() {
	cd "$srcdir"

	unzip -j "authy-$pkgver-full.nupkg" lib/net45/resources/app.asar
	asar extract-file lib/net45/resources/app.asar img/logos/icon128.png
}

package() {
	cd "$srcdir"

	install -Dm644  -t "${pkgdir}"/usr/lib/authy app.asar icon128.png
	install -Dm644 "$srcdir"/authy.desktop -t "$pkgdir"/usr/share/applications
}

