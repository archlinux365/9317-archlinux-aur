# Maintainer: wszqkzqk <wszqkzqk@gmail.com>
# Maintainer: arkli <LFZ0107@outlook.com>
pkgname=deepin-udis86
pkgsname=udis86
pkgvers=1.72-2
pkgver=1.72_2
pkgrel=2
epoch=
pkgdesc="Deepin Wine"
arch=('i686' 'x86_64')
url="http://www.deepin.org"
license=('Proprietary')
groups=()
depends=()
makedepends=('tar')
checkdepends=()
optdepends=()
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
changelog=
source=("https://mirrors.ustc.edu.cn/deepin/pool/non-free/u/${pkgsname}/${pkgsname}_${pkgvers}_i386.deb")
noextract=("${pkgsname}_${pkgvers}_i386.deb")
md5sums=('SKIP')
validpgpkeys=()

prepare() {
	ar -x ${pkgsname}_${pkgvers}_i386.deb
	mkdir ${pkgsname}-${pkgvers}
	tar -xf data.tar.xz --directory="${pkgsname}-${pkgvers}"	
}

package() {
	cd "${pkgsname}-${pkgvers}"
	cp -r ./ ${pkgdir}/
}
