# Maintainer: Astro Benzene <universebenzene at sina dot com>
# Contributor: Francois Boulogne <fboulogne at april dot org>

pkgname=python-tifffile
pkgver=2021.1.8
_pyname=${pkgname#python-}
pkgrel=1
pkgdesc="Read and write image data from and to TIFF files"
arch=('any')
url="https://github.com/cgohlke/tifffile"
license=('BSD')
makedepends=('python-setuptools')
depends=('python-numpy>=1.19.4')
optdepends=('python-matplotlib>=3.3.3: required only for plotting'
            'python-imagecodecs>=2021.1.8: required only for encoding or decoding LZW, JPEG, etc'
            'python-lxml>=4.6.2: required only for validating and printing XML'
            'python-zarr>=2.6.1: required only for opening zarr storage')
#checkdepends=('python-pytest')
source=("https://files.pythonhosted.org/packages/source/${_pyname:0:1}/${_pyname}/${_pyname}-${pkgver}.tar.gz")
sha256sums=('b26e0373eca968f672043814a880700677ca1f6d1ce8a4e4d22ec8aea2bc0fcb')

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    python setup.py build
}

#check() {
#    cd ${srcdir}/${_pyname}-${pkgver}
#
#    PYTHONPATH="build/lib" pytest
#}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}

    install -Dm644 LICENSE -t "${pkgdir}/usr/share/licenses/${pkgname}"
    install -Dm644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
    python setup.py install --root="${pkgdir}" --optimize=1
}

# vim:ts=2:sw=2:et:
