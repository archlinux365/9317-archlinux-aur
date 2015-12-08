pkgname=('python2-linux-gpib')
_pkgname=('linux-gpib')
pkgver=4.0.2
pkgrel=1
pkgdesc='A support package for GPIB (IEEE 488) hardware - Python 2 bindings'
arch=('i686' 'x86_64')
url='http://linux-gpib.sourceforge.net/'
license=('GPL')
depends=('linux-gpib' 'python2')
source=("http://downloads.sourceforge.net/project/${_pkgname}/${_pkgname}%20for%203.x.x%20and%202.6.x%20kernels/${pkgver}/${_pkgname}-${pkgver}.tar.gz")

md5sums=('dee2981476bd9c9f467efd3010095935')


build() {
    cd "${srcdir}/${_pkgname}-${pkgver}/language/python/"
    python2 setup.py build
}

package() {
    cd "${srcdir}/${_pkgname}-${pkgver}/language/python"
    python2 setup.py install --prefix=/usr --root=${pkgdir}

}

# vim:ts=4:et:sw=4
