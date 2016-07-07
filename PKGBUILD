# Author: DiogoNSilva <o.diogosilva@gmail.com>
# Contributor: Stunts <f.pinamartins@gmail.com>

_pkgname=TriFusion
pkgname=trifusion-bin
pkgver=0.4.0
pkgrel=1
pkgdesc="Streamlining phylogenomic data gathering, processing and visualization"
arch=("any")
url="https://github.com/ODiogoSilva/TriFusion"
licence=("GPL3")
conflicts=("trifusion-git", "trifusion")
source=("https://github.com/ODiogoSilva/${_pkgname}/releases/download/${pkgver}/TriFusion-${pkgver}-linux-arch.tar.xz")
md5sums=("7db55826cb37c7eebdd0337f286f74e7")

package() {
	cd ${srcdir}
	mv TriFusion-0.4.0-linux-arch TriFusion
	install -Dm755 TriFusion "${pkgdir}/usr/bin/TriFusion"
	install -Dm644 trifusion.desktop "${pkgdir}/usr/share/applications/trifusion.desktop"
	install -Dm644 trifusion-icon-128.png "${pkgdir}/usr/share/pixmaps/trifusion-icon-128.png"
}
