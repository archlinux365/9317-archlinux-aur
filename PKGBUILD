# Contributor :Anish Bhatt <anish[removethis][at]gatech[dot]edu>
# Maintainer : Anish Bhatt <anish[removethis][at]gatech[dot]edu>
# Other Contributors : trontonic for man page & license fixes.

pkgname=deheader
pkgver=1.2
pkgrel=1

pkgdesc='C and C++ file analyzer to determine which header enclusions can be removed while still allowing them to compile'
url='http://www.catb.org/esr/deheader/'
arch=('any')

source=(http://www.catb.org/~esr/deheader/deheader-$pkgver.tar.gz
	python3.patch
	python2.patch)
md5sums=('c46e2a865f43db151ad026f819ab5644'
         '7735d4ed133178b0114b6fb017a9e069'
         '62edf5aa5ee0206632ea2b50c22dfeb7')

#change to python2, if you don't want python3
#depends=('python2')
depends=('python')
provides=('deheader')
license=('BSD')

build () {
	pushd ${srcdir}/deheader-$pkgver
#	Use this if you wish to stick to python2
#	patch -p0 < ../python2.patch 
	patch -p0 < ../python3.patch
}
package() {
  install -d -m755 ${pkgdir}/usr/bin || return 1
  install -m755 ${srcdir}/deheader-$pkgver/deheader ${pkgdir}/usr/bin || return 1
  install -d -m755 ${pkgdir}/usr/share/man/man1 || return 1
  install -m644 ${srcdir}/deheader-$pkgver/deheader.1 ${pkgdir}/usr/share/man/man1 || return 1
  install -Dm644 ${srcdir}/deheader-$pkgver/COPYING "$pkgdir/usr/share/licenses/$pkgname/COPYING" || return 1
}

