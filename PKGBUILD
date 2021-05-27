# Maintainer: Malacology <guoyizhang at malacology dot com>
# Contributor: Malacology <guoyizhang at malacology dot com>

pkgname=jane
pkgver=4
pkgrel=1
pkgdesc="software tool for the cophylogeny reconstruction problem"
arch=('x86_64')
url="https://www.cs.hmc.edu/~hadas/jane/"
license=('Harvey Mudd College source code & Apache License')
source=("https://www.cs.hmc.edu/~hadas/jane/downloads/linux.tar.gz" "jane.desktop" "jane.png")
sha256sums=('7cd00209eb7fcf65124b768e9d502065c45ced1800a8d691911daeb4d1664333'
            '3801e224f6875859f51fa3a6cae1bc53f53413fd027395629e1637e446a96859'
            'cf2275b7de1beb05e3be078409f596d0f88735888ee6e8298977ee6a1427a6c1')
depends=(
	'jre-openjdk-headless'
	'jre-openjdk'
	'jdk-openjdk'
	'openjdk-doc'
	'openjdk-src'
)
package() {
    install -dm755 "$pkgdir"/usr/share/{jane,icons,applications}
    install -m 755 ${srcdir}/*.desktop ${pkgdir}/usr/share/applications
    install -m 755 ${srcdir}/*.png ${pkgdir}/usr/share/icons
    mv "$srcdir"/* "$pkgdir"/usr/share/jane
}
