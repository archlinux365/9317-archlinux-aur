#Automatically generated by pip2arch on 2015-09-16

pkgname=setuptools-metadata
pkgver=0.1.5
pkgrel=1
pkgdesc="Adds a command to setup.py for displaying metadata about the package."
url="https://github.com/j0057/setuptools-metadata"
depends=('python' )
makedepends=('python3' )
license=('UNKNOWN')
arch=('any')
source=('https://pypi.python.org/packages/source/s/setuptools-metadata/setuptools-metadata-0.1.5.tar.gz')
md5sums=('aa80d03d3eba25df8d49fa8c7149426c')

build() {
    cd $srcdir/setuptools-metadata-0.1.5
    python setup.py build
}

package() {
    cd $srcdir/setuptools-metadata-0.1.5
    python setup.py install --root="$pkgdir" --optimize=1 
}
