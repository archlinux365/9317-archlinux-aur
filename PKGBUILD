# Maintainer: Christian Krause ("wookietreiber") <christian.krause@mailbox.org>
# shellcheck disable=2034
# shellcheck disable=2148

pkgname='python-frontmatter'
pkgver=1.0.0
pkgrel=1
pkgdesc="Parse and manage posts with YAML (or other) frontmatter"
arch=('any')
url="https://pypi.org/project/python-frontmatter/"
license=('MIT')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/${pkgname}/${pkgname}-${pkgver}.tar.gz")
md5sums=('3718ee8fa3b0d4e5b262c9895ef44b81')
depends=('python-toml' 'python-yaml')
makedepends=('python-build' 'python-installer' 'python-wheel')
checkdepends=('python-pytest')

build() {
  # shellcheck disable=2154
  cd "$srcdir"/$pkgname-$pkgver || exit 1

  python -m build --wheel --no-isolation
}

check(){
  cd "$srcdir/$pkgname-$pkgver" || exit 1

  pytest
}

package() {
  cd "$srcdir"/$pkgname-$pkgver || exit 1

  # shellcheck disable=2154
  python -m installer --destdir="$pkgdir" dist/*.whl
}
