# Maintainer: Konstantin Kogan <kostyalamer@yandex.ru>
# Contributor: Konstantin Kogan <kostyalamer@yandex.ru>
pkgname=wm_theme_club_07
pkgver=1.0
pkgrel=1
pkgdesc="Theme for Window Maker"
arch=('i686' 'x86_64')
url="http://forum.russ2.com/index.php?showtopic=2899"
license=('GPL')
source=("http://altlinuxclub.ru/arhiv/wm_theme_club_07.tar.gz")
md5sums=('caedc96c331b3f52fa8afd1132012d64')
depends=('windowmaker')
license=('GPL2')

package() {
  cd ${pkgname}
  mkdir -p "$pkgdir/usr/share/WindowMaker/Themes/wm_theme_club_07.themed/"
  install -m644 * "$pkgdir/usr/share/WindowMaker/Themes/wm_theme_club_07.themed/"
}


