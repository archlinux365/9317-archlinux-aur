# Maintainer: Orestis Floros <orestisflo@gmail.com>

pkgname=csmith-git
pkgver=csmith.2.3.0.r62.g0bd545f
pkgrel=1
pkgdesc='A random generator of C programs'
arch=('i686' 'x86_64')
url='https://github.com/csmith-project/csmith'
license=('BSD')
optdepends=('perl')
makedepends=('git')
provides=('csmith')
conflicts=('csmith')
source=('git+git://github.com/csmith-project/csmith')
sha1sums=('SKIP')

pkgver() {
    cd csmith
    git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
    cd csmith
    autoreconf -fi
    ./configure --prefix=/usr
    make
}

package() {
    cd csmith
    make DESTDIR="${pkgdir}/" install
    install --directory "${pkgdir}/usr/share/licenses/${pkgname}/"
    install COPYING "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}
