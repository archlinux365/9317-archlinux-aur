# Maintainer:  nissen22


pkgname=cudatext-gtk2-bin
pkgver=1.163.4.0
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
sha256sums=('6fc91e306a4f50c652299045f4956738d792f387abdf9ebae10ca49245c8f57e')

package() {
    tar xvf "${srcdir}/data.tar.xz" -C "${pkgdir}/"
}
