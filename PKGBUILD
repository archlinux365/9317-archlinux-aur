# Maintainer: Christoph Scholz <christoph.scholz@gmail.com>

pkgbase=python-mapproxy
pkgname=('python-mapproxy' 'python2-mapproxy')
pkgver=1.8.2
pkgrel=1
arch=('any')
url="https://github.com/mapproxy/mapproxy"
license=('APACHE')
makedepends=('python-setuptools' 'python2-setuptools')
source=("mapproxy-$pkgver.tar.gz::$url/archive/$pkgver.tar.gz")
md5sums=('00c66d2ee84e733556b30b1a2aa5a1d2')

build() {
  cp -rf mapproxy-${pkgver} mapproxy2-${pkgver}
  cd $srcdir/mapproxy-${pkgver}
  python setup.py build 
  cd $srcdir/mapproxy2-${pkgver}
  python2 setup.py build
}

package_python-mapproxy() {
depends=('python' 'python-pillow')
  cd $srcdir/mapproxy-${pkgver}
  python setup.py install --root=$pkgdir/ 
}

package_python2-mapproxy() {
depends=('python2' 'python-pillow')
  cd $srcdir/mapproxy2-${pkgver}
  python2 setup.py install --root=$pkgdir/  
}
