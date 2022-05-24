# Maintainer: Paul Weingardt <paulweingardt@web.de>
# Co-Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Contributor: TDY <tdy@gmx.com>
pkgname=git-cola
pkgver=4.0.0
pkgrel=1
pkgdesc="The highly caffeinated Git GUI"
arch=('any')
url="https://git-cola.github.io"
license=('GPL2')
depends=('git' 'hicolor-icon-theme' 'python-qtpy')
makedepends=('python-build' 'python-installer' 'python-jaraco.packaging' 'python-pip'
             'python-rst.linker' 'python-setuptools-scm' 'python-sphinx' 'python-wheel')
checkdepends=('appstream-glib' 'desktop-file-utils' 'python-pyqt5' 'python-pytest-flake8')
optdepends=('python-pygments: syntax highlighting'
            'python-send2trash: enables "Send to Trash" functionality.'
            'tcl: to use the built-in ssh-askpass handler')
source=("https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz"{,.asc})
sha256sums=('b22e9d253a41584c727eef0757715cc8f11ccfc5ce1b54f163ed7faad158661c'
            'SKIP')
validpgpkeys=('FA41BF59C1B48E8C5F3DA61C8CE26BF4A9F606B0') # David Aguilar <davvid@gmail.com>

build() {
  cd "$pkgname-$pkgver"
  python -m build --wheel --no-isolation

#  make prefix=/usr doc man
  make prefix=/usr man
}

check() {
  cd "$pkgname-$pkgver"

  # Run the unit tests
  make test

  desktop-file-validate share/applications/*.desktop
  appstream-util validate-relax --nonet share/metainfo/*.appdata.xml
}

package() {
  cd "$pkgname-$pkgver"
  python -m installer --destdir="$pkgdir" dist/*.whl

#  make prefix=/usr DESTDIR="$pkgdir" install{,-doc,-man}
  make prefix=/usr DESTDIR="$pkgdir" install-man
}
