# MaintainerContribut: Michael Fitzmayer <mail@michael-fitzmayer.de>
pkgname=openscenegraph-openmw-git
pkgver=20200909
pkgrel=1
_gitname=osg
pkgdesc="OpenSceneGraph with performance enhancements for OpenMW - git mirror"
arch=('i686' 'x86_64')
url="http://www.openscenegraph.org/"
license=('GPL')
depends=('giflib' 'jasper' 'librsvg' 'xine-lib' 'curl' 'pth')
makedepends=('cmake' 'libvncserver' 'qt5-base' 'ffmpeg' 'mesa')
optdepends=('libvncserver' 'gdal' 'openexr' 'poppler-glib' 'qt5-base' 'ffmpeg')
provides=('openscenegraph-openmw-git' 'openscenegraph-git' 'openscenegraph' 'openthreads')
conflicts=('openscenegraph' 'openscenegraph-svn' 'openscenegraph-git' 'openthreads')
source=(git://github.com/OpenMW/osg.git)
md5sums=('SKIP')

pkgver() {
  cd "${_gitname}"
  git describe --long | sed 's/^OpenSceneGraph-//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  mkdir ${srcdir}/${_gitname}-build/
  cd "${srcdir}/${_gitname}-build/"
  cmake ../${_gitname} \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DLIBRARY_OUTPUT_PATH=/usr/lib \
    -DCMAKE_BUILD_TYPE=Release

  make || return 1
}

package(){
  cd "${srcdir}/${_gitname}-build"
  make DESTDIR="${pkgdir}/" install
  install -D -m644 "${srcdir}/${_gitname}/LICENSE.txt" "${pkgdir}/usr/share/licenses/${pkgname}/LICENSE"
  [ -d "$pkgdir/usr/lib64" ] && mv "$pkgdir/usr/lib64" "$pkgdir/usr/lib" || true
}

