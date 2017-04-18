# Maintainer: Frederik “Freso” S. Olesen <freso.dk@gmail.com>
# Contributor: Maxime Gauduin <alucryd@archlinux.org>
# Contributor: Fernando Jiménez Solano <fjim@sdfeu.org>
# Contributor: Sven-Hendrik Haase <sh@lutzhaase.com>

pkgname=python-pyacoustid
pkgver=1.1.5
pkgrel=1
pkgdesc='Bindings for Chromaprint acoustic fingerprinting and the Acoustid API'
arch=('any')
url='https://github.com/sampsyo/pyacoustid'
license=('MIT')
depends=('chromaprint')
makedepends=('python-setuptools')
source=("pyacoustid-${pkgver}.tar.gz::https://github.com/sampsyo/pyacoustid/archive/v${pkgver}.tar.gz"
        'https://raw.github.com/sampsyo/beets/master/LICENSE')
sha256sums=('614e350d62af87c7cbc62c0bcaed9fc8330879772d050d245b7bd86556fb1b3f'
            '69b9fa8fe9700714fc1f002aa6bfef097e5422372979195ab48956cd48e20aaf')

build() {
  cd pyacoustid-${pkgver}

  python setup.py build
}

package() {
  cd pyacoustid-${pkgver}

  python setup.py install --root="${pkgdir}" --optimize='1'

  install -dm 755 "${pkgdir}"/usr/share/licenses/python-pyacoustid
  install -m 644 ../LICENSE "${pkgdir}"/usr/share/licenses/python-pyacoustid/
}

# vim: ts=2 sw=2 et:
