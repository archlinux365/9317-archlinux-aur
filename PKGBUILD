# Maintainer: Pierre Lalet <pierre@droids-corp.org>

pkgbase='miasm-git'
pkgbasename='miasm'
pkgname=('python-miasm-git' 'python2-miasm-git')
pkgver=0.1.1.dev89
pkgrel=1
pkgdesc='Machine code manipulation library'
arch=('any')
url='https://miasm.re/'
license=('GPL2')
makedepends=('git' 'python-setuptools' 'python2-setuptools')
source=("git+https://github.com/cea-sec/miasm.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$pkgbasename"
  python setup.py --version 2>/dev/null | grep -v ^build
}

prepare() {
    cp -a ${srcdir}/${pkgbasename}{,-py2}
}

build() {
  (
    cd "$srcdir/$pkgbasename"
    python setup.py build
  )
  (
    cd "$srcdir/$pkgbasename-py2"
    python2 setup.py build
  )
}

package_python-miasm-git() {
  depends=('python' 'python-pyparsing' 'python-future')
  optdepends=('python-llvmlite: jit with LLVM engine, bridge between Miasm and LLVM IRs'
              'python-pycparser: additional features based on type manipulations'
              'python-z3: additional features based on constraint solving')
  cd "$srcdir/$pkgbasename"
  python setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1
  install -Dm0644 -t "$pkgdir/usr/share/licenses/$pkgname/" LICENSE
}

package_python2-miasm-git() {
  depends=('python2' 'python2-pyparsing' 'python2-future')
  optdepends=('python2-llvmlite: jit with LLVM engine, bridge between Miasm and LLVM IRs'
              'python2-pycparser: additional features based on type manipulations'
              'python2-z3: additional features based on constraint solving')
  cd "$srcdir/$pkgbasename-py2"
  python2 setup.py install --root="${pkgdir}" --prefix=/usr --optimize=1
  install -Dm0644 -t "$pkgdir/usr/share/licenses/$pkgname/" LICENSE
}
