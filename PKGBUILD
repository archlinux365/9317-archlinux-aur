# Maintainer: fft

pkgname=rpmlint-git
pkgver=2.2.0.49.g65d344b0
pkgrel=1
pkgdesc='A tool for checking common errors in rpm packages.'
arch=('any')
url="https://github.com/rpm-software-management/rpmlint"
license=('GPL2')
makedepends=('git')
depends=('python' 'python-toml' 'python-zstandard' 'rpm-org' 'cpio')
conflicts=('rpmlint')
source=("${pkgname}::git+https://github.com/rpm-software-management/rpmlint.git#branch=main")
sha256sums=('SKIP')

pkgver() {
    cd ${pkgname}
    git describe --long --tags| sed 's/rpmlint-\([0-9\.]*\)-\(.*\)/\1.r\2/;s/-/./g'
}

build() {
  cd ${pkgname}
  python setup.py build
}

package() {
    cd ${pkgname}
    python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
}
