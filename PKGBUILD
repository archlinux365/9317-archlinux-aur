# Maintainer: Marcin Tydelski <marcin.tydelski@gmail.com>
# Contributor: Nathan Dyer <https://github.com/nathandyer>

pkgname=vocal
pkgver=2.1.6
_tag=2.1.6
pkgrel=3
pkgdesc='A powerful, beautiful, and simple podcast client for the modern free desktop.'
arch=('i686' 'x86_64')
url='http://www.vocalproject.net'
license=('GPL3')
depends=('libnotify' 'libxml2' 'granite-git' 'clutter-gst' 'clutter-gtk' 'sqlite' 'libsoup' 'json-glib' 'webkit2gtk' 'libgee' 'intltool')
makedepends=('vala' 'cmake')
source=("https://github.com/needle-and-thread/vocal/archive/$_tag.tar.gz")
md5sums=('522a8db42c114836d62d302dece95fd1')

prepare() {
  [[ -d $pkgname-$_tag/build/ ]] || mkdir -p $pkgname-$_tag/build/
}

build() {
  cd $pkgname-$_tag/build/

  cmake .. -DCMAKE_INSTALL_PREFIX=/usr

  make
}

package() {
  cd $pkgname-$_tag/build/

  make DESTDIR="$pkgdir" install
}
