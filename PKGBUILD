# Maintainer: Kartik Mohta <kartikmohta@gmail.com>

pkgbase='python2-catkin_lint'
pkgname=('python2-catkin_lint')
_module='catkin_lint'
pkgver='1.6.2'
pkgrel=1
pkgdesc="Check catkin packages for common errors"
url="https://github.com/fkie/catkin_lint"
depends=('python2' 'python2-catkin_pkg')
provides=('python2-catkin-lint')
conflicts=('python-catkin_lint' 'python2-catkin-lint')
makedepends=('python2-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('0e9c6b02ef24a109b10c6f655919ea640a8cbf0cbf5eb4d2b20d9f072fc7c1c4')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_module}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
