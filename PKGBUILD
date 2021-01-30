# Maintainer: Francesco Minnocci <ascoli dot minnocci at gmail dot com>

pkgname=python-pixcat-git
_pkgname=pixcat
pkgver=r25.69e35c0
pkgrel=1
pkgdesc="CLI and Python 3.6+ API to display images on a kitty terminal with optional resizing."
arch=(any)
url='https://github.com/mirukana/pixcat'
license=('LGPL3')
depends=('python' 'python-blessed' 'python-pillow' 'python-docopt' 'python-requests' 'python-dataclasses' 'python-ansiwrap')
makedepends=('python-setuptools' 'git')
provides=('pixcat')
conflicts=('pixcat')
source=("${_pkgname}::git://github.com/mirukana/pixcat")
sha256sums=('SKIP')

pkgver() {
	cd "${srcdir}/${_pkgname}"

	# Get the version number.
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build(){
  cd "${srcdir}/${_pkgname}"

  python setup.py build
}

package() {
  cd "${srcdir}/${_pkgname}"
  python setup.py install --prefix=/usr --root="$pkgdir/" --optimize=1 --skip-build
}
# vim:set ts=2 sw=2 et:
