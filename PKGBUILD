# Maintainer: Caltlgin Stsodaat <contact@fossdaily.xyz>
# Contributor: Dominic Radermacher <blip@mockmoon-cybernetics.ch>

_pkgname=ptouch-print
pkgname=${_pkgname}-git
pkgver=1.4.2.r12.geb59d40
pkgrel=1
pkgdesc="Command line tool to print labels on Brother P-Touch printers"
arch=('x86_64' 'i686')
url='https://mockmoon-cybernetics.ch/computer/p-touch2430pc/'
license=('GPL2')
depends=('gd' 'libusb')
makedepends=('autoconf' 'git')
provides=("${_pkgname}")
source=("git+https://mockmoon-cybernetics.ch/cgi/cgit/linux/${_pkgname}.git")
sha256sums=('SKIP')

pkgver() {
  git -C "${_pkgname}" describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "${_pkgname}"
  autoreconf --install
  ./configure --prefix=/usr
  make
}

package() {
  make DESTDIR="${pkgdir}" -C "${_pkgname}" install
  install -Dm644 "${_pkgname}/${_pkgname}.1" "${pkgdir}/usr/share/man/man1/${_pkgname}.1"
  install -Dm644 "${_pkgname}/README" "${pkgdir}/usr/share/doc/${_pkgname}/README"
}

# vim: ts=2 sw=2 et:
