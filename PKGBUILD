# Maintainer: tytan652 <tytan652@tytanium.xyz>

pkgname=obs-teleport
pkgver=0.2.0
pkgrel=1
pkgdesc="An OBS Studio plugin for an open NDI-like replacement. Pretty simple, straight forward. No NDI compatibility in any form"
arch=("i686" "x86_64" "aarch64")
url="https://obsproject.com/forum/resources/teleport.1445/"
license=("GPL2")
depends=("obs-studio" "libjpeg")
makedepends=("go")
source=(
  "$pkgname-$pkgver.tar.gz::https://github.com/fzwoch/obs-teleport/archive/$pkgver.tar.gz"
)
sha256sums=("e04989daa0db4d87f076412158e8d555082910419775dbcaf45a5fc4180fdc36")

build() {
  cd "$pkgname-$pkgver"
  export CGO_CPPFLAGS="${CPPFLAGS}"
  export CGO_CFLAGS="${CFLAGS} -I/usr/include/obs"
  export CGO_CXXFLAGS="${CXXFLAGS}"
  export CGO_LDFLAGS="${LDFLAGS} -ljpeg -lobs -lobs-frontend-api"
  export GOFLAGS="-buildmode=c-shared -trimpath -ldflags=-linkmode=external -mod=readonly -modcacherw"

  go build -v -o "$pkgname.so" .
}


package() {
  cd "$pkgname-$pkgver"
  install -Dm644 "$pkgname.so" -t "$pkgdir"/usr/lib/obs-plugins/
}
