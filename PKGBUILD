# Maintainer: Daniel Pereira <daniel@garajau.com.br>

pkgname=pacom
pkgver=2.1.1
pkgrel=1
pkgdesc="Pacom: the Pacman companion"
url="https://github.com/kriansa/pacom"
arch=(any)
license=(Apache)
depends=(jq curl)
source=("https://github.com/kriansa/pacom/archive/v${pkgver}.tar.gz")
sha256sums=(d23ef19790701cbd799d1df804a6d6574abfa5b7217efd62e56c4c9ae18ab26d)

build() {
  cd "$pkgname-$pkgver" || exit 1
  make
}

package() {
  cd "$pkgname-$pkgver" || exit 1

  install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
  install -d -m755 "$pkgdir/usr/bin/"
  cp build/pacom "$pkgdir/usr/bin/"
}
