# Maintainer: zotan <aur@zotan.email>

pkgname=runitor-bin
pkgver=0.9.2
pkgrel=1
pkgdesc="A command runner with healthchecks.io integration"
arch=('x86_64')
url="https://github.com/bdd/runitor"
license=('0BSD')
source=("https://github.com/bdd/runitor/releases/download/v${pkgver}/runitor-v${pkgver}-linux-amd64")
sha512sums=('72d10cafa09dce073f0831dc2f454f6db7bdc801e8a86359a0fcfa7c652482bd66e96087683647263df24d667cccb5e1403f4836d6fc4cfbc6780dad3af365e4')

package() {
  install -D ${srcdir}/runitor-v${pkgver}-linux-amd64 $pkgdir/usr/bin/runitor
}
