# Maintainer: neodarz <neodarz at neodarz dot net>

_pkgname=flake8-logging-format
pkgname=python-$_pkgname

pkgver=0.6.0
pkgrel=1
pkgdesc="Flake8 extension to validate (lack of) logging format strings"

url='https://github.com/globality-corp/flake8-logging-format'
arch=('any')
license=('Apache-2.0')

depends=('python')

source=("https://github.com/globality-corp/$_pkgname/archive/$pkgver.tar.gz")
sha512sums=('ed81121c0a1e1b17627af23eb8a1dd542cdf435c504bc3221a74606a4b6c5da4fae28b3759eda9728ab34c1d51f77bf8adcdcd2f5277b4211b1cd4a3ae4994f6')

package() {
    cd "$_pkgname-$pkgver"
    python setup.py install --root="$pkgdir" --optimize=1
}

