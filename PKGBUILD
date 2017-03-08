pkgbase=('python-gdbgui')
pkgname=('python-gdbgui')
_module='gdbgui'
pkgver='0.7.4.5'
pkgrel=1
pkgdesc="browser-based gdb frontend using Flask and JavaScript to visually debug C, C++, Go, or Rust"
url="https://github.com/cs01/gdbgui"
depends=('python' 'python' 'python-eventlet' 'python-flask' 'python-flask-socketio-git' 'python-pygdbmi' 'python-pypugjs' 'python-enum-compat')
makedepends=('python-setuptools')
license=('custom')
arch=('any')
install='python-gdbgui.install'
source=("https://files.pythonhosted.org/packages/source/g/gdbgui/gdbgui-${pkgver}.tar.gz")
md5sums=('43944d93c843117b3f9414d0e895a364')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/python-gdbgui/LICENSE"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
