# Maintainer: Morten Linderud <morten@linderud.pw>  
_pkgname='gilt'
pkgbase="python-gilt"
pkgname=("python-gilt" "python2-gilt")
pkgver=1.1
pkgrel=1
pkgdesc='A GIT layering tool'
url='https://github.com/metacloud/gilt'
arch=('any')
license=('MIT')
makedepends=('python' 'python-setuptools' 'python-pbr'
             'python2' 'python2-setuptools' 'python2-pbr')
source=("${pkgname}-${pkgver}.tar.gz::https://github.com/metacloud/gilt/archive/${pkgver}.tar.gz")
sha256sums=('b5110ac91e85a62fc6971ef8d4f0e6808b9872f83ac943ca91dae52ddd098c19')

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py build
    python2 setup.py build
}

package_python-gilt() {
    depends=('python-click' 'python-colorama' 'python-fasteners' 'python-yaml' 'python-sh' 'python-giturlparse')

    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

package_python2-gilt() {
    depends=('python2-click' 'python2-colorama' 'python2-fasteners' 'python2-yaml' 'python2-sh' 'python-giturlparse')

    cd "${srcdir}/${_pkgname}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
# vim:set ft=sh ts=2 sw=2 et:
