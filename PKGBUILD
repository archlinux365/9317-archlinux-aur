#Automatically generated by pip2arch on 2015-03-31

pkgname=python-envoy
pkgver=0.0.3
pkgrel=1
pkgdesc="Simple API for running external processes."
url="https://github.com/kennethreitz/envoy"
depends=('python' )
makedepends=('python' )
license=('MIT')
arch=('any')
source=('https://pypi.python.org/packages/source/e/envoy/envoy-0.0.3.tar.gz')
md5sums=('548cc52576b6d73fa886439e3100d576')

build() {
    cd $srcdir/envoy-0.0.3
    python setup.py build
}

package() {
    cd $srcdir/envoy-0.0.3
    python setup.py install --root="$pkgdir" --optimize=1 
}
