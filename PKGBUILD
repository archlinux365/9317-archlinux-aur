# Maintainer: William J. Bowman <aur@williamjbowman.com>

pkgname=mathcomp
pkgver=1.9.0
pkgrel=1
pkgdesc="The entire mathematical components library for Coq."
url="https://math-comp.github.io/math-comp/"
arch=('i686' 'x86_64')
license=('GPL')
depends=('coq>=8.7')
source=(mathcomp-$pkgver.tar.gz::https://github.com/math-comp/math-comp/tarball/mathcomp-$pkgver)
sha256sums=('0c9a7f8ffc4166a78141f72756f72eb739d6d2824654ef0cc34b2d8cea77a540')
sha512sums=('2ed88d8302be7279e30bc17636cdcf059f3c08d900e0734fb2dc351b8003ec2ae645bcbb6d9ee89bc342ae9176a114291f36772fe930af1528a7d0171c16b7f4')
conflicts=('ssreflect')

build() {
  cd $srcdir/math-comp-math-comp-*/$pkgname

  make
}

package(){
  cd $srcdir/math-comp-math-comp-*/$pkgname
  make DSTROOT="${pkgdir}" install
}

