# Contributor: Jishnu Mohan jishnu7 at gmail dot com

pkgname=quilter
pkgver=2.0.0
pkgrel=1
pkgdesc="Focus on your writing and write beautiful solid stories with the Focus Mode in tow in this Markdown editor."
arch=(any)
url="https://github.com/lainsce/quilter"
depends=(granite gtksourceview3 gtk3 glib2 vala discount webkit2gtk gtkspell3)
makedepends=(unzip ninja meson)
install=quilter.install

source=(
  "https://github.com/lainsce/quilter/archive/${pkgver}.zip"
)
sha256sums=('1877c56eaadf918fd45b477aa43ab1660ee450c9998c465a49329169faae50d5')

build () {
  cd $srcdir/$pkgname-$pkgver
  meson build && cd build
  meson configure -Dprefix=/usr
}

package() {
  cd $srcdir/$pkgname-$pkgver/build
  DESTDIR="$pkgdir" ninja install
}
