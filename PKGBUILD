# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=jamesdsp-pulse-git
pkgver=2.0.r3.gb6354fa
pkgrel=1
pkgdesc="An audio effect processor for PulseAudio clients"
arch=('x86_64')
url="https://github.com/Audio4Linux/JDSP4Linux"
license=('GPL3')
depends=('glibmm' 'gst-plugins-base' 'libpulse' 'qt5-svg')
makedepends=('git')
provides=("${pkgname%-git}" 'jamesdsp')
conflicts=("${pkgname%-git}" 'jamesdsp' 'jdsp4linux' 'jdsp4linux-gui' 'gst-plugin-jamesdsp')
replaces=('jdsp4linux-git' 'jdsp4linux-gui-git' 'gst-plugin-jamesdsp-git')
source=('git+https://github.com/Audio4Linux/JDSP4Linux.git'
        'git+https://github.com/ThePBone/EELEditor.git'
        'jamesdsp.desktop')
sha256sums=('SKIP'
            'SKIP'
            'c6496e6981471aa3f8d1593673991e422d243ff3efe595b3230de713588599c3')

pkgver() {
  cd "$srcdir/JDSP4Linux"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd "$srcdir/JDSP4Linux"
  git submodule init src/subprojects/EELEditor
  git config submodule.EELEditor.url "$srcdir/EELEditor"
  git submodule update

  mkdir -p build
}

build() {
  cd "$srcdir/JDSP4Linux"

  pushd build
  qmake .. "CONFIG += USE_PULSEAUDIO"
  make
  popd
}

package() {
  cd "$srcdir/JDSP4Linux"
  install -Dm755 build/src/jamesdsp -t "$pkgdir/usr/bin"
  install -Dm644 resources/icons/icon.png \
    "$pkgdir/usr/share/pixmaps/jamesdsp.png"
  install -Dm644 resources/icons/icon.svg \
    "$pkgdir/usr/share/icons/hicolor/scalable/apps/jamesdsp.svg"
  install -Dm644 "$srcdir/jamesdsp.desktop" -t "$pkgdir/usr/share/applications"
}
