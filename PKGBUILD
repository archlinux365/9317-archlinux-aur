# Maintainer: ByteDream
pkgname=crunchy-cli
pkgdesc="A cli for downloading videos and entire series from crunchyroll"
arch=('x86_64' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://github.com/crunchy-labs/crunchy-cli"
license=('GPL3')

pkgver=2.3.3
pkgrel=1

replaces=('crunchyroll-go')

optdepends=(
  'ffmpeg: convert output files & use archive'
)
makedepends=(
  'go'
)
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/crunchy-labs/crunchy-cli/archive/v${pkgver}.tar.gz")
sha256sums=('25d957c78862f802e3b7593c48b90a77f309bbe7477e81132fb2b50931e6565e')

build() {
  cd "$srcdir/$pkgname-$pkgver"
  make VERSION="$pkgver" build
}

package() {
  cd "$srcdir/$pkgname-$pkgver"
  make DESTDIR="$pkgdir" install
}
