# Maintainer: Hoang-Ngan Nguyen zhoangngan@gmail.com
pkgname=rseye-git
_pkgname=rseye
pkgver=0.1
pkgrel=1
pkgdesc="Freeze screen regularly to help prevent RSI and protect the eyes."
arch=('i686' 'x86_64')
url="https://github.com/hoangngan82/$_pkgname"
license=('MIT')
depends=(libxrender)
optdepents=('awk: find and kill running instances')
makedepends=(git)
source=("git+https://github.com/hoangngan82/$_pkgname.git")
md5sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd "$srcdir/$_pkgname"
  make
}

package() {
  install -D "$srcdir/$_pkgname/rseye" "$pkgdir/usr/bin/$_pkgname"
  install -Dm644 "$srcdir/$_pkgname/LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
