# Maintainer: zu1k <i@zu1k.com>
# Contributor: huyz <>

pkgname=nali-go
_pkgname=nali
pkgver=0.6.0
pkgrel=1
pkgdesc='An offline tool for querying IP geographic information and CDN provider.'
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv7h' 'armv6h' 'aarch64')
url="https://github.com/zu1k/nali"
license=('MIT')
makedepends=("go>=1.18")
provides=('nali')
conflicts=('nali')
source=("https://github.com/zu1k/nali/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('b9af61ad93595508ed6f1cad4181e696cfb07b83f0b19320f163f53b8d727ec5')

build() {
  cd "$srcdir/$_pkgname-$pkgver"
  go build \
    -trimpath \
    -buildmode=pie \
    -mod=readonly \
    -modcacherw \
    -ldflags "-linkmode external -X \"github.com/zu1k/nali/internal/constant.Version=$pkgver\" -extldflags $LDFLAGS" \
    -o $_pkgname .
}

package() {
  cd "$srcdir/$_pkgname-$pkgver"
  install -Dm755 $_pkgname "$pkgdir"/usr/bin/$_pkgname
}
