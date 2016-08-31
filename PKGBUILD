# Maintainer: Kevin MacMartin <prurigro@gmail.com>

_pkgname=salsapipe
pkgname=${_pkgname}-git
pkgver=20150727.r26.6d81ace
pkgrel=4
pkgdesc='Encrypted network tunneling using salsa20 from libnettle and GPG from libgpgme'
url='https://github.com/prurigro/salsapipe'
license=('GPL3')
arch=('x86_64')
depends=('gpgme')
makedepends=('git')
source=("git+$url")
sha512sums=('SKIP')

pkgver() {
  cd $_pkgname
  printf "%s.r%s.%s" "$(git show -s --format=%ci master | sed 's/\ .*//g;s/-//g')" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd $_pkgname
  make
}

package() {
  cd $_pkgname
  install -Dm755 salsamsg "$pkgdir/usr/bin/salsamsg"
  install -Dm644 salsamsg.1 "$pkgdir/usr/share/man/man1/salsamsg.1"
}
