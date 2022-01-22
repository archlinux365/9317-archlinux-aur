# Maintainer: Arturo Penen <apenen@gmail.com>

pkgname=ghorg
pkgver=1.7.6
pkgrel=2
pkgdesc='allows you to quickly clone all of an orgs, or users repos into a single directory.'
arch=('x86_64')
url='https://github.com/gabrie30/ghorg'
license=('Apache')
source=("$pkgname-$pkgver.tar.gz::https://github.com/gabrie30/ghorg/archive/refs/tags/v$pkgver.tar.gz")
sha256sums=('06eabfe7cb3d89fae9c01519c8fabd15de88c309092717b3ad1499cf646304b2')
makedepends=('go')

build() {
  cd $pkgname-$pkgver
  go build
}

package() {
  install -Dm 755 "${srcdir}/$pkgname-$pkgver/ghorg" "${pkgdir}/usr/bin/ghorg"

  # Populate bash and zsh completions
  install -dm 755 "${pkgdir}/usr/share/bash-completion/completions"
  install -dm 755 "${pkgdir}/usr/share/zsh/site-functions"
  "${pkgdir}/usr/bin/ghorg" completion bash > "${pkgdir}/usr/share/bash-completion/completions/ghorg"
  "${pkgdir}/usr/bin/ghorg" completion zsh >  "${pkgdir}/usr/share/zsh/site-functions/_ghorg"
}
