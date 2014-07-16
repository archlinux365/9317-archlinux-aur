# Maintainer: Doug Newgard <scimmia at archlinux dot info>

_pkgname=epour
pkgname=$_pkgname-git
pkgver=0.6.0.r0.g305d119
pkgrel=1
pkgdesc="Torrent client based on EFL"
arch=('any')
url="http://www.enlightenment.org"
license=('GPL3')
depends=('python2-efl' 'python2-xdg' 'libtorrent' 'hicolor-icon-theme')
makedepends=('git' 'python2-distutils-extra')
provides=("$_pkgname=$pkgver")
conflicts=("$_pkgname")
install=$_pkgname.install
source=("git://git.enlightenment.org/apps/$_pkgname.git")
sha256sums=('SKIP')

pkgver() {
  cd "$srcdir/$_pkgname"

  git describe --tags --long | sed 's/^v//;s/-/.r/;s/-/./g'
}

package() {
  cd "$srcdir/$_pkgname"

  python2 setup.py install --root="$pkgdir" --optimize=1

# install text files
  install -d "$pkgdir/usr/share/doc/$_pkgname/"
  install -m644 -t "$pkgdir/usr/share/doc/$_pkgname/" README AUTHORS
}
