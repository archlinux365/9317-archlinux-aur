#Automatically generated by pip2arch on 2018-08-09

pkgname=pyznap
pkgver=0.9.1
pkgrel=1
pkgdesc="ZFS snapshot tool written in Python"
url="https://github.com/yboetz/pyznap"
depends=('python' )
makedepends=('python3' )
license=('GPLv3')
arch=('any')
source=("pyznap-${pkgver}.tar.gz::https://github.com/yboetz/pyznap/archive/v${pkgver}.tar.gz")
md5sums=('4cabfb171611647e85b986d09fc2442c')

build() {
    cd $srcdir/pyznap-0.9.1
    python setup.py build
}

package() {
    cd $srcdir/pyznap-0.9.1
    python setup.py install --root="$pkgdir" --optimize=1
}
