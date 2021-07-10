# Maintainer: Aman Sinha

pkgname=mongodb-shell
pkgver=1.0.0
pkgrel=1
pkgdesc='The MongoDB Shell includes all features of legacy mongo shell with new syntax highligting, clear error messages and intelligent autocomplete.'
url='https://www.mongodb.com/'
license=('Apache')
optdepends=('mongodb-bin')
provides=("mongosh")
arch=('x86_64')
source=("https://downloads.mongodb.com/compass/mongosh-$pkgver-linux-x64.tgz")
sha256sums=("7d6ef14e8abdb22904fbb3aafa1bbcc8d3b71be48b6ba881d0cf36124c99f396")
options=(!strip)
package() {
  cd $srcdir/mongosh-$pkgver-linux-x64/
  install -Dm755 ./bin/mongosh $pkgdir/usr/bin/mongosh
  install -Dm755 ./bin/mongocryptd-mongosh $pkgdir/usr/bin/mongocryptd-mongosh
  install -Dm644 ./THIRD_PARTY_NOTICES $pkgdir/usr/share/doc/$pkgname/THIRD_PARTY_NOTICES
  install -Dm644 ./LICENSE-mongocryptd $pkgdir/usr/share/doc/$pkgname/LICENSE-mongocryptd
  install -Dm644 ./README $pkgdir/usr/share/doc/$pkgname/README
}
