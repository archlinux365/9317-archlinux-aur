# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=just-git
pkgver=0.3.3.334
pkgrel=1
pkgdesc="Just a command runner, like make."
arch=('x86_64' 'i686')
url="https://github.com/casey/just"
license=('WTFPL' 'MIT' 'Apache-2.0')
makedepends=('cargo')
provides=('just')
conflicts=('just')
source=(git+https://github.com/casey/just.git)
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname%-git}
  echo $(git describe --tags|tr - .|tr -d v).$(git rev-list --count HEAD)
}

build() {
  cd ${pkgname%-git}
  cargo build --release
}

package() {
  cd ${pkgname%-git}
  install -Dm755 "$srcdir"/${pkgname%-git}/target/release/just "$pkgdir"/usr/bin/just
}
