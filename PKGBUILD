# Maintainer: zlfn <elusive1102@naver.com>

pkgname=krita-plus
_pkgver=5.1.0
pkgver=${_pkgver/-/}
pkgrel=1
pkgdesc='Edit and paint images. Krita Plus containing bug fixes on top of the latest 5.0 release.'
arch=(x86_64)
url='https://krita.org'
license=(GPL3)
depends=(kitemviews kitemmodels ki18n kcompletion kguiaddons kcrash qt5-svg qt5-multimedia quazip
         gsl libraw exiv2 openexr fftw openjpeg2 opencolorio libwebp hicolor-icon-theme)
makedepends=(extra-cmake-modules kdoctools boost eigen vc poppler-qt5 python-pyqt5 libheif
             qt5-tools sip kseexpr libmypaint)
optdepends=('poppler-qt5: PDF filter' 'ffmpeg: to save animations'
            'python-pyqt5: for the Python plugins' 'libheif: HEIF filter'
            'kseexpr: SeExpr generator layer' 'kimageformats: PSD support' 'libmypaint: support for MyPaint brushes'
            'krita-plugin-gmic: GMic plugin')
provides=(krita)
conflicts=(krita)
source=(https://github.com/KDE/krita/archive/refs/tags/v5.1.0-prealpha.tar.gz)
sha256sums=('SKIP')
validpgpkeys=('05D00A8B73A686789E0A156858B9596C722EA3BD'  # Boudewijn Rempt <foundation@krita.org>
              'E9FB29E74ADEACC5E3035B8AB69EB4CF7468332F'  # Dmitry Kazakov (main key) <dimula73@gmail.com>
              '064182440C674D9F8D0F6F8B4DA79EDA231C852B') # Stichting Krita Foundation <foundation@krita.org>

build() {
  cmake -B build -S krita-$_pkgver-prealpha \
    -DBUILD_TESTING=OFF \
    -DBUILD_KRITA_QT_DESIGNER_PLUGINS=ON
  cmake --build build
}

package() {
  DESTDIR="$pkgdir" cmake --install build
}
