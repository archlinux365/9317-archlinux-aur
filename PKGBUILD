# Maintainer: willemw <willemw12@gmail.com>

_pkgname=sdat2img
pkgname=$_pkgname-git
pkgver=r10.e5b41bd
pkgrel=1
pkgdesc="Convert sparse Android data image to filesystem image"
arch=('i686' 'x86_64')
url="https://github.com/xpirt/sdat2img"
license=('Apache')
depends=('python')
makedepends=('git')
provides=($_pkgname)
conflicts=($_pkgname)
source=($pkgname::git://github.com/xpirt/sdat2img.git)
md5sums=(SKIP)

pkgver() {
  cd $pkgname
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

#prepare() {
#  cd $pkgname
#  sed -i 's|#!/usr/bin/env python[ ]*$|#!/usr/bin/env python2|' sdat2img.py
#}

package() {
  cd $pkgname
  install -Dm755 sdat2img.py "$pkgdir/usr/bin/sdat2img"
}

