# Maintainer: Yen Chi Hsuan <yan12125 at gmail dot com>

_pkgname=dhcptest
pkgname=$_pkgname-git
pkgver=0.7.r0.g1c51271
pkgrel=1
pkgdesc="DHCP test client"
arch=('i686' 'x86_64')
url="https://github.com/CyberShadow/dhcptest"
license=('Boost')
depends=('glibc' 'gcc-libs')
makedepends=('dmd' 'git')
source=("$_pkgname"::"git+https://github.com/CyberShadow/dhcptest")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  # Use the tag of the last commit
  git describe --long --tags | sed -E 's/([^-]*-g)/r\1/;s/-/./g'
}

build() {
  cd "$srcdir/$_pkgname"
  dmd dhcptest.d
}

package() {
  cd "$srcdir/$_pkgname"
  install -Dm755 "dhcptest" "$pkgdir/usr/bin/dhcptest"
  install -Dm644 "README.md" "$pkgdir/usr/share/doc/dhcptest/README.md"
}

