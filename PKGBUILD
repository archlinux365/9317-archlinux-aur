# Maintainer: Polis Minus <polisminus2247@tuta.io>
pkgname=regressi-bin
pkgver=1.8.0
pkgrel=1
pkgdesc="Regressi allows you to calculate combined quantities into a function of differential equational."
arch=("x86_64")

url='http://regressi.fr'
makedepends=()
depends=()
license=('none')
sha512sums=(
  '96f02a2a5d50a16535a84db8d7b6d5b7e35b90dc14e9d7e09f525dde748bcd597597bbcb4e184265ffcd342fc4fa2c25fc8a06e8655149e76ee673666b246622' 
  'fc7d8ee6337917d7bf23bdec1157cf5bcf90cc90d1bb012374d2da83d519047167778484706a108466eef8c0136f1a4b612adc85b7cef163eec804c4a5cad19c'
)

source=(http://regressi.fr/WordPress/wp-zip/regressiM.zip regressi.desktop)

package() {
  install -D regressi.desktop "$pkgdir/usr/share/applications/regressi.desktop"
  install -D regressiM "$pkgdir/usr/bin/regressi"
}
