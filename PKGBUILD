# Maintainer: Jelena Dokic <jrubics@hacke.rs>

pkgbase='pyazo-cli'
pkgname=('pyazo-cli')
_module='pyazo_cli'
pkgver='0.1.32'
pkgrel=1
pkgdesc="Pyazo screenshot hosting command line interface"
url="https://github.com/pyazo-screenshot/cli"
depends=('python' 'python-click' 'python-requests' 'python-pyperclip')
makedepends=('python-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('4b4c81e4dc37f040cd230c64289664fc056737da21528c5d69984d801a9a8aeb')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
    install -Dm644 LICENSE "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
