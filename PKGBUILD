# Maintainer: Oystein Sture <oysstu@gmail.com>
# Contributor: 

pkgname=python-climin-git
pkgver=r544.2215b1a
pkgrel=2
epoch=1
pkgdesc="Optimizers for machine learning"
arch=("any")
license=("BSD")
url="https://github.com/BRML/climin"
depends=('python' 'python-numpy' 'python-scipy')
makedepends=('python-setuptools')
source=("git://github.com/BRML/climin.git")
sha512sums=("SKIP")

build() {
    cd climin
    python setup.py build
}

package() {
    cd climin
    python setup.py install --prefix=/usr --root="${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
}

pkgver() {
  cd climin
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
