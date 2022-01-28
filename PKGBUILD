# Maintainer: Mirko Scholz
# Contributor: Evgeniy Alekseev <arcanis at archlinux dot org>
# Contributor: Knut Franke <Knut.Franke ad gmx dot de>
# Contributor: Olaf Leidinger <leidola at newcon dot de>
# Contributor: Robal <nigrantis.tigris at gmail dot com>
# Contributor: Alexander <chronischzuspaet at gmail dot com> Kempen

# see https://svnweb.freebsd.org/ports/head/science/scidavis/Makefile?view=markup

_pkgname=scidavis
pkgname=scidavis-qt5
pkgver=2.4.0+r1
_commit=b7a35c7fcb9d1badac418bf07ab8353bbe6658f1
_commit_liborigin=a92f26f28e531f64684b66a2731dd617bea3cb45
_commit_qwtplot3d=b2655743d30ed3185f3c0e2626b33a1d29655216
pkgrel=3
pkgdesc="Application for Scientific Data Analysis and Visualization, fork of QtiPlot. Qt5 port"
arch=('x86_64')
url="http://scidavis.sourceforge.net/"
license=('GPL')
makedepends=('boost' 'cmake' 'qt5-tools'
'sip' 'pyqt-builder'
'qwt5-qt5>=5.2.3.4-2'
)
depends=('gsl' 'glu' 'mesa' 'muparser>=2.3.2' 'shared-mime-info'
'desktop-file-utils' 'hicolor-icon-theme'
'python-pyqt5'
'python-pyqt5-sip'
'qt5-svg'
'python' 'python-scipy')
conflicts=('scidavis')
source=(
   "${_pkgname}-${pkgver}.zip::https://github.com/SciDAVis/scidavis/archive/${_commit}.zip"
   "liborigin-${_commit_liborigin}.zip::https://github.com/SciDAVis/liborigin/archive/${_commit_liborigin}.zip"
   "qwtplot3d-${_commit_qwtplot3d}.zip::https://github.com/SciDAVis/qwtplot3d/archive/${_commit_qwtplot3d}.zip"
)
sha512sums=('1ada921f7cdcaf0d36ea3237d7c30b6e9457710e4340eeeb1f2afe6965804613089b5a6994954c48e16702cae86c2a8426b471b5e4c7c64222655c8e0c5e617f'
            'aa63824a62cb4abf15241d35091c697c143ea0185e7efedbf3931c4cb427c5646606e15a6dc1cdeb2e143d6d77476b9fdd877cff3cc797d7439a5cba953a450c'
            '5784fe55b11ee6437b765964b87522dd60a1e84e4424982ca3f3f3c6b09d986c5d5f8f0dfa593d70027f614865261eee27c7827c4d194cbe2f678d60ae4bf0b7')

prepare() {
  cd "${_pkgname}-${_commit}"
  rm -rf 3rdparty/liborigin
  mv ../liborigin-${_commit_liborigin} 3rdparty/liborigin
  rm -rf 3rdparty/qwtplot3d 
  mv ../qwtplot3d-${_commit_qwtplot3d} 3rdparty/qwtplot3d
  mkdir -p build
}

build() {
  cd "${_pkgname}-${_commit}"
  cd build
  cmake ..  -DSEARCH_FOR_UPDATES=OFF -DDOWNLOAD_LINKS=OFF -DORIGIN_IMPORT=ON -DSCRIPTING_PYTHON=ON \
            -DCMAKE_INSTALL_PREFIX=/usr || true
  make
}

package() {
  cd "${_pkgname}-${_commit}"
  cd build
  make INSTALL_ROOT="${pkgdir}" DESTDIR="${pkgdir}" install
}
