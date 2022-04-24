# Maintainer: xiretza <xiretza+aur@xiretza.xyz>

_pkgname=amaranth-boards
pkgname="python-$_pkgname-git"
pkgver=r208.2d0a23b
pkgrel=1
pkgdesc="Board definitions for Amaranth HDL"
arch=(any)
url="https://github.com/amaranth-lang/$_pkgname"
license=('BSD')
depends=('python')
makedepends=('git' 'python-build' 'python-installer' 'python-wheel' 'python-setuptools' 'python-setuptools-scm')
depends=('python-amaranth')
provides=("python-nmigen-boards=$pkgver" "python-$_pkgname=$pkgver")
conflicts=('python-nmigen-boards' "python-$_pkgname")
replaces=('python-nmigen-boards-git')
source=("git+$url.git")
sha256sums=('SKIP')

pkgver() {
	cd "$_pkgname"

	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
	cd "$_pkgname"

	python -m build --wheel --no-isolation
}

package() {
	cd "$_pkgname"

	python -m installer --destdir="$pkgdir" dist/*.whl

	install -Dm 644 LICENSE.txt "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
