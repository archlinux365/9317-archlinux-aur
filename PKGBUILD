# Maintainer: Jérôme Deuchnord <jerome@deuchnord.fr>

pkgname=kosmorro
pkgver=0.6.0
pkgrel=1
pkgdesc='A program that computes the ephemerides'
depends=('python>=3.5.0' 'python<4.0.0'
         'python-skyfield>=1.17' 'python-skyfield<2.0.0'
         'python-numpy>=1.17.0' 'python-numpy<2.0.0'
         'python-tabulate')
optdepends=('texlive-bin: PDF creation support'
            'python-latex: PDF creation support')
makedepends=('python-setuptools'
             'ruby-ronn')
arch=('any')
url='http://kosmorro.space'
license=('AGPL3')

source=("$pkgname-v$pkgver.tar.gz::https://github.com/Deuchnord/kosmorro/archive/v${pkgver}.tar.gz"
        "locales.tar.gz")
sha256sums=("26119122c7c80f59b5203c45874a23790637c28568a999743bfc4a9a5155d683"
            "9c6da9824522480b84868cfb182773311e810cbcfb4d28fe9e794b764038b91e")

build() {
    pip install --user --isolated Babel
    cp -r ${srcdir}/locales/* ${srcdir}/kosmorro-${pkgver}/kosmorrolib/locales

    cd "${srcdir}/kosmorro-${pkgver}/manpage"
    ronn kosmorro.1.md

    cd "${srcdir}/kosmorro-${pkgver}"
    python setup.py compile_catalog build
}

package() {
    cd "${srcdir}/kosmorro-${pkgver}"
    python3 setup.py install --root="${pkgdir}/" --optimize=1 --skip-build
}
