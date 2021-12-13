#Maintainer: Xyne <gro xunilhcra enyx, backwards>
pkgname=python3-colorsysplus
pkgver=2021.11
pkgrel=2
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
  9b8147882fbeeb5ef5960d2cf10de299f21841ce80b6d70648752a540b616af9959b5aa3908be9c970c2abeba593bc6ff6f9af2cf482d15c65859cf3f6d94728
)
md5sums=(
  006826210d2b7f6576af746a99b17219
  0f18bddc4f2729c8353afa3d6572f22f
)
validpgpkeys=('EC3CBE7F607D11E663149E811D1F0DC78F173680')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 ctconv "$pkgdir/usr/bin/ctconv"
}


# vim: set ts=2 sw=2 et:
