# Maintainer: Malacology <guoyizhang at malacology dot com>
# Contributor: Malacology <guoyizhang at malacology dot com>

pkgname=seqencematrix
_installname=SeqenceMatrix
pkgver=1.9
pkgrel=1
depends=(
	'java-runtime'
)
pkgdesc="Taxonomy-aware DNA sequence processing toolkit"
arch=('x86_64')
url="https://github.com/gaurav/taxondna"
license=('GPL2')
source=("https://github.com/gaurav/taxondna/releases/download/v${pkgver}/SequenceMatrix-${pkgver}.zip" "seqencematrix.desktop")
sha256sums=('ba46fe8672ded973c835ea0a636c251d28fa2f80ee30a69469a4a7fab204e814'
            '0b9e5d75ef093495064fbb6f22d71a50282e4bd9f2daec0f995897a744ab4468')

package() {
    install -dm755 "$pkgdir"/usr/share/{seqencematrix,applications}
    chmod +x ${srcdir}/SequenceMatrix-${pkgver}/SequenceMatrix.jar
    install -Dm755 ${srcdir}/seqencematrix.desktop "${pkgdir}/usr/share/applications/seqencematrix.desktop"
    install -Dm755 ${srcdir}/SequenceMatrix-${pkgver}/SequenceMatrix.jar ${pkgdir}/usr/share/seqencematrix/SequenceMatrix.jar
    mv ${srcdir}/SequenceMatrix-${pkgver}/* ${pkgdir}/usr/share/seqencematrix/
}
