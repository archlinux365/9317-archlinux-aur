# Maintainer: peippo <christoph+aur@christophfink.com>

pkgname=python-shadow-useragent
_name=${pkgname#python-}
pkgdesc="Pick the most common user-agents on the Internet"
url="https://github.com/lobstrio/shadow-useragent"

pkgver=0.0.17
pkgrel=4

arch=("any")
license=("MIT")

makedepends=(
    "python-setuptools"
)
depends=(
    "python"
    "python-coloredlogs"
    "python-pytz"
    "python-requests"
)

source=(
    "https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz"
    "https://raw.githubusercontent.com/lobstrio/shadow-useragent/master/LICENSE"
)
sha256sums=(
    "ace3f53c0ec697b36eb35bb04ccc04d4727bf924edd5bf7caad78b64d272d755"
    "ae4f776adf4385747f78ad16b5a162814fefe8557f18433cc772a9734716b3a7"
)

build() {
    cd "${srcdir}"/${_name}-${pkgver}
    python setup.py build
}

package() {
    cd "${srcdir}/${_name}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build

    install -Dm644 "${srcdir}/LICENSE" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
    install -Dm644 \
        "${srcdir}/${_name}-${pkgver}/README.md" \
        "${pkgdir}/usr/share/doc/${pkgname}/README.md"

}
