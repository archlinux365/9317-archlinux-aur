# Maintainer: Stefan Gehr <stefangehr@protonmail.com>
pkgname=utqemu-git
pkgver=r26.cd7bb30
pkgrel=1
pkgdesc="Ubuntu qemu is an easy to use ubuntu touch emulator/virtual machine"
arch=('any')
url="https://github.com/ubports/utqemu"
license=('LGPL3')
depends=('qemu')
makedepends=('git')
source=("${pkgname}::git+https://github.com/ubports/utqemu.git")
md5sums=('SKIP')

pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/$pkgname/src"
	install -Dm755 utq.sh "$pkgdir"/usr/bin/utq
}
