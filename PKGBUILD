# Maintainer: tembleking <tembleking at gmail dot com>
# Maintainer: pumpkincheshire <sollyonzou@gmail.com>

pkgname=('python-haversine' 'python2-haversine')
_name=haversine
pkgver=2.3.0
pkgrel=2
pkgdesc="Calculate the distance (in various units) between two points on Earth using their latitude and longitude."
arch=("any")
url="https://github.com/mapado/haversine"
license=('MIT')
depends=()
makedepends=("python2-setuptools" "python-setuptools")
source=("https://files.pythonhosted.org/packages/source/${_name::1}/${_name}/${_name}-${pkgver}.tar.gz")
md5sums=("ff2d43a74195ec00c42ccd5da2a3f3de")

prepare() {
    cp -r $_name-$pkgver $_name-$pkgver-py2
}

build() {
    cd "$srcdir/$_name-$pkgver"
    python setup.py build

    cd "$srcdir/$_name-$pkgver-py2"
    python2 setup.py build
}


package_python-haversine() {
    depends=("python")
	cd "$srcdir/$_name-$pkgver"
	python setup.py install --root="$pkgdir/" --optimize=1 --skip-build
#    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_name-$pkgver/LICENSE"
}

package_python2-haversine() {
    depends=("python2")
	cd "$srcdir/$_name-$pkgver-py2"
    python2 setup.py install --root="$pkgdir/" --optimize=1 --skip-build
#    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$_name-$pkgver/LICENSE"
}

