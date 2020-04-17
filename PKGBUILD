# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>

pkgname=o
pkgver=2.24.2
pkgrel=1
pkgdesc='Small, fast and VT100-compatible text editor'
arch=(x86_64)
url='https://github.com/xyproto/o'
license=(BSD)
makedepends=(git go-pie)
source=("git+$url#commit=31c207f62ee8afa673f91118511d32d42acb9c00") # tag: 2.24.2
sha256sums=('SKIP')
options=(!strip)

build() {
  cd "$pkgname"

  # Using gccgo + upx gives a smaller size
  #go build -buildmode=pie -gccgoflags="-s -w $LDFLAGS" && upx o

  go build -buildmode=pie -gcflags="all=-trimpath=$PWD" -asmflags "all=-trimpath=$PWD" -ldflags "-s -w -extldflags $LDFLAGS"
}

package() {
  install -Dm755 $pkgname/o "$pkgdir/usr/bin/o"
  install -Dm644 $pkgname/LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -Dm644 $pkgname/o.1 "$pkgdir/usr/share/man/man1/o.1"
}

# vim: ts=2 sw=2 et:
