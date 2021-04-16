# Maintainer: Edu4rdSHL <edu4rdshl@protonmail.com>

pkgname=rusnapshot-git
_pkgname=rusnapshot
pkgver=4.28a7545
pkgrel=1
pkgdesc='Simple and handy btrfs snapshoting tool. Supports scheduled snapshots
and restoring. Backed with SQLite. Git version.'
arch=('any')
url='https://github.com/Edu4rdSHL/rusnapshot'
license=('GPL3')
makedepends=('rust' 'git')
conflicts=("$_pkgname")
provides=("$_pkgname")
source=("git+https://github.com/Edu4rdSHL/$_pkgname.git")
sha512sums=('SKIP')

pkgver() {
  cd "$_pkgname"

  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

build() {
  cd "$_pkgname"
  cargo build --release --locked
}

check() {
  cd "$_pkgname"
  cargo test --release --locked
}

package() {
  cd "$_pkgname"
  install -Dm 755 "target/release/$_pkgname" -t "${pkgdir}/usr/bin"
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"
}

