#Maintainer: Xyne <gro xunilhcra enyx, backwards>
pkgname=python3-colorsysplus
pkgver=2021.11
pkgrel=4
pkgdesc='An extension of the standard colorsys module with support for CMYK, terminal colors, ANSI and more.'
arch=(any)
license=(GPL)
url="https://xyne.dev/projects/python3-colorsysplus"
depends=(python3)
source=(
  https://xyne.dev/projects/python3-colorsysplus/src/python3-colorsysplus-2021.11.tar.xz
  https://xyne.dev/projects/python3-colorsysplus/src/python3-colorsysplus-2021.11.tar.xz.sig
)
sha512sums=(
  a9dd5a8bff1d164a6c4eba8a4352a9808789273b801e76983ace37306c55496bc598d3b5fe77f43b8bc8e14caf73029aabd64aea6d33330e2bc7e2843a4badc2
  3735e27238d2925672fd8be3e1eb72a3290db782d3471d0a4c8a9603de1511f64a693ce36e91c52ccedc7ae8c183acd2dd1a1a923e5905027d72cba8d8a41a20
)
md5sums=(
  006826210d2b7f6576af746a99b17219
  8228818f0a9e1625c7418866f2f2ca7e
)
validpgpkeys=('D89FAAEB4CECAFD199A2F5E612C6F735F7A9A519')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 ctconv "$pkgdir/usr/bin/ctconv"
}


# vim: set ts=2 sw=2 et:
