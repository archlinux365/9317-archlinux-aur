# Maintainer: eNV25 <env252525@gmail.com>

pkgname=run-desktop
pkgver=0.0.2
pkgrel=1
pkgdesc=".desktop file launcher. Can run .desktop files using xdg-open."
arch=(any)
url="https://aur.archlinux.org/packages/run-desktop/"
license=('GPL')
depends=(kde-cli-tools)
source=(run-desktop.sh run-desktop.desktop)
install=run-desktop.install

package() {
	install -Dm755 "${srcdir}/run-desktop.sh" "${pkgdir}/usr/bin/run-desktop"
	install -Dm644 "${srcdir}/run-desktop.desktop" "${pkgdir}/usr/share/applications/run-desktop.desktop"
}

sha256sums=('d8789dffc8bae9ebe73de63c7bceee93ac3b8ca17900a2150db8db85e151f9b6'
            'a8201dd5b780e7c7e4911286a8a69c74440e00c0e9bb3f5c1c8b03c7e5f287ce')
