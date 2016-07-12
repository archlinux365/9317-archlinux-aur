# Maintainer: Ronny Lorenz <ronny at tbi dot univie dot ac dot at>

pkgname=infernal
pkgver=1.1.2
pkgrel=1
pkgdesc="Search DNA sequence databases for RNA structure and sequence similarities using covariance models (CMs)"
arch=('x86_64' 'i686')
license=('GPL3')
url="http://eddylab.org/infernal/"
depends=('glibc')
optdepends=()
makedepends=()
provides=()
source=("http://eddylab.org/infernal/${pkgname}-${pkgver}.tar.gz")
md5sums=('a73e6bbab0c4b79af2cc4c0aabb8accc')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  ./configure --prefix=/usr || return 1
  make || return 1
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  make DESTDIR="${pkgdir}" install || return 1
  install -Dm644 Userguide.pdf "${pkgdir}/usr/share/doc/${pkgname}/Userguide.pdf"
}
