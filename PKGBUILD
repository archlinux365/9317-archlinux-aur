# Maintainer: Andrew Sun <adsun701@gmail.com>
# Contributor: June Tate-Gans <june@theonelab.com>

pkgname=libfixposix
pkgver=0.5
pkgrel=1
pkgdesc='Thin wrapper over POSIX syscalls'
arch=('i686' 'x86_64')
url="https://github.com/sionescu/libfixposix"
license=('Boost')
depends=('glibc')
makedepends=('git')
source=("libfixposix::git+https://github.com/sionescu/libfixposix#commit=b6bfd4a3ba9a9d2761cbf78d3a04a2d71482284e")
sha256sums=("SKIP")

prepare() {
  cd "${srcdir}/${pkgname}"
  autoreconf -fiv
}

build() {
  cd "${srcdir}/${pkgname}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 LICENCE "${pkgdir}/usr/share/licenses/${pkgname}/LICENCE"
}
