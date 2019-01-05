# Maintainer: dracorp aka Piotr Rogoza <piotr dot r dot public at gmail dot com>

pkgname=xflux-gui-git
pkgver=v1.1.10.r72.gf5dd882
pkgrel=1
pkgdesc='Better lighting for Linux. Open source GUI for xflux'
arch=(any)
url='https://justgetflux.com/linux.html'
license=(MIT)
provides=(xflux-gui=$pkgver)
conflicts=(xflux-gui)
depends=(
hicolor-icon-theme
python-pexpect
# python2-gconf
xflux
libindicator-gtk2
# python2-libappindicator
python-xdg
)
makedepends=(git)
source=('git://github.com/xflux-gui/xflux-gui.git')
_gitname='xflux-gui'
md5sums=('SKIP')

pkgver(){
  if [ -d "$srcdir"/$_gitname ]; then
    cd "$srcdir"/$_gitname
    ( set -o pipefail
    git describe --long 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)" )
  fi
}
build(){
  cd "$srcdir/$_gitname"
  python setup.py build
}
package(){
  cd "$srcdir/$_gitname"
  python setup.py install --root="$pkgdir"
  install -Dm755 LICENSE $pkgdir/usr/share/licenses/xflux-gui-git/LICENSE
}
