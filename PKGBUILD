# Maintainer: abdellatif-dev <abdellatif.devlog@gmail.com>
pkgname=st-abdellatif-git
pkgver=0.9.5
pkgrel=6
pkgdesc="my st build"
arch=(x86_64)
url="https://github.com/abdellatif-dev/st-abdellatif.git"
license=('MIT')
depends=(dash sh glibc coreutils libx11 libxinerama libxft freetype2 fontconfig libfontconfig.so)
makedepends=(git make)
optdepends=()
provides=(st)
conflicts=(st)
replaces=()
install=
changelog=
source=("git+$url")
md5sums=('SKIP')

package() {
	cd st-abdellatif
    make DESTDIR="$pkgdir/" clean install
}
