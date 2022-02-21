# Maintainer: Iyán Méndez Veiga <me (at) iyanmv (dot) com>
pkgname=python-galois-git
_name=galois
pkgver=r752.e35831a
pkgrel=1
pkgdesc="A performant NumPy extension for Galois fields and their applications"
arch=('x86_64')
url="https://github.com/mhostetter/galois"
license=('MIT')
depends=(
    'python-numpy'
    'python-numba'
    'python-typing_extensions'
)
makedepends=('git' 'python-build' 'python-installer')
checkdepends=('python-pytest')
provides=('python-galois')
conflicts=('python-galois')
source=("git+https://github.com/mhostetter/galois.git")
sha256sums=('SKIP')

pkgver() {
    cd "${srcdir}/${_name}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
    cd "${srcdir}/${_name}"
    python -m build --wheel --no-isolation
}

package() {
    cd "${srcdir}/${_name}"
    python -m installer --destdir="$pkgdir" dist/*.whl
}

#check() {
#    cd "${srcdir}/${_name}"
#    python -m pytest tests/
#}
