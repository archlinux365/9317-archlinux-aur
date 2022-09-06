# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

pkgname='pipdeptree'
pkgver=2.3.0
pkgrel=1
arch=(any)
pkgdesc='Command line utility to show dependency tree of Python packages'
url="https://github.com/naiquevin/$pkgname"
depends=('python-pip')
makedepends=(python-build python-hatchling python-hatch-vcs python-installer python-wheel)
optdepends=('graphviz: for generating graphical output')
license=(MIT)
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz")
sha256sums=('93e3b2d5c7e9363b782f84610410d0824ac46a3618cb514c6ba64665df9cba27')


prepare() {
  cd $pkgname-$pkgver
  sed -i -e 's|hatchling>=1\.8\.1|hatchling|' pyproject.toml
}
    
build() {
  cd $pkgname-$pkgver
  python -m build --wheel --no-isolation
}

package() {
  cd $pkgname-$pkgver
  python -m installer --destdir="$pkgdir" dist/*.whl
  # install documentation
  install -Dm644 README.md -t "$pkgdir"/usr/share/doc/$pkgname
  # install license
  install -Dm644 LICENSE -t "$pkgdir"/usr/share/licenses/$pkgname
}

# vim:set ts=2 sw=2 et:
