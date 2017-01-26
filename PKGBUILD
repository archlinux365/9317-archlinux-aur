# Maintainer: Michael Straube <straubem@gmx.de>
# Contributor: Felix Yan <felixonmars@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>
# Contributor: Antonio Rojas <arojas@archlinux.org>

pkgname=ttf-oxygen
epoch=1
pkgver=5.4.3
pkgrel=3
pkgdesc='A desktop/gui font family for integrated use with the KDE desktop'
url='https://projects.kde.org/projects/kde/workspace/oxygen-fonts'
arch=('i686' 'x86_64') # CMake files are arch-dependent
license=('custom:OFL' 'GPL' 'custom:GPL+FE')
depends=('fontconfig' 'xorg-fonts-encodings' 'xorg-font-utils')
makedepends=('extra-cmake-modules' 'fontforge')
provides=('ttf-font')
options=('!emptydirs')
source=("http://download.kde.org/stable/plasma/$pkgver/oxygen-fonts-$pkgver.tar.xz")
sha256sums=('a02f6580e9a53cb16694a99adbb6dbf76f17584f3e97f469a22286299507838c')

prepare() {
  [[ -d build ]] && rm -rf build
  mkdir build
}

build() {
  cd build

  cmake ../oxygen-fonts-$pkgver \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DLIB_INSTALL_DIR=lib \
    -DKDE_INSTALL_USE_QT_SYS_PATHS=ON
  make
}

package() {
  cd build

  make DESTDIR="$pkgdir" install

  # Fix install path
  install -d "$pkgdir"/usr/share/fonts/TTF
  mv "$pkgdir"/usr/share/fonts/truetype/oxygen/*.ttf \
    "$pkgdir"/usr/share/fonts/TTF/

  install -d "$pkgdir"/usr/share/licenses/$pkgname
  install -m644 "$srcdir"/oxygen-fonts-$pkgver/COPYING-{GPL+FE.txt,OFL} \
    "$pkgdir"/usr/share/licenses/$pkgname
}
