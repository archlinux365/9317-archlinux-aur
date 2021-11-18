#Maintainer: Xyne <gro xunilhcra enyx, backwards>
pkgname=pacman2aria2
pkgver=2012
pkgrel=3
pkgdesc='Convert pacman download URL lists to reflector-augmented aria2c input lists. Includes powerpill-light.'
arch=(any)
license=(GPL)
url="https://xyne.dev/projects/pacman2aria2"
depends=(aria2 python3 'reflector>=2011.04.04')
source=(
  https://xyne.dev/projects/pacman2aria2/src/pacman2aria2-2012.tar.xz
  https://xyne.dev/projects/pacman2aria2/src/pacman2aria2-2012.tar.xz.sig
)
sha512sums=(
  f04f753db891bd5745fb30f6bd832a811c135f658718944d609108f0d972b7809d5b90c9fcd6a0e16fee8a47f6ad8c2594bde85eb3186fe510fdf638a85b36cb
  d64f40b2a78409b31a93011b7aa9336a12e3ec8600d7ffe13c28271722a91fae3b152ca80c84304b2f3feee16668d65e134a19c253181b5fe6d99ae4f2e4551b
)
md5sums=(
  5b6afbebf4d1aec1e570c1c02540c162
  cbf7101fed7012421a5e558b48004177
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  install -Dm755 "$srcdir/$pkgname-$pkgver/$pkgname" "$pkgdir/usr/bin/$pkgname"
  install -Dm755 "$srcdir/$pkgname-$pkgver/powerpill-light" "$pkgdir/usr/bin/powerpill-light"
}


# vim: set ts=2 sw=2 et:
