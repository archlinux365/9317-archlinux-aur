# Maintainer: Daniel Bermond < yahoo-com: danielbermond >

pkgname=gmmlib
pkgver=18.3.pre1
pkgrel=1
pkgdesc='Intel Graphics Memory Management Library'
arch=('i686' 'x86_64')
url='https://github.com/intel/gmmlib/'
license=('MIT')
depends=('gcc-libs')
makedepends=('cmake')
conflicts=('gmmlib-git')
options=('!emptydirs')
source=("${pkgname}-${pkgver}.tag.gz"::"https://github.com/intel/gmmlib/archive/intel-gmmlib-${pkgver}.tar.gz")
sha256sums=('e2b383ad7f39a8e5f4d53b7b7e8b81dc8e9299de6b943a45cb79c6e6e34b4876')

build() {
    cd "${pkgname}-intel-${pkgname}-${pkgver}"
    
    mkdir -p build
    cd build
    
    [ "$CARCH" = 'i686'   ] && local _arch='32'
    [ "$CARCH" = 'x86_64' ] && local _arch='64'
    
    cmake \
        -DCMAKE_BUILD_TYPE:STRING='Release' \
        -DCMAKE_INSTALL_LIBDIR:PATH='lib' \
        -DCMAKE_INSTALL_PREFIX:PATH='/usr' \
        -DRUN_TEST_SUITE:BOOL='ON' \
        -DARCH="$_arch" \
        -Wno-dev \
        ..
    
    make
}

package() {
    cd "${pkgname}-intel-${pkgname}-${pkgver}/build"
    
    make DESTDIR="$pkgdir" install
    
    # license
    cd "${srcdir}/${pkgname}-intel-${pkgname}-${pkgver}"
    install -D -m644 LICENSE.md "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
