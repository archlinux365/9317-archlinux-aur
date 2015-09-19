# Maintainer: Alexej Magura <agm2819*gmail*>
#
#
pkgname=(libtinfo libtinfo-5)
pkgver=6
pkgrel=2
pkgdesc="symlink to ncurses for use in cuda and other packages"
arch=('any')
url="http://www.gnu.org/software/ncurses/"
license=('unknown')
depends=('ncurses')
_ncurses="$(pacman -Q $depends | awk '{sub(/-[0-9]+/, "", $2); print $2}')"

package_libtinfo-5() {
  conflicts=(libtinfo)
  pkgver=5
  pkgrel=7
  install -d "$pkgdir"/usr/lib
  ln -s /usr/lib/libncurses.so."$_ncurses" -T "$pkgdir"/usr/lib/libtinfo.so."$pkgver"
  ln -s /usr/lib/libtinfo.so."$pkgver" -T "$pkgdir"/usr/lib/libtinfo.so
}

package_libtinfo() {
  conflicts=(libtinfo-5)
  install -d "$pkgdir"/usr/lib
  ln -s /usr/lib/libncursesw.so."$_ncurses" -T "$pkgdir"/usr/lib/libtinfo.so."$pkgver"
  ln -s /usr/lib/libtinfo.so."$pkgver" -T "$pkgdir"/usr/lib/libtinfo.so
}
