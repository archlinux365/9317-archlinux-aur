# Maintainer: Will Handley <wh260@cam.ac.uk>
_modulename=fgivenx
pkgname=python-$_modulename
pkgver=1.0.22
pkgrel=1
pkgdesc="Python library for plotting Bayesian Functional Posteriors."
arch=(any)
url="https://github.com/williamjameshandley/fgivenx"
license=('MIT')
groups=()
depends=('python-numpy' 'python-matplotlib' 'python-scipy' 'python-joblib' 'python-mpi4py' 'python-tqdm')
makedepends=('python-setuptools')
provides=()
conflicts=()
replaces=()
backup=()
options=(!emptydirs)
install=
source=('https://github.com/williamjameshandley/fgivenx/archive/1.0.22.tar.gz')
sha256sums=('d674ffaef7e47fd6105a521f2e8f4ee6da61fe8d0bba5d2dd1aeb6739e8fc71a')
package() {
  cd "$srcdir/$_modulename-$pkgver"
  python setup.py install --root="$pkgdir/" --optimize=1
  mkdir -p "$pkgdir/usr/share/licenses/$pkgname"
}
