# Maintainer: Pablo Lezaeta <prflr88@gmail.com>

pkgname=toybox
pkgver=0.7.1
pkgrel=1
pkgdesc="A BSD-licensed alternative to busybox"
arch=("i686" "x86_64")
license=("BSD")
url="http://landley.net/toybox/"
#makedepends=('')
depends=('attr')
source=("${pkgname}-${pkgver}.tar.gz::http://landley.net/${pkgname}/downloads/${pkgname}-${pkgver}.tar.gz")

# ToDo, prepare that chage the system minimal UID and user UIDs to the ones used in arch

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"

  msg "Runing script/make.sh to allow YOU to select the options as upstream want"
  make menuconfig
  bash scripts/make.sh
}

package() {
  msg "Making directories"
  mkdir -p "${pkgdir}/usr/share/licenses/${pkgname}"
  mkdir -p "${pkgdir}/usr/bin"

  msg "Creating the file using make install"
  cd "${srcdir}/${pkgname}-${pkgver}"
  make install

  msg "installing license"
  install -m755 "${srcdir}/${pkgname}-${pkgver}/${pkgname}" "${pkgdir}/usr/bin/"
  cp "${srcdir}/${pkgname}-${pkgver}/LICENSE" "${pkgdir}/usr/share/licenses/toybox/"
}
# MD5? blame Pacman dev team
md5sums=('e959e5ff8c6806781eb06e56f302a393')
