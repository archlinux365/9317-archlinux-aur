# Maintainer: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=('gkill-bin')
pkgver='1.0.2'
pkgrel=2
pkgdesc='Interactice process killer written in Go'
arch=('i686' 'x86_64')
url='https://github.com/heppu/gkill'
license=('MIT')
source_i686=("$url/releases/download/v$pkgver/gkill-linux-386")
source_x86_64=("$url/releases/download/v$pkgver/gkill-linux-amd64")
sha512sums_i686=('20e07b4e916473d01804c25a04b9a3d97b2ac1be54ea62d81a77dda262281b39cd0666e30772e9d82c9c4cf18edcf80c3b864d3085ce51ac022c769ee5a2e730')
sha512sums_x86_64=('bb1c51c58adb2f01c85746096bc10e8f85ea3c710cfa9d20aa98fbbacdec54925bc09e7ad421951d3d587d570a656cfbb49d7ec86a1eaa3a62b3429460cd4a6a')

package(){
  install -Dm755 gkill-linux* "$pkgdir/usr/bin/gkill"
}
# vim:set ts=2 sw=2 et:
