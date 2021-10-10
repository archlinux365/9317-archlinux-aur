# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=gnome-shell-extension-dash-to-plank
pkgver=12
pkgrel=1
pkgdesc="GNOME Shell extension to integrate Plank, the simplest dock on the planet."
arch=("any")
url="https://github.com/hardpixel/dash-to-plank"
license=("GPL")
depends=("gnome-shell" "plank")
provides=("gnome-shell-extension-dash-to-plank")
conflicts=("gnome-shell-extension-dash-to-plank-git")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
md5sums=("10cc2fbfe1c205cb92aaea2f77fe3559")

package() {
  install -d "$pkgdir/usr/share/gnome-shell/extensions" && cp -a "$srcdir/dash-to-plank-$pkgver/dash-to-plank@hardpixel.eu" "$_"
  install -d "$pkgdir/usr/share/glib-2.0" && mv "$pkgdir/usr/share/gnome-shell/extensions/dash-to-plank@hardpixel.eu/schemas" "$_"

  rm -f "$pkgdir/usr/share/glib-2.0/schemas/gschemas.compiled"
}
