# Maintainer: Bradan J. Wolbeck <bwolbeck@compaqdisc.com>
# Contributor: Sean Enck <enckse@gmail.com>
# Contributor: John K. Luebs <https://github.com/jkl1337>

pkgname=zasm
pkgver=4.2.3
pkgrel=1
pkgdesc="A 2-pass assembler for the Zilog 8-bit Z80 CPU"
arch=('any')
url="http://k1.spdns.de/Develop/Projects/zasm/"
license=('BSD')
source=("git+https://bitbucket.org/megatokio/zasm.git#commit=c6b043ea4018d2d76e35fe00ab345e526a574270"
        "git+https://bitbucket.org/megatokio/libraries.git#commit=a2d8746b559ed7c9e412cb1b5afa684e08e28c8d")
sha256sums=('SKIP' 'SKIP')

build() {
  cd ${srcdir}/${pkgname}
  rmdir Libraries
  ln -s ../libraries Libraries
  cd Linux
  make
}

package() {
  cd ${srcdir}/${pkgname}/Linux
  install -Dm755 zasm "${pkgdir}/usr/bin/zasm"
}
