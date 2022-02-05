# Contributor: Simo Huhtiranta <simo_huhtirantaATpp_inet_fi>  
# Contributor: Tilmann Becker <tilmann.becker@web.de>
# Maintainer: Stefan Husmann <stefan-husmann@t-online.de>

pkgname=scribus-svn
pkgver=24911
pkgrel=1
pkgdesc="A desktop publishing program - Version from SVN"
arch=('i686' 'x86_64')
license=('GPL' 'LGPL')
url="http://www.scribus.net"
depends=('hunspell' 'podofo' 'libcups' 'graphicsmagick' 'poppler'
	 'libcdr' 'libvisio' 'libpagemaker' 'harfbuzz-icu' 'python'
	 'qt6-declarative' 'libmspub' 'libqxp' 'hicolor-icon-theme'
	 'libzmf' 'libfreehand' 'qt6-base' 'qt6-5compat')
makedepends=('subversion' 'cmake' 'qt6-tools')
optdepends=('lib2geom: for mesh distortion')
conflicts=('scribus')
provides=('scribus')
source=('scribus::svn://scribus.net/trunk')
sha256sums=('SKIP')
_svnmod='scribus'

pkgver() {
  cd ${_svnmod}
  local ver="$(svnversion)"
  printf "%s" "${ver//[[:alpha:]]}"
}

build() {
  cd $_svnmod/Scribus
  cmake . -DCMAKE_INSTALL_PREFIX:PATH=/usr \
	-DWANT_GRAPHICSMAGICK:BOOL=YES \
	-DCMAKE_LIBRARY_PATH:PATH=/usr/lib/qt6 \
        -DCMAKE_SKIP_RPATH=ON \
	-DCMAKE_BUILD_WITH_INSTALL_RPATH:BOOL=FALSE \
	-DQT_PREFIX:PATH="/usr" \
	-DWANT_SVNVERSION:BOOL=YES \
	-DWANT_CPP17:BOOL=YES 
	
  make
}

package () {
  cd $_svnmod/Scribus
  make DESTDIR="$pkgdir" install
  install -Dm644 COPYING "$pkgdir"/usr/share/licenses/$pkgname/COPYING
  install -Dm644 scribus.desktop "$pkgdir"/usr/share/applications/scribus.desktop
  install -d "$pkgdir"/usr/share/pixmaps
  ln -s /usr/share/scribus/icons/1_5_0/scribus.png "$pkgdir"/usr/share/pixmaps/scribus.png
  # move around some picture files
  for _i in AppIcon.png AllCaps.png Kapital.xpm Strike.xpm \
		       outlined.png shadow.png shade.png Revers.png zeichen.png
  do install "$pkgdir"/usr/share/scribus/icons/1_5_0/$_i "$pkgdir"/usr/share/scribus/icons/1_5_1/$_i
     rm "$pkgdir"/usr/share/scribus/icons/1_5_0/$_i
  done
}
