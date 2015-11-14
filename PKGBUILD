# Maintainer: Dylan Whichard <dylan at whichard dot com>

pkgbase=python-py-wink
pkgname=${pkgbase}-git
_pkgname=py-wink
pkgver=r52.ebc9e46
pkgrel=1
pkgdesc="Python library for interfacing with Wink devices"
arch=('any')
url="https://github.com/umbc-hackafe/py-wink"
license=('MIT')
depends=('python')
makedepends=('python' 'git')
source=("py-wink::git+https://github.com/umbc-hackafe/$_pkgname.git")
md5sums=('SKIP')

pkgver() {
  cd "${srcdir}/${_pkgname}"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  cd "${srcdir}/${_pkgname}"
  python setup.py install --root="$pkgdir" --optimize=1 || return 1
}

# vim:set ts=2 sw=2 et:
