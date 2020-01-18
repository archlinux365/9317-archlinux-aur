# Maintainer: Shayne Hartford <shayneehartford@gmail.com>

pkgname=libndi3-bin
_pkgname=obs-ndi
pkgver=4.0.0
_pkgver=4.7.1
pkgrel=3
_pkgrel=1
pkgdesc="Custom build of libndi from obs-ndi"
arch=('x86_64')
license=('LGPL2.0')
url="https://github.com/Palakis/obs-ndi"
provides=('libndi')
conflicts=('libndi-git' 'ndi-sdk')
source=(https://github.com/Palakis/"$_pkgname"/releases/download/"$_pkgver"/libndi3_"$pkgver"-"$_pkgrel"_amd64.1.deb)
sha256sums=('9b1294afdf8aaaf6f169211eb7feab18d2af10bd2f08b05142e2aa20a3b33a0e')

package() {
	cd "${srcdir}"

	tar -xJf data.tar.xz -C "${pkgdir}"
}
