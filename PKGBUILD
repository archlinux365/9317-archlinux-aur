# Maintainer: Felix Yan <felixonmars@archlinux.org>
# Maintainer: Antonio Rojas <arojas@archlinux.org>
# Contributor: Andrea Scarpino <andrea@archlinux.org>

pkgname=breeze-kde4
pkgver=5.14.5
pkgrel=1
arch=(x86_64)
pkgdesc='Artwork, styles and assets for the Breeze visual style for the Plasma Desktop'
url='https://www.kde.org/workspaces/plasmadesktop/'
license=(LGPL)
depends=(frameworkintegration kdecoration breeze-icons kwayland hicolor-icon-theme kdelibs)
makedepends=(extra-cmake-modules kcmutils automoc4)
optdepends=('kcmutils: for breeze-settings')
groups=(plasma)
source=("https://download.kde.org/stable/plasma/$pkgver/breeze-$pkgver.tar.xz"{,.sig})
sha256sums=('e78e6eec31cf8fb7c6d1d823e07bebcabf978ba94772081490a38a5ac5871796'
            'SKIP')
validpgpkeys=('2D1D5B0588357787DE9EE225EC94D18F7F05997E'  # Jonathan Riddell <jr@jriddell.org>
              '0AAC775BB6437A8D9AF7A3ACFE0784117FBCE11D'  # Bhushan Shah <bshah@kde.org>
              'D07BD8662C56CB291B316EB2F5675605C74E02CF'  # David Edmundson <davidedmundson@kde.org>
              '1FA881591C26B276D7A5518EEAAF29B42A678C20') # Marco Martin <notmart@gmail.com>

prepare() {
  mkdir -p build
}

build() {
  cd build
  cmake ../breeze-$pkgver \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_INSTALL_LIBDIR=lib \
    -DUSE_KDE4=ON \
    -DBUILD_TESTING=OFF
  make
}

package() {
  cd build
  make DESTDIR="$pkgdir" install

  # needed for pure Qt4 apps
  install -d "$pkgdir"/usr/lib/qt4/plugins/styles
  ln -s /usr/lib/kde4/plugins/styles/breeze.so "$pkgdir"/usr/lib/qt4/plugins/styles
}
