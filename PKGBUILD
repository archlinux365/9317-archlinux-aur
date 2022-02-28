# Maintainer: Alexander F. Rødseth <xyproto@archlinux.org>

pkgname=kal
pkgver=1.2.0
pkgrel=1
pkgdesc='Colorful little calendar utility for getting a monthly overview'
arch=(x86_64)
url='https://github.com/xyproto/calendar'
license=(BSD)
makedepends=(git go)
source=("git+$url#commit=6aa85d2675841536608e506a21f93ac4c39f7552") # tag: v1.2.0
b2sums=(SKIP)

build() {
  cd calendar/cmd/kal
  go build -v -mod=vendor -buildmode=pie -trimpath -ldflags="-s -w -extldflags \"${LDFLAGS}\""
}

package() {
  cd calendar
  install -Dm755 cmd/kal/kal "$pkgdir/usr/bin/kal"
  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
