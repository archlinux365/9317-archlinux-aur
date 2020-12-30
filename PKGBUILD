# Maintainer: Raphaël Doursenaud <rdoursenaud@free.fr>
pkgname=qpageview-git
pkgver=0.5.1.r7.g83dc89f
pkgrel=1
pkgdesc="A page based document viewer widget for Qt5/PyQt5."
arch=('any')
url="https://github.com/frescobaldi/qpageview"
license=('GPL')
makedepends=('git')
depends=(
  'python>=3.6'
  'python-pyqt5'
  'qt5-base'
)
optdepends=(
   'python-poppler-qt5: Display PDF documents'
   'python-pycups: Printing to a local CUPS server'
)
provides=("${pkgname%-git}=$pkgver-$pkgrel")
conflicts=("${pkgname%-git}" "ly")
options=(!emptydirs)
source=("$pkgname"::'git://github.com/frescobaldi/qpageview.git')
md5sums=('SKIP')

_gitroot='https://github.com/frescobaldi/qpageview.git'
_gitname='qpageview'

pkgver() {
  cd "$srcdir/$pkgname"
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  cd "$srcdir/$pkgname"
  python setup.py install --root="$pkgdir/" --optimize=1
}

# vim:set ts=2 sw=2 et:
