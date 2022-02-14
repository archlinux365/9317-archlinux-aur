# Original maintainer: Miguel de Val-Borro <miguel dot deval at gmail dot com>
# Current maintainer: Corentin Cadiou <contact@cphyc.me>
_gitname=yt
pkgname=python-$_gitname-git
pkgver=4.0.0.r668.g03c41c0d9
pkgrel=1
pkgdesc="python package for data analysis and visualization"
url="http://yt-project.org"
arch=(any)
license=('BSD')
depends=('python-numpy' 'python-matplotlib' 'python-sympy' 'python-unyt')
makedepends=('cython')
optdepends=(
    'jupyter'
    'openmp: multithred support'
    'python-mpi4py: parallelism support'
)
source=("git+https://github.com/yt-project/yt")
provides=('python-yt')
md5sums=(SKIP)

build() {
  cd "$srcdir/$_gitname"
  python setup.py build
}

package() {
  cd "$srcdir/$_gitname"
  python setup.py install --root="$pkgdir/" --optimize=1
  install -D -m644 COPYING.txt "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

pkgver() {
  cd "$srcdir/$_gitname"
  git describe --long --tags | sed 's/^yt-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}
