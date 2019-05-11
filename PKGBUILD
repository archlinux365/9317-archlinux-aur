pkgname=scannerextract
_pkgname=scannerExtract
pkgver=0.2.601
pkgrel=2
pkgdesc="Scanned Image Extractor"
depends=('liblbfgs' 'opencv')
makedepends=('qt5-tools')
license=('GPL3')
arch=('any')
url="http://www.dominik-ruess.de/scannerExtract/scannerExtract_help_en.html"
source=(
"${pkgname}-${pkgver}::https://ayera.dl.sourceforge.net/project/scannedimageextractor/Version-${pkgver}/SIE-${pkgver}.tar.bz2"
"remove-q-foreachcontainer.patch"
"opencv4-compatibility.diff"
)

#https://downloads.sourceforge.net/project/scannedimageextractor/Version-0.2.601/SIE-0.2.601.tar.bz2.sha256?r=https%3A%2F%2Fsourceforge.net%2F&ts=1557152577
sha256sums=('f2473afef1e0cf972a60eec323fc323739aa9e0e8bb14dab639a787cec007dd8'
'9e0ebc65810700e0f52225c883035166b18ff7ab0bb51c8b400180e1d7dc7029'
'3aa982455592b9147d89e07b755c299b2b9c672120e9ea375129f39af5ea9773' #  opencv4-compatibility.diff

)

build() {
    cd "$_pkgname-$pkgver"

# Remove strange windows line return stopping patch from … uuhm patching.
    tr -d '\r' < module_misc/translation.cpp > module_misc/translation.cpp.new
    mv module_misc/translation.cpp.new module_misc/translation.cpp
    patch --strip 0 -l -i ${srcdir}/remove-q-foreachcontainer.patch 
    patch --strip 2 -l -i ${srcdir}/opencv4-compatibility.diff
    mkdir -p build
    cd build
    cmake ../scannerExtract/ -DCMAKE_BUILD_TYPE=release
    make
}

package() {
    cd "$_pkgname-$pkgver"/build
    make DESTDIR="$pkgdir/" install
}
