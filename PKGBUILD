#Automatically generated by pip2arch on 2016-02-05

pkgname=python2-marshmallow-jsonapi
pkgver=0.4.2
pkgrel=1
pkgdesc="JSON API 1.0 (https://jsonapi.org) formatting with marshmallow"
url="https://github.com/marshmallow-code/marshmallow-jsonapi"
depends=('python2' 'python2-marshmallow')
makedepends=('python2' )
license=('MIT')
arch=('any')
source=('https://pypi.python.org/packages/source/m/marshmallow-jsonapi/marshmallow-jsonapi-0.4.2.tar.gz')
md5sums=('4ebe54391f1d7dbe2facbba5fc8567d9')

build() {
    cd $srcdir/marshmallow-jsonapi-0.4.2
    python2 setup.py build
}

package() {
    cd $srcdir/marshmallow-jsonapi-0.4.2
    python2 setup.py install --root="$pkgdir" --optimize=1 
}
