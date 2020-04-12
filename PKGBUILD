# Maintainer: Steven Vancoillie <steven<dot>vancoillie[at]gmail[dot]com>
pkgname=likwid
pkgver=5.0.1
pkgrel=2
pkgdesc="Lightweight performance tools"
url="https://github.com/RRZE-HPC/likwid"
arch=('x86_64' 'i686')
license=('GPLv3')
depends=()
makedepends=()
optdepends=('perl: for likwid-mpirun and likwid-perfscope'
            'openmpi: for likwid-mpirun'
            'gnuplot: for likwid-perfscope')
conflicts=()
source=("${url}/archive/v${pkgver}.tar.gz")
md5sums=('c40419aa18b92f50ca4b5403ef4d8f26')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  sed -i "14s:/usr/local:/usr:; 46s:/man:/share/man:; 65s:/sbin:/bin:; 66s:/sbin:/bin:; 72s:/sbin:/bin:; 73s:/sbin:/bin:" config.mk 
  sed -i "s:/sbin:/bin:" Makefile
  make
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make PREFIX="${pkgdir}/usr" install 
}
