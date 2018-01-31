# Contributor: Splex
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=inkscape-git
pkgver=20180131.20102
pkgrel=1
pkgdesc="An Open Source vector graphics editor, using SVG file format, from git master"
url="https://launchpad.net/inkscape"
arch=('i686' 'x86_64')
license=('GPL' 'LGPL')
depends=('aspell' 'gc' 'poppler-glib' 'libxslt' 'gsl' 'libyaml' 'potrace' 'gdl>=3.8.0.25'
	 'gtkmm3' 'libcdr' 'libvisio' 'python2' 'dbus-glib' 'jemalloc' 'libsoup'
	 'gtkspell3' 'libsm')
optdepends=('python2-numpy: some extensions'
            'python2-lxml: some extensions and filters'
            'uniconvertor: reading/writing to some proprietary formats'
	    'ruby: for simplepath extension'
	    'imagemagick6: for some file conversions')
makedepends=('cmake' 'boost' 'intltool' 'git' 'gettext' 'pango' 'python' 'fontconfig')
provides=('inkscape')
conflicts=('inkscape')
options=('!libtool' '!buildflags' '!makeflags')
source=('inkscape.git::git+https://gitlab.com/inkscape/inkscape' document-interface.patch)
sha1sums=('SKIP'
          'b737f80013da9355d35a115ffe7db56ae2318f92')
_gitname="inkscape.git"

pkgver() {
  cd "$_gitname"
  printf %s.%s $(git log -1 --format="%cd" --date=short|tr -d -) $(git rev-list --count HEAD)
}

prepare() {
  cd "$_gitname"
  sed -i 's|"python"|"python2"|g' src/main.cpp
  find share -type f -name "*.py" -exec \
       sed -i '1s|/usr/bin/env python\>|/usr/bin/env python2|g' {} \;
  sed -i '1s|/usr/bin/env python3\>|/usr/bin/env python2|g' CMakeScripts/cmake_consistency_check.py
  sed -i 's|/usr/bin/env python\>|/usr/bin/env python2|g' share/*/{test/,}*.py
  sed -i 's|"python" },|"python2" },|g' src/extension/implementation/script.cpp
  sed -i 's|"python"|"python2"|g' src/main.cpp
  patch -Np1 < "$srcdir"/document-interface.patch || true
}

build() {
  cd "$_gitname"
  [[ -d build ]] || mkdir build
  cd build
  export PKG_CONFIG_PATH="/usr/lib/imagemagick6/pkgconfig"
  cmake .. \
	-DCMAKE_INSTALL_PREFIX=/usr \
	-DCMAKE_BUILD_TYPE=RELEASE \
	-DWITH_GNOME_VFS=OFF \
	-DWITH_DBUS=ON
  make 
}

package() {
  cd "$_gitname/build"
  make DESTDIR="$pkgdir" install
}
