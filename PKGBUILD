# Maintainer: Jose Riha <jose 1711 gmail com>
# Automatically generated by pip2arch on 2017-02-28

pkgname=python-m3u8
pkgver=0.3.2
pkgrel=1
pkgdesc="Python m3u8 parser"
url="https://github.com/globocom/m3u8"
depends=('python')
license=('MIT')
arch=('any')
source=("https://pypi.python.org/packages/4f/44/b2c6296f7f1f9112683c191f2695f8ede64fed66abed7cfa61496bcedee1/m3u8-${pkgver}.tar.gz")
md5sums=('cfbe680d2a73423ad139450a76832744')

build() {
    cd $srcdir/m3u8-${pkgver}
    python setup.py build
}

package() {
    cd $srcdir/m3u8-${pkgver}
    python setup.py install --root="$pkgdir" --optimize=1 
}
