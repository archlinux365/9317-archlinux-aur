# Maintainer: Astro Benzene <universebenzene at sina dot com>
_pyname=iminuit
pkgname=python-${_pyname}-doc
pkgver=2.8.4
pkgrel=1
pkgdesc="Documentation for Python iminuit module"
arch=(any)
url="http://iminuit.readthedocs.io"
license=('GPL' 'MIT')
makedepends=("python-${_pyname}=${pkgver}" 'python-nbsphinx>=0.8.6' 'python-sphinx_rtd_theme' 'python-matplotlib' 'python-pillow' 'pandoc')
source=("https://github.com/iminuit/iminuit/archive/v${pkgver}.tar.gz")
md5sums=('187e9ca15e8c2ce80a3d2fc343a1cb7e')

prepare() {
    cd ${srcdir}/${_pyname}-${pkgver}/doc

    sed -i "/\"nbsphinx\"/a \    \'IPython\.sphinxext\.ipython_console_highlighting\',"  conf.py
}

build() {
    cd ${srcdir}/${_pyname}-${pkgver}

    make build/html/done
}

package() {
    cd ${srcdir}/${_pyname}-${pkgver}/build

    install -d -m755 "${pkgdir}/usr/share/doc/${pkgname%-doc}"
    cp -a html "${pkgdir}/usr/share/doc/${pkgname%-doc}"
    install -Dm644 -t "${pkgdir}/usr/share/licenses/${pkgname}" ../LICENSE
}
