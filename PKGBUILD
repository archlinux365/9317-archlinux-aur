# Maintainer: Specter119 <spcter119 AT gmail.com>

pkgname=jupyter-lsp
pkgver=1.5.0
pkgrel=1
pkgdesc='Multi-Language Server WebSocket proxy for Jupyter Notebook/Lab server.'
arch=(any)
url=https://pypi.org/project/$pkgname
license=(MIT)
depends=(python jupyter-server)
makedepends=(python-setuptools)
optdepends=(
  bash-language-server
  javascript-typescript-langserver
  jedi-language-server
  python-language-server
  python-lsp-server
  pyright
  r-languageserver
  texlab
  sql-language-server
  vscode-css-languageserver
  vscode-json-languageserver
  yaml-language-server)
source=(https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz)
sha256sums=('d30f114ac8318fd7ebac23bf106eadd912d330e39abac2abb0240d1a2840f4ac')

build() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py install --root $pkgdir --skip-build --optimize=1
  mv $pkgdir/{usr,}/etc
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
