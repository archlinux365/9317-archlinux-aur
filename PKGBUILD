# Maintainer: Toni Tauro <eye@eyenx.ch>
# Co-Maintainer: Lukas Grossar <lukasgrossar@gmail.com>

pkgname=k0sctl-bin
pkgver=0.13.0
pkgrel=1
pkgdesc="A bootstrapping and management tool for k0s clusters."
arch=('x86_64')
url="https://github.com/k0sproject/k0sctl"
license=('Apache')
source=("k0sctl-linux-x64-$pkgver::https://github.com/k0sproject/k0sctl/releases/download/v${pkgver}/k0sctl-linux-x64")
sha256sums=('0beb8fb539c1f1e796972ed10d13bf5c3d5bb06d3c99a1b3f9a3f23183eaaaff')
options=(!strip)

package() {
  install -Dm 755 "$srcdir/k0sctl-linux-x64-$pkgver" "$pkgdir/usr/bin/k0sctl"
}
