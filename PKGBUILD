# Maintainer:  nissen22


pkgname=cudatext-gtk2-bin
pkgver=1.108.0.0
pkgrel=1
pkgdesc="Cross-platform text editor, written in Lazarus"
arch=('x86_64')
url="http://uvviewsoft.com/cudatext"
license=('MPL2')
depends=('gtk2'
         'python')
provides=('cudatext')
conflicts=('cudatext-qt5-bin')
options=('!strip')
source=("http://www.uvviewsoft.com/cudatext/files_linux/cudatext_${pkgver}-${pkgrel}_gtk2_amd64.deb")
sha256sums=('69aebafdb3c138dc4f2f257b1ef1f2caf84dd446f12593777ca617320fda4072')

package() {
    tar xvf "${srcdir}/data.tar.xz" -C "${pkgdir}/"
}
