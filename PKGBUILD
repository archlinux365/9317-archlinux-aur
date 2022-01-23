# Maintainer: Richard Neumann aka. schard <mail at richard dash neumann period de>

_pkgbase='dzdsu'
pkgname="python-${_pkgbase}"
pkgver=1.0.2
pkgrel=2
pkgdesc='DayZ dedicated server utility.'
arch=('any')
url="https://github.com/conqp/${_pkgbase}"
license=('MIT')
depends=('python' 'python-setuptools')
makedepends=('git' 'python' 'python-pytest' 'python-setuptools-scm')
source=("${_pkgbase}::git+${url}.git#tag=${pkgver}")
md5sums=('SKIP')

#check() {
#    cd "${srcdir}/${_pkgbase}"
#    pytest
#}

build() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py build
}

package() {
    cd "${srcdir}/${_pkgbase}"
    python setup.py install --root "${pkgdir}" --optimize=1 --skip-build
}
