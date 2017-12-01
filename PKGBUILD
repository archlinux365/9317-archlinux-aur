# Maintainer: Maximilian Stahlberg <maximilian.stahlberg tu-berlin de>

pkgbase=('python-chompack')
pkgname=('python-chompack' 'python2-chompack')
pkgdesc="A Python library for chordal matrix computations."
pkgver=2.3.2
pkgrel=1
arch=('any')
url='http://chompack.readthedocs.io'
license=('gpl3')

source=("https://github.com/cvxopt/chompack/archive/v${pkgver}.tar.gz")

package_python-chompack() {
	makedepends+=('python-setuptools')
	depends+=('python-cvxopt')

	cd "${srcdir}/chompack-${pkgver}"

	# Install the Python library.
	python setup.py install --root="${pkgdir}" --optimize=1
}

package_python2-chompack() {
	makedepends+=('python2-setuptools')
	depends+=('python2-cvxopt')

	cd "${srcdir}/chompack-${pkgver}"

	# Install the Python 2 library.
	python2 setup.py install --root="${pkgdir}" --optimize=1
}

md5sums=('ca99639ca6aa78a8401dd92a5a2e5c3f')
