# Maintainer: Brocode <bros at brocode dot sh>

pkgname=goat
pkgver=0.9.1
pkgrel=1
pkgdesc="better sleep"
arch=('x86_64')
url="https://github.com/brocode/goat"
license=('WTFPL')
source=('https://github.com/brocode/goat/releases/download/0.9.1/goat')
sha256sums=('56f5047c35cefb597abc658e4096fc64df3b18d138d0b5b054c04ed5fd1bd963')

package() {
  mkdir -p "${pkgdir}/usr/bin"
  chmod +x goat
  cp goat "${pkgdir}/usr/bin/goat"
}

