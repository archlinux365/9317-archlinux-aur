# Maintainer: Chrys <mail@chrys.de>
pkgname=ocrpdf
pkgver=0.3.0
pkgrel=1
pkgdesc="OCR a PDF file and make it browsable"
arch=('any')
url="http://www.crivatec.de"
license=('GPL')
groups=()
depends=('python-pypdf2' 'pythonmagick' 'python-pillow' 'python-tesserwrap')
source=("http://crivatec.de/page/uploads/Downloads/Accessible%20Tools/$pkgname-$pkgver.tar.xz")
install='ocrpdf.install'
md5sums=("90be18ff8fd73261a012fce491b4f7fb")

package() {
 cd "${srcdir}/"
  install -Dm755 ocrpdf "$pkgdir/usr/bin/ocrpdf"
}
