#Maintainer: Xyne <gro xunilhcra enyx, backwards>
pkgname=python3-gpg_batch_sign
pkgver=2021.11.20
pkgrel=4
pkgdesc='A module and stand-alone script for batch-signing files with GPG.'
arch=(any)
license=(GPL)
url="https://xyne.dev/projects/python3-gpg_batch_sign"
depends=(python3)
source=(
  https://xyne.dev/projects/python3-gpg_batch_sign/src/python3-gpg_batch_sign-2021.11.20.tar.xz
  https://xyne.dev/projects/python3-gpg_batch_sign/src/python3-gpg_batch_sign-2021.11.20.tar.xz.sig
)
sha512sums=(
  336133cd07c332cb3cb3c0f6fae63b1905455ea27c5c2d892b54ca2068f10769b889879e34e1db6473940590040ac5984ce41d5b77b38a1707d470a37780bdfd
  3a91d7411f39091d8fb39f9c266f6e6fbae7a0d7d842d1cee7fb1fcf123d94212815fe801e952e896af1d741a52b86a0d9da32b38801d8da2f523facbd394eeb
)
md5sums=(
  3e6972122f14ef911e0e5203a4f0bef6
  0a9fec316b961c527977c2d3f820965d
)
validpgpkeys=('D89FAAEB4CECAFD199A2F5E612C6F735F7A9A519')

package ()
{
  cd "$srcdir/$pkgname-$pkgver"
  python3 setup.py install --prefix=/usr --root="$pkgdir" --optimize=1
  install -Dm755 gpg-batch_sign "$pkgdir"/usr/bin/gpg-batch_sign
}


# vim: set ts=2 sw=2 et:
