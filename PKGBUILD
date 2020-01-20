# Maintainerr: TransistorLogic <liuhongwu2003@outlook.com>

pkgname=cyaron
pkgver=0.4.2
pkgrel=1
pkgdesc="CYaRon: Yet Another Random Olympic-iNformatics test data generator, A library for automatically generating test data for Online Judge, Olympic Informatics or automatic application testing"
url="https://www.luogu.org/"
depends=('python' )
makedepends=('python3' )
license=('LGPLv3')
arch=('any')
source=("https://files.pythonhosted.org/packages/b1/e9/279c7ab30b2ae766241487ea9bc86101a00b26b443d33ac9db1e58e090e9/cyaron-${pkgver}.tar.gz")
md5sums=('b04af533e39ffb0232dc6fa9fb2a3250')

build() {
    cd $srcdir/cyaron-${pkgver}
    python setup.py build
}

package() {
    cd $srcdir/cyaron-${pkgver}
    python setup.py install --root="$pkgdir" --optimize=1 
}
