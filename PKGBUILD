# Maintainer: Fabio Zanini <fabio.zanini _at_ tuebingen.mpg.de>
pkgname='python2-pysam'
pkgver=0.8.4
pkgrel=1
pkgdesc="Python interface for the SAM/BAM sequence alignment and mapping format"
arch=('x86_64')
url="https://github.com/pysam-developers/pysam"
license=('MIT')
groups=()
depends=('python2')
makedepends=('python2-setuptools' 'cython2>=0.22')
provides=('python2-pysam')
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=("https://github.com/pysam-developers/pysam/archive/v${pkgver}.tar.gz")
md5sums=('66bc07593fe420ec415ef24d8b36e996')

package() {
  cd "$srcdir/pysam-$pkgver"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
