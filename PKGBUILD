# Maintainer: Jonian Guveli <https://github.com/jonian/>
pkgname=devdocs-desktop
pkgver=0.5.0
pkgrel=1
pkgdesc="DevDocs desktop application in GTK3. Multiple API documentations in a fast, organized, and searchable interface."
arch=("any")
url="https://github.com/hardpixel/devdocs-desktop"
license=("GPL")
depends=("python" "python-gobject" "webkitgtk")
provides=("devdocs-desktop")
source=("$pkgname-$pkgver.tar.gz::$url/archive/v"$pkgver".tar.gz")
md5sums=("8152e9bd73776075531a1d1692d03e28")

package() {
  mkdir -p "$pkgdir/opt"
  mkdir -p "$pkgdir/usr/bin"
  mkdir -p "$pkgdir/usr/share/applications"
  mkdir -p "$pkgdir/usr/share/icons/hicolor/128x128/apps"
  mkdir -p "$pkgdir/usr/share/icons/gnome/128x128/apps"

  cp -a "$srcdir/$pkgname-$pkgver" "$pkgdir/opt/$pkgname"

  ln -s "/opt/$pkgname/devdocs_desktop.py" "$pkgdir/usr/bin/devdocs-desktop"
  mv "$pkgdir/opt/$pkgname/devdocs-desktop.desktop" "$pkgdir/usr/share/applications/devdocs-desktop.desktop"

  cp -a "$srcdir/$pkgname-$pkgver/icons/." "$pkgdir/usr/share/icons/hicolor/128x128/apps"
  cp -a "$srcdir/$pkgname-$pkgver/icons/." "$pkgdir/usr/share/icons/gnome/128x128/apps"
}
