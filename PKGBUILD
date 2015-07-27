# Maintainer: Alexander Minges <alexander.minges@gmail.com>
# Automatically generated by pip2arch on 2015-07-27

pkgname=python2-zeroc-ice
pkgver=3.6.0
pkgrel=2
pkgdesc="Ice is comprehensive RPC framework with support for Python, C++, .NET, Java, JavaScript and more."
url="https://zeroc.com"
depends=('python2')
makedepends=()
optdepends=("zeroc-ice: other language bindings for zeroc-ice")
license=("GPL" "custom:Ice license")
arch=('any')
source=("https://pypi.python.org/packages/source/z/zeroc-ice/zeroc-ice-$pkgver.zip"
        "python2-zeroc-ice.patch")
sha256sums=('030ddd1e35424eeda4669decb51809aef450d2ac97c971123200151d8302236b'
            '62c8ab9a9c2151b552a09ea97015153f7d05f65e5cc1f556bcdef2ad7d8fd7f4')

prepare() {
    cd $srcdir/zeroc-ice-$pkgver
    patch -p1 -i $srcdir/python2-zeroc-ice.patch
}

build() {
    cd $srcdir/zeroc-ice-$pkgver
    python2 setup.py build
}

package() {
    cd $srcdir/zeroc-ice-$pkgver
    python2 setup.py install --root="$pkgdir" --optimize=1 
}
